from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import requests

from dotenv import load_dotenv
load_dotenv()  # loads .env from project root

import os

app = Flask(__name__)

# Not needed as we are using proxy in vite config (React Js) for local development
CORS(
    app,
    resources={r"/*": {"origins": ["http://localhost:5173","http://localhost:5174","http://localhost:3000", "https://frontend-nine-ebon-34.vercel.app"], "methods": ["GET", "POST"]}},
    supports_credentials=True,
    allow_headers=["Content-Type", "Authorization"]
)

@app.route('/')
def root():
    return jsonify({'message':'server is ready to host jokes and github user details. To see jokes change url to /api/jokes and github user goto /api/github'})
    

@app.route('/api')
def api_root():
    return '<h1>Still searching for joke !!! Go to /api/jokes</h1> <h2>Still searching for Github user !!! Go to /api/github</h2>'


@app.route('/api/jokes')
def jokes_api():
    jokes = [
    {"id": 1, "title": "A Joke", "content": "This is a Joke"},
    {"id": 2, "title": "Another Joke", "content": "This is another Joke"},
    {"id": 3, "title": "A Third Joke", "content": "This is a third Joke"},
      ]
    
    return jsonify(jokes)


@app.route('/api/members')
def member_api():
    memberData = {"Members":[
         "Member1", "Member2", "Member3"
    ]}
    
    return memberData


@app.route('/api/github')
def github_api():
        # Third‑party HTTP client library to make a GET request to an external API. Used to make outgoing HTTP calls from your Python code to other services.
        # Example: call an external API, download files, etc.
        resp = requests.get("https://api.github.com/users/Prashant5ingh") # Github API request. --> fetch data of all users in a list
        # resp = requests.get("https://api.github.com/users/octocat") # Github API request.
        print("Response status code: ", resp.status_code)
        print("Response type: ", type(resp))
        if resp.ok:
             data = resp.json()
            #  print(data) # --> print user data
            #  print(data.get("login")) # --> print user login name data
            #  print(data["name"]) # --> print user site admin boolean data

            # return jsonify(data[:5]) # top 5 result for resp = requests.get("https://api.github.com/users")
             return jsonify(data)

            #  print(data.get("login")) --> data fetching for specific user
            #  print(data["name"])
        return jsonify({'message':'Failed to fetch data from Github API'}), resp.status_code
     
if __name__ == '__main__':
    PORT = int(os.environ.get("PORT",5500))
    app.run(debug=True, host='0.0.0.0', port=PORT)
    # use host '0.0.0.0' for production/containers, 'localhost' for local dev.