from flask import Flask, jsonify, render_template, redirect, request, session, url_for, flash
from flask_pymongo import PyMongo
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'key123'  # Change this later
app.config['MONGO_URI'] = 'mongodb+srv://aramshankar:A1k2h4i8l.163264@cluster0.aybp86y.mongodb.net/plantify'
mongo = PyMongo(app)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify(message="No image found", success=False)
    
    file = request.files['image']

    if file.filename == '':
        return jsonify(message="No image found", success=False)

    if file:
        file.save(file.filename)

        image_array = preprocess_image(file)
        predictions = model.predict(image_array)
        return jsonify(predictions=predictions.tolist(), success=True)

# Define a simple route
@app.route('/')
def hello_world():
    return redirect(url_for('register'))

# User registration route
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Prevent duplicate username creation
        existing_user = mongo.db.users.find_one({'username': username})
        if existing_user:
            flash('Username already exists. Please choose a different one.', 'danger')
            return redirect(url_for('register'))
        
        # Hash the password before storing it in the database
        hashed_password = generate_password_hash(password, method='sha256')
        
        # Create a new user
        new_user = {'username': username, 'password': hashed_password}
        mongo.db.users.insert_one(new_user)
        flash('Registration successful. You can now log in.', 'success')
        return redirect(url_for('login'))
    
    return render_template('register.html')

# User login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Retrieve the user by username from the database
        user = mongo.db.users.find_one({'username': username})
        
        # Check if the user exists and the password is correct
        if user and check_password_hash(user['password'], password):
            session['user_id'] = str(user['_id'])  # Store user ID in the session
            flash('Login successful.', 'success')
            return redirect(url_for('dashboard'))  # Redirect to a protected dashboard route
    
        flash('Invalid username or password. Please try again.', 'danger')
    
    return render_template('login.html')

# Protected dashboard and access to Plantify features
@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        user_id = session['user_id']
        user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
        if user:
            return "Welcome to Plantify, {}".format(user['username'])
    
    flash('You must be logged in to access this page.', 'danger')
    return redirect(url_for('login'))


if __name__ == '__main__':
    app.run(debug=True)
