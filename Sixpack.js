// static/script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const user_id = document.getElementById('user_id').value;
            const validUserId = "CA311";

            if (user_id === validUserId) {
                localStorage.setItem("user_id", user_id); // Store the user ID
                window.location.href = "sixpack.html";   // Redirect to the page
            } else {
                const errorMessage = document.getElementById('error-message');
                errorMessage.textContent = "Invalid User ID. Please try again.";
                errorMessage.style.color = "red";
            }
        });
    }
});
/*document.addEventListener('DOMContentLoaded', function() {
    const user_id = localStorage.getItem("user_id");
    if (user_id) {
        loadSession(page_id);
    }
});*/
function duplicateTable() {
    // Create a new table element
    const newTable = document.createElement('div');
    newTable.classList.add('flex-table');

    // Create the table header row
    const headerRow = document.createElement('div');
    headerRow.classList.add('flex-table-row', 'flex-table-header');

    // Define the placeholders for each column
    const placeholders = ["Exercise name", "N. of series", "N. of reps", "Break time", "Body part to be trained"];
    
    // Create the cells and input fields for each placeholder
    placeholders.forEach(placeholder => {
        const cell = document.createElement('div');
        cell.classList.add('flex-table-cell');

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholder;

        cell.appendChild(input);
        headerRow.appendChild(cell);
    });

    // Add a file input cell (if needed)
    const fileCell = document.createElement('div');
    fileCell.classList.add('flex-table-cell');

    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileCell.appendChild(fileInput);
    headerRow.appendChild(fileCell);

    // Append the header row to the new table
    newTable.appendChild(headerRow);

    // Append the new table to the container
    const container = document.getElementById('tablesContainer');
    container.appendChild(newTable);
}

function removeTable(){
    const container = document.getElementById('tablesContainer');
    const tables = container.querySelectorAll('.flex-table');
    
    if (tables.length > 0) {
        const lastTable = tables[tables.length - 1];
        
        if (lastTable && lastTable.id !== 'exerciseTableTemplate') {
            container.removeChild(lastTable);
        }
    }
}

function saveSession(page_id) {
    const user_id = localStorage.getItem("user_id");  // Retrieve the user_id stored in local storage
    const tables = document.querySelectorAll('.flex-table');
    const data = [];

    tables.forEach(table => {
        const inputs = table.querySelectorAll('input[type="text"]');
        const tableData = Array.from(inputs).map(input => input.value);
        data.push(tableData);
    });

    fetch('http://localhost:5000/save', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user_id, page_id: page_id, data: data })  // Include page_id in the request
    })
    .then(response => response.json())
    .then(data => {
        console.log('Save successful:', data);
    })
    .catch(error => {
        console.error('Save failed:', error);
    });
}
function loadSession(page_id) {
    const user_id = localStorage.getItem("user_id");

    fetch(`http://localhost:5000/load?user_id=${user_id}&page_id=${page_id}`, {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#tablesContainer'); // Assicurati che l'ID sia corretto
        container.innerHTML = '';

        data.data.forEach(tableData => {
            // Crea una nuova tabella
            const table = document.createElement('div');
            table.classList.add('flex-table'); // Assicurati che la classe sia corretta

            // Crea la riga header
            const row = document.createElement('div');
            row.classList.add('flex-table-row', 'flex-table-header');

            // I placeholder degli input
            const placeholders = [
                'Exercise name',
                'N. of series',
                'N. of reps',
                'Break time',
                'Body part to be trained'
            ];

            // Crea ogni cella e input
            placeholders.forEach((placeholder, i) => {
                const cell = document.createElement('div');
                cell.classList.add('flex-table-cell');

                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = placeholder;
                input.value = tableData[i] || '';

                cell.appendChild(input);
                row.appendChild(cell);
            });

            // Aggiungi la cella con input di tipo file
            const fileCell = document.createElement('div');
            fileCell.classList.add('flex-table-cell');
            
            const fileInput = document.createElement('input');
            fileInput.type = 'file';

            fileCell.appendChild(fileInput);
            row.appendChild(fileCell);

            // Aggiungi la riga alla tabella
            table.appendChild(row);

            // Aggiungi la tabella al contenitore
            container.appendChild(table);
        });
    })
    .catch(error => {
        console.error('Load failed:', error);
    });
}

function Reset() {
    // Seleziona tutte le tabelle con la classe 'flex-table'
    const tables = document.querySelectorAll('.flex-table');

    // Itera su ogni tabella
    tables.forEach(table => {
        // Seleziona tutti gli input all'interno della tabella
        const inputs = table.querySelectorAll('input[type="text"]');

        // Pulisce il valore di ogni input
        inputs.forEach(input => {
            input.value = '';
        });

        // Seleziona e resetta tutti i campi file (opzionale)
        const fileInputs = table.querySelectorAll('input[type="file"]');
        fileInputs.forEach(fileInput => {
            fileInput.value = ''; // Resetta il campo file
        });
    });
}

// Esempio di utilizzo della funzione
Reset();



