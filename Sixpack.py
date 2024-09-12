from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

class User:
    def __init__(self, user_id, name, password):
        self.user_id = user_id
        self.name = name
        self.password= password

user = User(user_id="CA311", name="John", password="146")

# In-memory storage for demo purposes (you can replace it with a database)
user_data = {}
@app.route('/save', methods=['POST'])
def saveSession():
    content = request.json
    user_id = content.get('user_id')
    page_id = content.get('page_id')
    data = content.get('data', [])

    # Use a tuple of (user_id, page_id) as the key
    user_data[(user_id, page_id)] = data

    response = jsonify({"status": "success", "user_id": user_id, "page_id": page_id, "saved_data": data})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/load', methods=['GET'])
def load_data():
    user_id = request.args.get('user_id')
    page_id = request.args.get('page_id')
    data = user_data.get((user_id, page_id), [])
    print(data)
    return jsonify({"user_id": user_id, "page_id": page_id, "data": data})

@app.route('/reset', methods=['GET'])
def Reset():
    
    user_id = request.args.get('user_id')
    page_id = request.args.get('page_id')
    user_data[(user_id, page_id)] = []
    data = user_data.get((user_id, page_id), [])
    return jsonify({"user_id": user_id, "page_id": page_id, "data": data})

if __name__ == '__main__':
    app.run(debug=True)



