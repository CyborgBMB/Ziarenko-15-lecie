// Dane stolików
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
  9: [
    "IWONA ZIMORSKA",
    "DOROTA ŻAK",
    "MONIKA PAWLAK",
    "MONIKA DAJTROWSKA",
    "ANNA GŁAB",
    "ANNA KRAKOWCZYK",
    "BEATA CZOTURBUK",
    "AGNIESZKA RUDNICKA",
    "DOMINIKA DANISZ",
    "KAROLINA ŁYCZBA",
    "JUSTYNA MATUSZEWSKA",
    "OSOBA TOWARZYSZĄCA",
  ],
  10: [
    "PATRYCJA ŚWIATEK",
    "KARINA JANKOWSKA",
    "FRANKSTAIN KLAUDIA",
    "OSOBA TOWARZYSZĄCA",
    "NIKODEM KAROLINA",
    "OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA PRZYBYŁA",
    "BEATA KRAWCZYK",
    "MAKOWSKA IWONA",
    "OSOBA TOWARZYSZĄCA",
    "KATARZYNA MICHALSKA",
  ],
  11: [
    "EWA KARBOWSKA",
    "OSOBA TOWARZYSZĄCA",
    "KATARZYNA KRAWCZYK",
    "OSOBA TOWARZYSZĄCA",
    "ALEKSANDRA PIETRYCA",
    "OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA BOGACZ",
    "OSOBA TOWARZYSZĄCA",
    "IŻYKOWSKA GRAŻYNA",
    "OSOBA TOWARZYSZĄCA",
    "BIAŁOŃ AGATA",
    "OSOBA TOWARZYSZĄCA",
  ],
  12: [
    "MAREK KAŁUŻA",
    "OSOBA TOWARZYSZĄCA",
    "ANDRZEJ SUPIŃSKI",
    "OSOBA TOWARZYSZĄCA",
    "MARCIN BOSAK",
    "OSOBA TOWARZYSZĄCA",
    "BOGUMIŁ MISIAREK",
    "OSOBA TOWARZYSZĄCA",
    "ARTUR WIKAREK",
    "OSOBA TOWARZYSZĄCA",
    "TOMEK ORŁOWSKI",
    "OSOBA TOWARZYSZĄCA",
  ],
  13: [
    "MARIUSZ PIOTROWSKI",
    "OSOBA TOWARZYSZĄCA",
    "BARAM BARTOSZ",
    "OSOBA TOWARZYSZĄCA",
    "MIROSŁAW SKORUPA",
    "OSOBA TOWARZYSZĄCA",
    "LIGMAR BARBARA",
    "OSOBA TOWARZYSZĄCA",
    "DANIEL DUBIEL",
    "ADAM GRANDA",
  ],
  14: [
    "RAFAŁ HAHN",
    "OSOBA TOWARZYSZĄCA",
    "SITEK ROBERT",
    "OSOBA TOWARZYSZĄCA",
    "CEMGIZ NURHAK",
    "OSOBA TOWARZYSZĄCA",
    "JAROSŁAW KASPRZYK",
    "EWA GOJ",
    "OSOBA TOWARZYSZĄCA",
    "ANETA KWAŚNA",
    "OSOBA TOWARZYSZĄCA",
  ],
  15: [
    "OLA CZYŻ",
    "OSOBA TOWARZYSZĄCA",
    "MATEUSZ PASIEKA",
    "OSOBA TOWARZYSZĄCA",
    "ASIA MYŚLIWIEC",
    "OSOBA TOWARZYSZĄCA",
    "ANGELIKA SKODA",
    "JANINA GRABOWSKA",
    "IVAN BODENCHUK",
    "ILONA SYLIUK",
    "OLENA BLAZHKEVYCH",
  ],
  16: [
    "TERESA JAGUCKA",
    "OSOBA TOWARZYSZĄCA",
    "KLAUDIA FUHRMAN",
    "OSOBA TOWARZYSZĄCA",
    "MIREK MIŚ",
    "OSOBA TOWARZYSZĄCA",
    "ANDRZEJ KSIĄDZ",
    "OSOBA TOWARZYSZĄCA",
    "PAWEŁ MRUK",
    "OSOBA TOWARZYSZĄCA",
  ],
  17: [
    "ADAM KUC",
    "DENIS MAROÑ",
    "OSOBA TOWARZYSZĄCA",
    "NANULI KHASIA",
    "OSOBA TOWARZYSZĄCA",
    "ADAM ŚLĄZAK",
    "ROBERT MAKSYM",
    "ROMAN KHASIA",
    "OSOBA TOWARZYSZĄCA",
    "ANDRII BLAZHKEVYCH",
  ],
  18: [
    "WIKTORIA JASIK",
    "OSOBA TOWARZYSZĄCA",
    "DOMINIKA KOTLARZ",
    "OSOBA TOWARZYSZĄCA",
    "JOANNA JURASZCZYK",
    "OSOBA TOWARZYSZĄCA",
    "MAGDALENA KRZYSZPIEŃ",
    "VITALII PETRASHCHUK",
    "WIKTORIA LUKINCHUK",
    "ROZALIA RURYK",
    "IWONA BUDZIULIAK",
    "OLGA TRYL",
  ],
  19: [
    "BERNADETTA LIGNAR",
    "BOGUSIA BONISŁAWSKA",
    "SANDRA CICHOŃ",
    "OSOBA TOWARZYSZĄCA",
    "MARIUSZ GONGOR",
    "OSOBA TOWARZYSZĄCA",
    "AGNIESZKA BARAN",
    "OSOBA TOWARZYSZĄCA",
    "ANETA BUJOCZEK",
    "OSOBA TOWARZYSZĄCA",
  ],
  20: [
    "GRZEGORZ BAUCH",
    "OSOBA TOWARZYSZĄCA",
    "MARCIN BEŚKA",
    "OSOBA TOWARZYSZĄCA",
    "PAWEŁ BANACH",
    "OSOBA TOWARZYSZĄCA",
    "ROBERT DRÓŻDŻ",
    "OSOBA TOWARZYSZĄCA",
    "MIROSŁAW KLEJNA",
    "OSOBA TOWARZYSZĄCA",
  ],
  21: [
    "AGNIESZKA MASTALERZ",
    "OSOBA TOWARZYSZĄCA",
    "DOROTA MASTALERZ",
    "OSOBA TOWARZYSZĄCA",
    "ANIA NAWROT",
    "OSOBA TOWARZYSZĄCA",
    "ALINA DZIADKIEWICZ",
    "OSOBA TOWARZYSZĄCA",
    "DANUTA KRAMARCZYK",
    "NATALIA DEMCIO",
    "OSOBA TOWARZYSZĄCA",
  ],
  22: [
    "MONIKA BOROWIEC",
    "MAŁGORZATA FRYC",
    "GRZEGORZ FRYC",
    "WIOLA BOROWIEC",
    "OSOBA TOWARZYSZĄCA",
    "WIKTORIA JAŁOCHA",
    "RENATA BARAN",
    "AGNIESZKA PITAS",
    "MAREK PITAS",
  ],
  23: [
    "JACEK DYSZY",
    "OSOBA TOWARZYSZĄCA",
    "JUREK SZLIMOK",
    "OSOBA TOWARZYSZĄCA",
    "RYSZARD MIKOLAS",
    "OSOBA TOWARZYSZĄCA",
    "MIROSŁAW WYLON",
    "OSOBA TOWARZYSZĄCA",
    "KRZYSZTOF CZAPLA",
    "OSOBA TOWARZYSZĄCA",
    "ADAM MAZUR",
    "OSOBA TOWARZYSZĄCA",
  ],
  24: [
    "MICHAL LIWOŃ",
    "OSOBA TOWARZYSZĄCA",
    "KAZIMIERZ MICHAŁKA",
    "OSOBA TOWARZYSZĄCA",
    "PAWEL MICHAŁKA",
    "OSOBA TOWARZYSZĄCA",
    "MARIUSZ WOJTACHA",
    "OSOBA TOWARZYSZĄCA",
    "ILONA SZYSZŁO",
    "OSOBA TOWARZYSZĄCA",
    "MATEUSZ KOCOT",
    "OSOBA TOWARZYSZĄCA",
  ],
  25: [
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "KONFERANSJER",
  ],
  26: [
    "KASIA MICHALCZYK",
    "JACEK MICHALCZYK",
    "OLA STOLARCZYK",
    "DAMIAN STOLARCZYK",
    "RENATA NOWAK",
    "DAMIAN NAWALKOWSKI",
    "JOLA MIELNIK",
    "SŁAWOMIR MIELNIK",
    "IWONA PISKOREK",
    "ANDRZEJ PISKOREK",
  ],
  27: [
    "KASIA GORCZYŃSKA",
    "DAREK GORCZYŃSKI",
    "ANITA CHREŚCIONKO",
    "PIOTR CHREŚCIONKO",
    "JUREK KONARSKI",
    "ASIA KONRASKA",
    "JANUSZ KAZIMIERCZUK",
    "GOSIA KAZIMIERCZUK",
    "RENATA WIELICZKO",
    "MICHAŁ WIELICZKO",
    "GRAŻYNA JAKUBIEC",
    "MAREK JAKUBIEC",
  ],
  28: [
    "SANDRA WIELICZKO",
    "OSOBA TOWARZYSZĄCA",
    "PATRYCJA CHREŚCIONKO",
    "MICHAŁ WAŁĘSA",
    "EDYTA WĘGRZYN",
    "ADAM SKOPAL",
    "KAROL ZAWADA",
    "OSOBA TOWARZYSZĄCA",
    "MARCIN CWILĄG",
    "OSOBA TOWARZYSZĄCA",
  ],
  29: [
    "MONIKA AUGUSTYN",
    "DARIUSZ AUGUSTYN",
    "KRYSTYNA FARYŚ",
    "JANUSZ FARYŚ",
    "REMIGIUSZ RYGOŁ",
    "ŻONA",
    "KARINA WOŹNIAK",
    "WOJCIECH WOŹNIAK",
    "SYLWIA GRONDAL",
    "ŁUKASZ GRONDAL",
    "MATEUSZ JAKUBIEC",
  ],
  30: [
    "Anna Tandyrak",
    "Stanisław Tandyrak",
    "Justyna Bałazy",
    "Michał Bałazy",
    "Joanna Żebrowska",
    "Osoba Towarzysząca",
    "Violetta Żukowska",
    "Piotr Jakonik",
    "Agnieszka Markiewicz",
    "Krzysztof Markiewicz",
  ],
  31: [
    "GRZEGORZ MIKETA",
    "OSOBA TOWARZYSZĄCA",
    "DAWID KUREK",
    "OSOBA TOWARZYSZĄCA",
    "CZESŁAW KIERAT",
    "OSOBA TOWARZYSZĄCA",
    "TOMASZ LEDWOROWSKI",
    "OSOBA TOWARZYSZĄCA",
    "STEFAN MIKOŁAJCZAK",
    "OSOBA TOWARZYSZĄCA",
  ],
  32: [
    "MAREK SZMIDT",
    "SYBILLA SZMIDT",
    "ELA SZAFRAN",
    "WACŁAW SZAFRAN",
    "IREK KUCZMA",
    "ANNA GRZYBOWSKA",
    "OSOBA TOWARZYSZĄCA",
    "MARCIN JAGODZIK",
    "ZUZANNA JAGODZIK",
  ],
  33: [
    "JACEK BIERYT",
    "BEATA BIERYT",
    "RAFAŁ CHELA",
    "IWONA CHELA",
    "KATARZYNA BORYS",
    "TOMASZ BORYS",
    "JANUSZ TROJAN",
    "EWA TROJAN",
    "JAROSŁAW WOŹNICA",
    "DOROTA WOŹNICA",
  ],
  34: [
    "ANNA SORCZYŃSKA",
    "OSOBA TOWARZYSZĄCA",
    "AGNIESZKA NIEKRASZ",
    "OSOBA TOWARZYSZĄCA",
    "ANNA MAZUR",
    "BEATA IGNASIAK",
    "WIOLETTA SROKOSZ",
    "MARIA GOŁAŚ",
    "HENRYK GOŁAŚ",
  ],
  35: [
    "KRZYSZTOF TURZAŃSKI",
    "OSOBA TOWARZYSZĄCA",
    "DAMIAN BARTYLA",
    "OSOBA TOWARZYSZĄCA",
    "MAGDALENA STAROŚCIAK",
    "AREK ZIEMBA",
    "DOROTA ŚWIEBODA",
    "PIOTR ŚWIEBODA",
  ],
  36: [
    "MAREK JACKOWSKI",
    "OSOBA TOWARZYSZĄCA",
    "ADAM LUBOCKI",
    "OSOBA TOWARZYSZĄCA",
    "KAMILA BUSZTA-ROGACZEWSKA",
    "OSOBA TOWARZYSZĄCA",
  ],
  37: [
    "JOLANTA ZWIERZCHOWSKA",
    "BOGUSŁAW ZWIERZCHOWSKI",
    "ALICJA KUROWSKA",
    "BARTOSZ JÓZEFOWSKI",
    "HANNA RZEPECKA",
    "MAKSYMILIAN ZWIERZCHOWSKI",
  ],
  38: [
    "PIOTR SUTOR",
    "URSZULA SIECZKA",
    "JAROSŁAW LISZKA",
    "EWA GURSZCZYK",
    "ARTUR GURSZCZYK",
  ],
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
