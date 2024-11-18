// Dane stolików
let tables = {
  1: ["KAROLINA BĄK", "MARTA KWAŚNY", "KATARZYNA FLISEK", "AGNIESZKA DYRDAŚ", "MAŁGORZATA JARUGA", "MAŁGORZATA KASPRZAK"],
  2: ["KATARZYNA KRAWIEC", "MARZENA ŁATA", "KATARZYNA MATCZAK – JANISIAK", "ANETA OLSZEWSKA – SZYDŁO", "ŻANETA PRAŻMOWSKA"],
  3: ["IZABELA POPENDA", "BEATA ZIELIŃSKA", "PATRYCJA SPOŁEK", "JUSTYNA SULIK", "IWONA SZAFRANIEC", "KARINA SZKLARCZYK", "TERESA SZYMAŃSKA", "GRAŻYNA ŚLIWKA", "FALKIEWICZ MAŁGORZATA"],
  // Dodaj więcej danych stolików
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

// Przy ładowaniu strony
window.onload = () => {
  populateGuestTable();
};
