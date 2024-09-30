document.addEventListener("DOMContentLoaded", function () {
  const user_id = localStorage.getItem("user_id") || getCookie("user_id");
  const currentPath = window.location.pathname;
  const loginPageUrl = "/loginpage";

  // Reindirizza al login se l'utente non è loggato
  if (
    !user_id &&
    !currentPath.includes("loginpage") &&
    !currentPath.includes("register")
  ) {
    console.log("Devi effettuare il login per accedere a questa pagina.");
    window.location.href = loginPageUrl;
  }

  if (user_id) {
    console.log(`Utente loggato come: ${user_id}`);

    // Ottieni l'ID della pagina corrente (es: 'monday')
    const page_id = currentPath.split("/").pop().split(".")[0].toLowerCase();

    // Carica la sessione per la pagina corrente
    loadSession(page_id);
  }

  // Event listener per aggiungere nuove tabelle di esercizi
  const addButton = document.getElementById("addButton");
  if (addButton) {
    addButton.addEventListener("click", duplicateTable);
  }
});
function duplicateTable() {
  // Retrieve the hidden template table (which is hidden using 'display: none;')
  const template = document.querySelector("#exerciseTableTemplate");
  if (!template) {
    console.error("Template con ID 'exerciseTableTemplate' non trovato!");
    return;
  }

  // Clone the template table
  const clone = template.cloneNode(true);
  clone.removeAttribute("id"); // Remove ID to prevent duplicates
  clone.style.display = "block"; // Ensure the cloned table is visible

  // Append the cloned table to the container
  document.getElementById("tablesContainer").appendChild(clone);
}

function removeTable() {
  const container = document.getElementById("tablesContainer");
  if (container.children.length > 1) {
    container.removeChild(container.lastElementChild);
  }
}

function saveSession(page_id) {
  const user_id = localStorage.getItem("user_id") || getCookie("user_id");
  if (!user_id) {
    console.error("Utente non loggato, impossibile salvare la sessione.");
    return;
  }

  page_id = page_id.toLowerCase();

  const tables = document.querySelectorAll(".flex-table");
  const data = [];
  tables.forEach((table) => {
    const inputs = table.querySelectorAll('input[type="text"]');
    const tableData = Array.from(inputs).map((input) => input.value);
    data.push(tableData);
  });

  // Log per il debug
  console.log(`Salvataggio dati per ${user_id}_${page_id}_data:`, data);

  // Salva i dati localmente
  localStorage.setItem(`${user_id}_${page_id}_data`, JSON.stringify(data));

  // Invia i dati al server
  fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
      page_id: page_id,
      data: data,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nel salvataggio: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Salvataggio riuscito:", data);
    })
    .catch((error) => {
      console.error("Salvataggio fallito:", error);
    });
}

function loadSession(page_id) {
  const user_id = localStorage.getItem("user_id") || getCookie("user_id");
  if (!user_id) {
    console.error("Utente non loggato, impossibile caricare la sessione.");
    return;
  }

  page_id = page_id.toLowerCase();

  const container = document.querySelector("#tablesContainer");
  if (!container) {
    console.error("Elemento #tablesContainer non trovato.");
    return;
  }

  // Carica i dati dal localStorage
  const savedData = localStorage.getItem(`${user_id}_${page_id}_data`);
  const data = savedData ? JSON.parse(savedData) : [];

  // Rimuovi tabelle esistenti prima di caricare nuove
  container.innerHTML = "";

  // Se ci sono dati salvati, li carichiamo nella tabella
  data.forEach((tableData) => {
    const table = document.createElement("div");
    table.classList.add("flex-table");
    const row = document.createElement("div");
    row.classList.add("flex-table-row", "flex-table-header");

    const placeholders = [
      "Nome esercizio",
      "N. di serie",
      "N. di ripetizioni",
      "Tempo di recupero",
      "Parte del corpo da allenare",
    ];

    placeholders.forEach((placeholder, i) => {
      const cell = document.createElement("div");
      cell.classList.add("flex-table-cell");
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = placeholder;
      input.value = tableData[i] || ""; // Imposta il valore dell'input con i dati salvati
      cell.appendChild(input);
      row.appendChild(cell);
    });

    table.appendChild(row);
    container.appendChild(table);
  });
}

function resetSession(page_id) {
  const user_id = localStorage.getItem("user_id") || getCookie("user_id");
  if (!user_id) {
    console.error("Utente non loggato, impossibile resettare la sessione.");
    return;
  }

  localStorage.removeItem(`${user_id}_${page_id}_data`);

  fetch(`/reset?user_id=${user_id}&page_id=${page_id}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nel reset: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Sessione resettata:", data);
      resetInputs();
    })
    .catch((error) => {
      console.error("Reset fallito:", error);
    });
}

function resetInputs() {
  const tables = document.querySelectorAll(".flex-table");
  tables.forEach((table) => {
    const inputs = table.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
      input.value = "";
    });
    const fileInputs = table.querySelectorAll('input[type="file"]');
    fileInputs.forEach((fileInput) => {
      fileInput.value = "";
    });
  });
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
