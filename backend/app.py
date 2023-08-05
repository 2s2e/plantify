from flask import Flask, jsonify

app = Flask(__name__)

# Define a simple route
@app.route('/')
def hello_world():
    return jsonify(message="Hello, world!")

if __name__ == '__main__':
    app.run(debug=True)
