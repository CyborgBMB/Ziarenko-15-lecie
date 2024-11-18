// Dane logowania
const loginCredentials = {
  username: "alicja",
  password: "bartosz",
};

// Dane stolików
let tables = {
  1: ["KAROLIŃA BĄK", "MARTA KWAŚNY", "KATARZYNA FLISEK", "OSOBA TOWARZYSZĄCA", "AGNIESZKA DYRDAŚ"],
  2: ["KATARZYNA KRAWIEC", "OSOBA TOWARZYSZĄCA", "MARZENA ŁATA", "OSOBA TOWARZYSZĄCA", "KATARZYNA MATCZAK – JANISIAK"],
  3: ["IZABELA POPENDA", "BEATA ZIELIŃSKA", "PATRYCJA SPOŁEK", "JUSTYNA SULIK"],
  // Dodaj wszystkie dane od 4 do 38 tutaj
};

// Status edycji
let isEditing = false;

// Funkcja do wyświetlania tabeli gości
function populateGuestTable() {
  const guestList = document.getElementById("guestList");
  guestList.innerHTML = ""; // Wyczyść tabelę
  for (const [tableId, guests] of Object.entries(tables)) {
    guests.forEach((guest) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${guest}</td><td>${tableId}</td>`;
      guestList.appendChild(row);
    });
  }
}

// Funkcja wyszukiwania gościa
function searchGuest() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const guestList = document.getElementById("guestList");
  guestList.innerHTML = ""; // Wyczyść tabelę
  for (const [tableId, guests] of Object.entries(tables)) {
    guests
      .filter((guest) => guest.toLowerCase().includes(searchInput))
      .forEach((guest) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${guest}</td><td>${tableId}</td>`;
        guestList.appendChild(row);
      });
  }
}

// Funkcja do przełączania modala logowania
function toggleLogin() {
  const modal = document.getElementById("loginModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  document.getElementById("loginError").style.display = "none";
}

// Funkcja logowania
function login() {
  const username = document.getElementById("loginInput").value;
  const password = document.getElementById("passwordInput").value;

  if (username === loginCredentials.username && password === loginCredentials.password) {
    isEditing = true;
    toggleLogin(); // Zamknij modal
    enableEditing(); // Włącz tryb edycji
  } else {
    document.getElementById("loginError").style.display = "block"; // Wyświetl błąd
  }
}

// Funkcja włączania trybu edycji
function enableEditing() {
  const editButton = document.getElementById("editButton");
  editButton.innerText = "Tryb edycji włączony";
  editButton.style.backgroundColor = "green";

  const tableRows = document.querySelectorAll("#guestTable tbody tr");
  tableRows.forEach((row) => {
    const nameCell = row.cells[0];
    nameCell.contentEditable = "true"; // Włącz edytowalność
    nameCell.style.backgroundColor = "#f9f9f9";
  });

  const saveButton = document.createElement("button");
  saveButton.innerText = "Zapisz zmiany";
  saveButton.onclick = saveChanges;
  document.getElementById("edit-container").appendChild(saveButton);
}

// Funkcja zapisywania zmian
function saveChanges() {
  const tableRows = document.querySelectorAll("#guestTable tbody tr");
  const updatedTables = {};

  tableRows.forEach((row) => {
    const nameCell = row.cells[0].innerText;
    const tableCell = row.cells[1].innerText;

    if (!updatedTables[tableCell]) updatedTables[tableCell] = [];
    updatedTables[tableCell].push(nameCell);
  });

  tables = updatedTables; // Aktualizuj dane w tabeli
  localStorage.setItem("tables", JSON.stringify(tables)); // Zapisz do LocalStorage
  alert("Zmiany zapisane!");
}

// Przy starcie załaduj dane z LocalStorage (jeśli istnieją)
window.onload = () => {
  const savedTables = JSON.parse(localStorage.getItem("tables"));
  if (savedTables) tables = savedTables;
  populateGuestTable();
};
