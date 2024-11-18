// Dane logowania
const loginCredentials = {
  username: "alicja",
  password: "bartosz",
};

// Dane stolików (pełna lista)
let tables = {
  1: [
    "KAROLIŃA BĄK",
    "MARTA KWAŚNY",
    "KATARZYNA FLISEK",
    "OSOBA TOWARZYSZĄCA",
    "AGNIESZKA DYRDAŚ",
    "OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA JARUGA",
    "OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA KASPRZAK",
  ],
  2: [
    "KATARZYNA KRAWIEC",
    "OSOBA TOWARZYSZĄCA",
    "MARZENA ŁATA",
    "OSOBA TOWARZYSZĄCA",
    "KATARZYNA MATCZAK – JANISIAK",
    "OSOBA TOWARZYSZĄCA",
    "ANETA OLSZEWSKA – SZYDŁO",
    "OSOBA TOWARZYSZĄCA",
    "ŻANETA PRAŻMOWSKA",
    "OSOBA TOWARZYSZĄCA",
  ],
  3: [
    "IZABELA POPENDA",
    "BEATA ZIELIŃSKA",
    "PATRYCJA SPOŁEK",
    "JUSTYNA SULIK",
    "IWONA SZAFRANIEC",
    "KARINA SZKLARCZYK",
    "TERESA SZYMAŃSKA",
    "OSOBA TOWARZYSZĄCA",
    "GRAŻYNA ŚLIWKA",
    "FALKIEWICZ MAŁGORZATA",
  ],
  4: [
    "DARIA DYBAŁA",
    "MONIKA LEDWOŃ",
    "ANNA SOCHA",
    "OSOBA TOWARZYSZĄCA",
    "ANITA STĘPIEŃ",
    "OSOBA TOWARZYSZĄCA",
    "IRENA ĆWIĘKOWSKA",
    "KATARZYNA KOLCZAREK",
    "OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA KOZIEŁ",
    "OSOBA TOWARZYSZĄCA",
  ],
  5: [
    "PATRYCJA GWÓŹDŻ",
    "OSOBA TOWARZYSZĄCA",
    "OLGA PECELA",
    "OSOBA TOWARZYSZĄCA",
    "ANNA PAWŁOWSKA",
    "OSOBA TOWARZYSZĄCA",
    "MAGDALENA ZAGAŁA",
    "OSOBA TOWARZYSZĄCA",
    "KATARZYNA CZAPLA",
    "OSOBA TOWARZYSZĄCA",
  ],
  6: [
    "MONIKA FIDZIŃSKA",
    "DARIA ZMARZŁA",
    "OSOBA TOWARZYSZĄCA",
    "JANINA FRĄCKOWIAK",
    "OSOBA TOWARZYSZĄCA",
    "ANNA REBEŚ",
    "OSOBA TOWARZYSZĄCA",
    "ANNA BACIA",
    "OSOBA TOWARZYSZĄCA",
    "MONIKA NIEMCZYK",
    "OSOBA TOWARZYSZĄCA",
    "EWA KLEKOCKA",
    "MAŁGORZATA JAGŁA",
    "OSOBA TOWARZYSZĄCA",
    "ANNA NOWAK",
    "OSOBA TOWARZYSZĄCA",
    "ANETA MIŚTA",
    "OSOBA TOWARZYSZĄCA",
    "MAGDALENA NOWAK",
    "OSOBA TOWARZYSZĄCA",
    "BEATA POLEWCZAK",
  ],
  7: [
    "JOANNA KURZAK",
    "OSOBA TOWARZYSZĄCA",
    "JOANNA SKORUPA",
    "OSOBA TOWARZYSZĄCA",
    "IWONA STRUŹIK JANERKA",
    "JUSTYNA JAGŁA",
    "OSOBA TOWARZYSZĄCA",
    "AGNIESZKA GAŁA",
    "OSOBA TOWARZYSZĄCA",
    "MARTA SOKOŁOWSKA",
    "OSOBA TOWARZYSZĄCA",
  ],
  8: [
    "OPANOWICZ ANNA",
    "OSOBA TOWARZYSZĄCA",
    "MARYSIA PEŁKA",
    "OSOBA TOWARZYSZĄCA",
    "PROCHOTA JOANNA",
    "RYBAK BEATA",
    "OSOBA TOWARZYSZĄCA",
    "MUSIOLIK JOANNA",
    "OSOBA TOWARZYSZĄCA",
    "WOJCIECHOWSKA IWONA",
    "OSOBA TOWARZYSZĄCA",
    "BEATA MACIAK",
  ],
  // Dodaj kolejne stoliki według Twojej listy
};

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

// Funkcja wyszukiwania
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

// Funkcja do logowania
function toggleLogin() {
  const modal = document.getElementById("loginModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  document.getElementById("loginError").style.display = "none";
}

function login() {
  const username = document.getElementById("loginInput").value;
  const password = document.getElementById("passwordInput").value;

  if (username === loginCredentials.username && password === loginCredentials.password) {
    toggleLogin();
    enableEditing();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

// Włącz tryb edycji
function enableEditing() {
  const tableRows = document.querySelectorAll("#guestTable tbody tr");
  tableRows.forEach((row) => {
    row.cells[0].contentEditable = "true";
    row.cells[0].style.backgroundColor = "#f9f9f9";
  });
  const saveButton = document.createElement("button");
  saveButton.innerText = "Zapisz zmiany";
  saveButton.onclick = saveChanges;
  document.getElementById("edit-container").appendChild(saveButton);
}

// Zapis zmian
function saveChanges() {
  alert("Zmiany zostały zapisane lokalnie.");
}

// Przy ładowaniu strony
window.onload = () => {
  populateGuestTable();
};
