from flask import Flask, jsonify, request
import os
import tensorflow as tf

app = Flask(__name__)

print(os.getcwd())
model = tf.keras.models.load_model('backend\dummy_model.h5')

def preprocess_image(image):
    image = tf.image.decode_jpeg(image, channels=3)
    image = tf.image.resize(image, [180, 180])
    image /= 255.0
    return image

# Define a simple route
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


@app.route('/')
def hello_world():
    return jsonify(message="Hello, world!")

if __name__ == '__main__':
    app.run(debug=True)
