from flask import Flask, render_template, request, redirect, url_for, make_response, jsonify

app = Flask(__name__)

# Dati utente simulati con un dizionario in memoria (da usare per test)
user_data = {}

# Home page che reindirizza alla pagina di login se non loggato
@app.route('/')
def index():
    user_id = request.cookies.get('user_id')
    if user_id and user_id in user_data:
        return redirect(url_for('home_page'))
    return redirect(url_for('login_page'))

# Pagina di login
@app.route('/loginpage', methods=['GET', 'POST'])
def login_page():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        user = user_data.get(email)

        # Se l'utente non è registrato, reindirizza alla pagina di registrazione
        if not user:
            return render_template('loginpage.html', error="Utente non registrato. Registrati prima di effettuare il login.")

        # Se l'utente è registrato, verifica la password
        if user['password'] == password:
            response = make_response(redirect(url_for('home_page')))
            response.set_cookie('user_id', email)  # Salva il cookie con user_id
            print(f"Utente {email} loggato correttamente.")
            return response
        else:
            return render_template('loginpage.html', error="Email o password non corretti")

    return render_template('loginpage.html')

# Pagina di registrazione
@app.route('/register', methods=['GET', 'POST'])
def register_page():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm-password')

        # Controlla che le password corrispondano e che l'email non sia già registrata
        if password != confirm_password:
            return render_template('register.html', error="Le password non corrispondono")
        if email in user_data:
            return render_template('register.html', error="Email già registrata")

        # Salva l'utente nel dizionario
        user_data[email] = {'username': username, 'password': password}
        response = make_response(redirect(url_for('home_page')))
        response.set_cookie('user_id', email)  # Imposta il cookie per l'utente
        print(f"Utente {email} registrato correttamente.")
        return response

    return render_template('register.html')

# Home page accessibile solo agli utenti loggati
@app.route('/homepage')
def home_page():
    user_id = request.cookies.get('user_id')
    if user_id and user_id in user_data:
        return render_template('homepage.html')
    return redirect(url_for('login_page'))

# Pagina del profilo utente
@app.route('/profile')
def profile_page():
    user_id = request.cookies.get('user_id')
    if user_id and user_id in user_data:
        user = user_data[user_id]
        return render_template('profile.html', user_data=user, user_id=user_id)
    return redirect(url_for('login_page'))

# Funzione per il logout (opzionale)
@app.route('/logout')
def logout():
    response = make_response(redirect(url_for('login_page')))
    response.set_cookie('user_id', '', expires=0)  # Rimuove il cookie
    return response

# Pagine per le sessioni di allenamento
@app.route('/yourtrainingsessions')
def training_sessions_page():
    user_id = request.cookies.get('user_id')
    if user_id:
        return render_template('yourtrainingsessions.html')
    else:
        return redirect(url_for('login_page'))

# Pagine per i giorni della settimana
@app.route('/monday')
def monday_page():
    return render_template('Monday.html')

@app.route('/tuesday')
def tuesday_page():
    return render_template('Tuesday.html')

@app.route('/wednesday')
def wednesday_page():
    return render_template('Wednesday.html')

@app.route('/thursday')
def thursday_page():
    return render_template('Thursday.html')

@app.route('/friday')
def friday_page():
    return render_template('Friday.html')

@app.route('/saturday')
def saturday_page():
    return render_template('Saturday.html')

@app.route('/sunday')
def sunday_page():
    return render_template('Sunday.html')

# Funzione per il salvataggio delle sessioni di allenamento
@app.route('/save', methods=['POST'])
def save_session():
    content = request.json
    if content is None:
        return make_response(jsonify({"error": "Richiesta non valida. Il payload deve essere in formato JSON."}), 400)
    
    user_id = content.get('user_id')
    page_id = content.get('page_id')
    data = content.get('data', [])

    # Salva i dati nel dizionario user_data
    user_data[(user_id, page_id)] = data

    return jsonify({"status": "success", "user_id": user_id, "page_id": page_id, "saved_data": data})

# Funzione per caricare le sessioni di allenamento salvate
@app.route('/load', methods=['GET'])
def load_data():
    user_id = request.args.get('user_id')
    page_id = request.args.get('page_id')

    if not user_id or not page_id:
        return make_response(jsonify({"error": "Parametri 'user_id' e 'page_id' sono obbligatori."}), 400)

    data = user_data.get((user_id, page_id), [])
    return jsonify({"user_id": user_id, "page_id": page_id, "data": data})

# Funzione per resettare i dati delle sessioni
@app.route('/reset', methods=['GET'])
def reset():
    user_id = request.args.get('user_id')
    page_id = request.args.get('page_id')

    if not user_id or not page_id:
        return make_response(jsonify({"error": "Parametri 'user_id' e 'page_id' sono obbligatori."}), 400)

    user_data[(user_id, page_id)] = []
    return jsonify({"user_id": user_id, "page_id": page_id, "data": []})

# Gestione errore per metodi HTTP non supportati
@app.errorhandler(405)
def method_not_allowed_error(error):
    return make_response(jsonify({"error": "Metodo HTTP non supportato."}), 405)

if __name__ == '__main__':
    app.run(debug=True)