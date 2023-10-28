from flask import (
    Flask,
    jsonify,
    render_template,
    redirect,
    request,
    session,
    url_for,
    flash,
)
from flask_pymongo import PyMongo
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
import os
import tensorflow as tf
from flask import Flask
from flask_cors import CORS, cross_origin
import json
import PIL.Image
import numpy as np


app = Flask(__name__)
app.config["SECRET_KEY"] = "key123"  # Change this later
app.config[
    "MONGO_URI"
] = "mongodb+srv://aramshankar:A1k2h4i8l.163264@cluster0.aybp86y.mongodb.net/plantify"
mongo = PyMongo(app)

model = tf.keras.models.load_model("dummy_model.h5")

CORS(app)
print(os.getcwd())

plant_names = []

# load data from species_name.json into a list
with open("species_name.json") as f:
    data = json.load(f)
    # print(data)

    for i in sorted(list(data.keys())):
        plant_names.append(data[i])


def preprocess_image(image, target_size=(180, 180)):
    """
    Expected input: A tensor of dtype "string", representing the image contents.
    Resize and add batch dimension to output the desire image size for model.
    """
    image = tf.io.decode_jpeg(image, channels=3)
    image = tf.image.resize(image, target_size)
    return tf.expand_dims(image, axis=0)


@app.route("/upload", methods=["POST", "GET"])
def upload_file():
    """
    Expected requests body: A file with key "file" in the request.files dictionary
    save the file to local dir (currently) and call model prediction
    Expected response: A json object with the predictions
    """
    print("request.files", request.files)
    ##TODO: add checks and error handling
    file = request.files["file"]

    if file:
        file.save("image.jpg")
        img_file = tf.io.read_file("image.jpg")
        image_array = preprocess_image(img_file)
        print("image_array", image_array.shape)
        print("model expected shape", model.layers[0].input_shape)
        predictions = model.predict(image_array)
        print(len(predictions[0]))

        max_index = np.argmax(predictions[0])
        print(max_index, predictions[0][max_index])

        print("predictions", predictions)
        print(plant_names[max_index])
        return jsonify(
            message="Image saved, Prediction made: " + str(plant_names[max_index]),
            predictions=predictions.tolist(),
            success=True,
            plant=plant_names[max_index],
        )


# Define a simple route
@app.route("/", methods=["GET"])
def hello_world():
    return redirect(url_for("login"))


# User registration route
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        # Prevent duplicate username creation
        existing_user = mongo.db.users.find_one({"username": username})
        if existing_user:
            flash("Username already exists. Please choose a different one.", "danger")
            return redirect(url_for("register"))

        # Hash the password before storing it in the database
        hashed_password = generate_password_hash(password, method="sha256")

        # Create a new user
        new_user = {"username": username, "password": hashed_password}
        mongo.db.users.insert_one(new_user)
        flash("Registration successful. You can now log in.", "success")
        return redirect(url_for("login"))

    return render_template("register.html")


# User login route
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        # Retrieve the user by username from the database
        user = mongo.db.users.find_one({"username": username})

        # Check if the user exists and the password is correct
        if user and check_password_hash(user["password"], password):
            session["user_id"] = str(user["_id"])  # Store user ID in the session
            flash("Login successful.", "success")
            return redirect(
                url_for("dashboard")
            )  # Redirect to a protected dashboard route

        flash("Invalid username or password. Please try again.", "danger")

    return render_template("login.html")


# Protected dashboard and access to Plantify features
@app.route("/dashboard")
def dashboard():
    if "user_id" in session:
        user_id = session["user_id"]
        user = mongo.db.users.find_one({"_id": ObjectId(user_id)})
        if user:
            return "Welcome to Plantify, {}".format(user["username"])

    flash("You must be logged in to access this page.", "danger")
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(debug=True)
