// Przykładowe dane gości
const guests = [
  { name: "Jan Kowalski", table: 1 },
  { name: "Anna Nowak", table: 1 },
  { name: "Piotr Wiśniewski", table: 2 },
  { name: "Maria Zielińska", table: 2 },
  { name: "Tomasz Kamiński", table: 3 },
  { name: "Ewa Kwiatkowska", table: 3 },
  { name: "Krzysztof Wojciechowski", table: 4 },
  { name: "Magdalena Dąbrowska", table: 4 },
];

// Funkcja do wyświetlania listy gości w tabeli
function populateGuestTable() {
  const guestList = document.getElementById("guestList");
  guestList.innerHTML = ""; // Wyczyść tabelę
  guests.forEach((guest) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${guest.name}</td><td>${guest.table}</td>`;
    guestList.appendChild(row);
  });
}

// Funkcja wyszukiwania gościa
function searchGuest() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredGuests = guests.filter((guest) =>
    guest.name.toLowerCase().includes(searchInput)
  );
  const guestList = document.getElementById("guestList");
  guestList.innerHTML = ""; // Wyczyść tabelę
  filteredGuests.forEach((guest) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${guest.name}</td><td>${guest.table}</td>`;
    guestList.appendChild(row);
  });
}

// Załaduj dane przy starcie aplikacji
window.onload = populateGuestTable;
