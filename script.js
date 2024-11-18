// Przypisanie gości do stolików
const tables = {
  1: ["KAROLIŃA BĄK", "MARTA KWAŚNY", "KATARZYNA FLISEK", "OSOBA TOWARZYSZĄCA", "AGNIESZKA DYRDAŚ", "OSOBA TOWARZYSZĄCA", "MAŁGORZATA JARUGA", "OSOBA TOWARZYSZĄCA", "MAŁGORZATA KASPRZAK"],
  2: ["KATARZYNA KRAWIEC", "OSOBA TOWARZYSZĄCA", "MARZENA ŁATA", "OSOBA TOWARZYSZĄCA", "KATARZYNA MATCZAK – JANISIAK", "OSOBA TOWARZYSZĄCA", "ANETA OLSZEWSKA – SZYDŁO", "OSOBA TOWARZYSZĄCA", "ŻANETA PRAŻMOWSKA", "OSOBA TOWARZYSZĄCA"],
  3: ["IZABELA POPENDA", "BEATA ZIELIŃSKA", "PATRYCJA SPOŁEK", "JUSTYNA SULIK", "IWONA SZAFRANIEC", "KARINA SZKLARCZYK", "TERESA SZYMAŃSKA", "OSOBA TOWARZYSZĄCA", "GRAŻYNA ŚLIWKA", "FALKIEWICZ MAŁGORZATA"],
  // Dodaj wszystkie dane od 4 do 38 tutaj (pełne dane z Twojej listy)
};

// Funkcja do wyświetlania listy gości w tabeli
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

// Załaduj dane przy starcie aplikacji
window.onload = populateGuestTable;
