<h1>Sixpack</h1>
This is a Flask-based web application that allows users to manage their gym activities, including registration, login, and creating personalized training sessions with exercises. The application showcases Flask’s core features like routing, templates, and session management.

<h3>Features</h3>
<h5>User Features:</h5>
Registration and Login system for user accounts.
Ability to browse gym classes and book them.
Create and manage training sessions.
Add custom exercises (e.g., sets, reps) to training sessions.
<h5>Developer Features:</h5>
Modular Flask code structure for scalability.
In-memory data management (easy to extend with databases).
Clear use of Flask routing, forms, and templates.
<h3>Code Highlights</h3>
Here are some key aspects of the code and how they enable the app's functionality:

<h5>1. User Authentication</h5>
Users are stored in an in-memory dictionary for simplicity. Flask sessions track logged-in users.

users = {}  # Example: {"username": "password"}
Route: /login checks user credentials and starts a session.

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if users.get(username) == password:
            session['username'] = username
            flash('Logged in successfully')
            return redirect(url_for('classes'))
        else:
            flash('Invalid credentials')
    return render_template('login.html')
<h5>2. Training Sessions Management</h5>
User sessions are represented as nested dictionaries for dynamic session and exercise management.
user_sessions = {
    "username1": [{"name": "Leg Day", "exercises": [{"name": "Squat", "sets": 3, "reps": 10}]}]
}
Route: /create_session lets users create new training sessions.
@app.route('/create_session', methods=['GET', 'POST'])
def create_session():
    if request.method == 'POST':
        session_name = request.form['session_name']
        new_session = {"name": session_name, "exercises": []}
        user_sessions[session['username']].append(new_session)
        flash('Training session created successfully')
        return redirect(url_for('sessions'))
    return render_template('create_session.html')
<h5>3. Templates and Dynamic Content</h5>
Jinja2 templates allow for dynamic data rendering. For example, sessions.html dynamically displays training sessions:

<ul>
    {% for session in sessions %}
        <li>{{ session.name }}
            <ul>
                {% for exercise in session.exercises %}
                    <li>{{ exercise.name }} - {{ exercise.sets }} sets of {{ exercise.reps }} reps</li>
                {% endfor %}
            </ul>
        </li>
    {% endfor %}
</ul>
<h3>Setup and Installation</h3>
<h5>Clone the Repository</h5>
git clone + link of the repository on Github
<h5>Create a Virtual Environment</h5>
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
<h5>Install Dependencies</h5>

pip install -r requirements.txt
<h5>Run the Application</h5>
python Sixpack.py
Once you run this command a link like the one below should appear and, by clicking on it, the application should start.

http://127.0.0.1:5000
How the Code Works
<h5>Routing:</h5>

The app uses Flask's routing to define URL endpoints for all features.
Example: /create_session handles both GET (form display) and POST (form submission) requests.
<h5>Session Management:</h5>

Flask's session dictionary is used to store logged-in user data securely.
<h5>Templates:</h5>

HTML templates are dynamically rendered with data passed from Python code.
<h5>In-Memory Data:</h5>

Data is stored in Python dictionaries for simplicity.
Easily extendable to a database solution like SQLite or PostgreSQL.
<h5>Flash Messages:</h5>

Used for user notifications (e.g., success messages after booking a class).
<h3>Future Enhancements</h3>
<h5>Database Integration:</h5>
Use SQLite or PostgreSQL for persistent data storage.
<h5>Authentication:</h5>
Add password hashing using libraries like bcrypt.
Include password reset functionality.
<h5>Enhanced Frontend:</h5>
Use Bootstrap or TailwindCSS for better design.
<h5>API Development:</h5>
Expose RESTful APIs for integration with mobile apps.
<h3>License</h3>
This project is licensed by using the Standard Semantic Versioning.

<h3>Contacts</h3>
For questions or suggestions:
Names: Alessandro Astolfi, Marta Betti,Domenico Bonifazio, Klaudia Daci e Leilei Zhang
Emails: alessandro.astolfi@studio.unibo.it,marta.betti5@studio.unibo.it,domenico.bonifazio@studio.unibo.it,klaudia.daci@studio.unibo.it,leilei.zhang@studio.unibo.it

