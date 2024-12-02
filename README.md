<h1>Sixpack</h1>
<p>
    Sixpack is a web application built in Flask that lets users create an account, log in, and create personalized training sessions with exercises tailored to user needs.
</p>

<h2>Current Version</h2>
<p><strong>1.1.0</strong></p>

<hr>

<h2>Features</h2>

<h3>User Authentication</h3>
<ul>
    <li>User registration and login system.</li>
</ul>

<h3>Training Sessions</h3>
<ul>
    <li>Browse available gym classes along with their descriptions and slots.</li>
</ul>

<h3>Personalized Training Sessions</h3>
<ul>
    <li>Create custom training sessions.</li>
    <li>Add exercises to sessions, specifying sets and reps.</li>
</ul>

<hr>

<h2>Requirements</h2>
<p>Before running the application, ensure the following are installed:</p>
<ul>
    <li><strong>Python 3.7+</strong></li>
    <li><strong>Pip</strong> (Python package manager)</li>
</ul>

<hr>

<h2>Installation</h2>

<h3>Clone the Repository</h3>
<pre><code>git clone &lt;repository-link&gt;</code></pre>

<h3>Create a Virtual Environment</h3>
<pre><code>python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
</code></pre>

<h3>Install Dependencies</h3>
<pre><code>pip install -r requirements.txt</code></pre>

<h3>Run the Application</h3>
<pre><code>python Sixpack.py</code></pre>

<h3>Access the Application</h3>
<p>
    1. Open your browser.<br>
    2. Navigate to the link shown in the terminal (e.g., <code>http://127.0.0.1:5000</code>).
</p>

<hr>

<h2>Usage</h2>

<h3>Register an Account</h3>
<p>
    Basic security measures are implemented, such as requiring "@" in the email address. Additional password improvements could be added in future updates.
</p>

<h3>Login</h3>
<p>Log in to your account to access the available features.</p>

<h3>See Trainings</h3>
<p>If you’re a first-time user, you’ll see empty tables to populate with exercises.</p>

<h3>Create Exercises</h3>
<ul>
    <li>Add exercises by specifying exercise names, sets, and reps.</li>
</ul>

<hr>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Backend:</strong> Python</li>
    <li><strong>Frontend:</strong> HTML, CSS, and JS</li>
    <li><strong>Database:</strong> In-memory Python structures (extendable to SQL with Flask-SQLAlchemy)</li>
</ul>

<hr>

<h2>Future Enhancements</h2>
<ul>
    <li>Add a database (e.g., SQLite or PostgreSQL) for persistent data storage.</li>
    <li>Implement advanced user authentication (e.g., password hashing with Flask-Bcrypt).</li>
    <li>Add a user dashboard to track progress over time.</li>
    <li>Integrate class booking with calendars.</li>
    <li>Enhance styling using Bootstrap or TailwindCSS.</li>
</ul>

<hr>

<h2>Contributing</h2>
<p>
    Contributions are welcome! If you find bugs or have suggestions, feel free to open an issue or submit a pull request.
</p>

<hr>

<h2>License</h2>
<p>
    This project is licensed under the <strong>MIT License</strong>. See the <a href="LICENSE.md">LICENSE</a> file for more details.
</p>

<hr>

<h2>Contact</h2>
<p>For questions or feedback, reach out to the contributors:</p>
<ul>
    <li><strong>Alessandro Astolfi:</strong> <a href="mailto:alessandro.astolfi@studio.unibo.it">alessandro.astolfi@studio.unibo.it</a></li>
    <li><strong>Marta Betti:</strong> <a href="mailto:marta.betti5@studio.unibo.it">marta.betti5@studio.unibo.it</a></li>
    <li><strong>Domenico Bonifazio:</strong> <a href="mailto:domenico.bonifazio@studio.unibo.it">domenico.bonifazio@studio.unibo.it</a></li>
    <li><strong>Klaudia Daci:</strong> <a href="mailto:klaudia.daci@studio.unibo.it">klaudia.daci@studio.unibo.it</a></li>
    <li><strong>Leilei Zhang:</strong> <a href="mailto:leilei.zhang@studio.unibo.it">leilei.zhang@studio.unibo.it</a></li>
</ul>

