# Install and run
### venv
(*Use of virtual environment is encouraged but not required*) 

- Run `python3 -m venv backendEnv` and replace backendEnv with your chosen name for the env
- Then run `source backendEnv/bin/activate` to activate the virtual environment
- Simply run `deactivate` to exit the venv
  
### requirement.txt
To ensure all developers working on the same project use the same library version. We use `requirement.txt` file to store the dependencies required for the project

- Run `pip install -r requirements.txt` to install dependencies
  
- Make sure to run `pip freeze > requirements.txt` to update `requirements.txt` file ***if you installed new packages locally***

### Running server
`python app.py`
