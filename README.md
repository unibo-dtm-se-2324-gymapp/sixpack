<h1> Six-pack</h1>
Sixpack is a web application built in Flask that lets users create an account, log in, and then create personalized training sessions with exercises that can be tailored to the user needs.

<h3>Features</h3>
<h5>User Authentication</h5>
User registration and login system
<h5>Training sessions</h5>
Browse available gym classes along with their description and slots
<h5>Personalized Training Sessions</h5>
Create custom training sessions
Add exercises to sessions, specifying sets and reps

<h3>Requirements</h3>
Before running the application make sure you have the following installed:

Python 3.7+
Pip (Python package manager)
<h3>Installation</h3>

<h5>Clone the Repository</h5>
git clone + link of the repository on github

<h5>Create a Virtual Environment</h5>

python -m venv venv
source venv/bin/activate # On Windows, use `venv\\Scripts\\activate`
<h5>Install Dependencies</h5>

pip install -r requirements.txt
<h5>Run the Application</h5>

python Sixpack.py
<h5>Access the Application</h5>

Open your browser and navigate to:
In the terminal, there must be a link like the one below, click on it and the website should appear.
http://127.0.0.1:5000


<h3>Usage</h3>
<h5>Register an Account</h5>
We did some basic security measures such as the compulsory presence of the @ in the mail, but surely more could be done about password improvements.
<h5>Login</h5>

Log in to your account to see some available features.
<h5>See Trainings</h5>
If this is your first time in Sixpack, you will just see empty tables to fill with exercise
<h5>Create Exercises</h5>
In every session, add exercises by setting exercise names, sets, and reps.

<h3>Technologies Used</h3>
Backend: Python
Frontend: HTML, CSS and JS
Database: In-memory Python structures (extendable to SQL with Flask-SQLAlchemy)
<h3>Future Enhancements</h3>
Add a database, such as SQLite or PostgreSQL, for persistent data storage.
Advanced user authentication, such as password hashing with Flask-Bcrypt.
Add a user dashboard to track progress over time.
Integrate class booking with calendars.
Enhance styling with Bootstrap or TailwindCSS.
<h3>Contributing</h3>
Contributions are welcome! If you find bugs or have suggestions, please open an issue or submit a pull request.

<h3>License</h3>
This project is licensed under the MIT License. See the LICENSE file for more details.

<h3>Contact</h3>
For questions or feedback, feel free to reach out:

Name: Alessandro Astolfi, Marta Betti,Domenico Bonifazio, Klaudia Daci e Leilei Zhang
Email: alessandro.astolfi@studio.unibo.it,marta.betti5@studio.unibo.it,domenico.bonifazio@studio.unibo.it,klaudia.daci@studio.unibo.it,leilei.zhang@studio.unibo.it

