// Dane stolików
let tables = {
1: [
    "KAROLINA BĄK",
    "MARTA KWAŚNY",
    "KATARZYNA FLISEK + OSOBA TOWARZYSZĄCA",
    "AGNIESZKA DYRDAŚ + OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA JARUGA + OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA KASPRZAK",
    "IZABELA POPENDA",
    "BEATA ZIELIŃSKA",
    "KARINA SZKLARCZYK"
],

 2: [
    "KATARZYNA KRAWIEC + OSOBA TOWARZYSZĄCA",
    "MARZENA ŁATA + OSOBA TOWARZYSZĄCA",
    "KATARZYNA MATCZAK – JANISIAK + OSOBA TOWARZYSZĄCA",
    "ANETA OLSZEWSKA – SZYDŁO + OSOBA TOWARZYSZĄCA",
    "ŻANETA PRAŻMOWSKA + OSOBA TOWARZYSZĄCA",
    "IWONA SZAFRANIEC",
    "JUSTYNA SULIK"
],

  3: [
    "PATRYCJA SPOŁEK",
    "TERESA SZYMAŃSKA + OSOBA TOWARZYSZĄCA",
    "DARIA DYBAŁA",
    "BUGAJSKA ŻANETA",
    "ŻYDEK REGINA + OSOBA TOWARZYSZĄCA",
    "GEBEL WANESSA + OSOBA TOWARZYSZĄCA",
    "WILK KAROLINA + OSOBA TOWARZYSZĄCA",
    "BEATA KRAWCZYK"
],

 4: [
    "ANNA WALAS + OSOBA TOWARZYSZĄCA",
    "ANNA SOCHA + OSOBA TOWARZYSZĄCA",
    "ANITA STĘPIEŃ",
    "IRENA ĆWIĘKOWSKA",
    "KATARZYNA KOLCZAREK + OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA KOZIEŁ + OSOBA TOWARZYSZĄCA",
    "MONIKA LEDWOŃ"
],

 5: [
    "PATRYCJA GWÓŹDŻ + OSOBA TOWARZYSZĄCA",
    "OLGA PECELA + OSOBA TOWARZYSZĄCA",
    "ANNA PAWŁOWSKA + OSOBA TOWARZYSZĄCA",
    "MAGDALENA ZAGAŁA + OSOBA TOWARZYSZĄCA",
    "KATARZYNA CZAPLA + OSOBA TOWARZYSZĄCA",
    "MONIKA NIEMCZYK + OSOBA TOWARZYSZĄCA"
],

6: [
    "MONIKA FIDZIŃSKA",
    "DARIA ZMARZŁA + OSOBA TOWARZYSZĄCA",
    "JANINA FRĄCKOWIAK + OSOBA TOWARZYSZĄCA",
    "ANNA REBEŚ + OSOBA TOWARZYSZĄCA",
    "ANNA BACIA + OSOBA TOWARZYSZĄCA",
    "MAGDALENA BŁASZCZYK",
    "ELŻBIETA ŁATA"
],

  7: [
    "EWA KLEKOCKA",
    "ANETA MIŚTA",
    "MAŁGORZATA JAGŁA + OSOBA TOWARZYSZĄCA",
    "MARTA SOKOŁOWSKA + OSOBA TOWARZYSZĄCA",
    "BEATA POLEWCZAK",
    "MARIUSZ PIOTROWSKI + OSOBA TOWARZYSZĄCA",
    "GRAŻYNA ŚLIWKA",
    "BEATA BUGAJSKA"
],

  8: [
    "ANNA NOWAK + OSOBA TOWARZYSZĄCA",
    "JOANNA KURZAK + OSOBA TOWARZYSZĄCA",
    "JOANNA SKORUPA + OSOBA TOWARZYSZĄCA",
    "MAGDALENA NOWAK + OSOBA TOWARZYSZĄCA",
    "IWONA STRUŹIK JANERKA",
    "JUSTYNA JAGŁA + OSOBA TOWARZYSZĄCA",
    "FALKIEWICZ MAŁGORZATA"
],

 9: [
    "OPANOWICZ ANNA + OSOBA TOWARZYSZĄCA",
    "MARYSIA PEŁKA + OSOBA TOWARZYSZĄCA",
    "PROCHOTA JOANNA",
    "RYBAK BEATA + OSOBA TOWARZYSZĄCA",
    "MUSIOLIK JOANNA + OSOBA TOWARZYSZĄCA",
    "WOJCIECHOWSKA IWONA + OSOBA TOWARZYSZĄCA",
    "BEATA MACIAK"
],

  10: [
    "IWONA ZIMORSKA",
    "DOROTA ŻAK",
    "MONIKA PAWLAK",
    "MONIKA DAJTROWSKA",
    "ANNA GŁAB",
    "ANNA KRAKOWCZYK",
    "BEATA CZOTURBUK",
    "DOMINIKA DANISZ",
    "MIROSŁAW KLEJNA + OSOBA TOWARZYSZĄCA",
    "JUSTYNA MATUSZEWSKA + OSOBA TOWARZYSZĄCA"
],

 11: [
    "PATRYCJA ŚWIATEK",
    "KARINA JANKOWSKA + OSOBA TOWARZYSZĄCA",
    "FRANKSTAIN KLUADIA + OSOBA TOWARZYSZĄCA",
    "NIKODEM KAROLINA + OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA PRZYBYŁA + OSOBA TOWARZYSZĄCA",
    "MAKOWSKA IWONA + OSOBA TOWARZYSZĄCA",
    "KATARZYNA MICHALSKA"
],

 12: [
    "EWA KARBOWSKA",
    "NOWAK PATRYCJA",
    "KATARZYNA KRAWCZYK + OSOBA TOWARZYSZĄCA",
    "ALEKSANDRA PIETRZYCA + OSOBA TOWARZYSZĄCA",
    "MAŁGORZATA BOGACZ + OSOBA TOWARZYSZĄCA",
    "IŻYKOWSKA GRAŻYNA + OSOBA TOWARZYSZĄCA",
    "BIAŁOŃ AGATA + OSOBA TOWARZYSZĄCA"
],

  13: [
    "MAREK KAŁUŻA + OSOBA TOWARZYSZĄCA",
    "ANDRZEJ SUPIŃSKI + OSOBA TOWARZYSZĄCA",
    "MARCIN BASAK + OSOBA TOWARZYSZĄCA",
    "TOMEK ORŁOWSKI + OSOBA TOWARZYSZĄCA"
],

 14: [
    "RAFAŁ HAHN + OSOBA TOWARZYSZĄCA",
    "BARAM BARTOSZ + OSOBA TOWARZYSZĄCA",
    "MIROSŁAW SKORUPA + OSOBA TOWARZYSZĄCA",
    "LIGNAR BARBARA",
    "LIGNAR RADEK",
    "DANIEL DUBIEL",
    "ADAM GRANDA",
    "SITEK ROBERT + OSOBA TOWARZYSZĄCA"
],

15: [
    "JAROSŁAW KASPRZYK",
    "ANETA KWOSKA + OSOBA TOWARZYSZĄCA",
    "IVAN BODENCHUK",
    "ILONA SYLIUK",
    "OLENA BLAZHKEVYCH",
    "ANDRII BLAZHKEVYCH",
    "ROMAN KHASIA",
    "ZITA CHACHIBAIA",
    "GRAŻYNA LINDNER",
    "SEPIO MESKHIA + OSOBA TOWARZYSZĄCA"
],

 16: [
    "MATEUSZ PASIEKA",
    "JOANNA MYŚLIWIEĆ + OSOBA TOWARZYSZĄCA",
    "ANGELIKA SKODA",
    "ROBERT MAKSYM",
    "MIREK MIŚ + OSOBA TOWARZYSZĄCA",
    "PAWEŁ MRUK",
    "KAROLINA KĘPKA",
    "JANINA GRABSKA",
    "GRZEGORZ PYTA + OSOBA TOWARZYSZĄCA"
],

  28: [
    "SANDRA CICHOŃ",
    "AGNIESZKA BARAN + OSOBA TOWARZYSZĄCA",
    "ANETA BUJOCZEK + OSOBA TOWARZYSZĄCA",
    "DOMINIKA KOTLARZ",
    "MARIUSZ GONGOR",
    "OSOBA TOWARZYSZĄCA",
    "WIKTORIA JASIK + OSOBA TOWARZYSZĄCA"
],

 17: [
    "LAVRENCHUK SVETLANA + OSOBA TOWARZYSZĄCA",
    "NATALIIA SHERSTIUK",
    "VITALII PETRASHCHUK",
    "JOANNA JURASZCZYK + OSOBA TOWARZYSZĄCA",
    "MAGDALENA KRZYSZPIEŃ",
    "WIKTORIA LUKINCHUK",
    "ROZALIA RURYK",
    "IWONA BUDZIULIAK",
    "OLGA TRYL",
    "KLAUDIA FUHRMAN"
],

  30: [
    "MONIKA BOROWIEC",
    "MAŁGORZATA FRYC",
    "GRZEGORZ FRYC",
    "WIOLA BOROWIEC + OSOBA TOWARZYSZĄCA",
    "WIKTORIA JAŁOCHA",
    "RENATA BARAN",
    "AGNIESZKA PITAS",
    "MAREK PITAS",
    "OLA CZYŻ + OSOBA TOWARZYSZĄCA",
    "BOGUSIA BONISŁAWSKA"
],

  27: [
    "AGNIESZKA MASTALERZ + OSOBA TOWARZYSZĄCA",
    "DOROTA MASTALERZ + OSOBA TOWARZYSZĄCA",
    "ANIA NAWROT + OSOBA TOWARZYSZĄCA",
    "ALINA DZIADKIEWICZ + OSOBA TOWARZYSZĄCA",
    "DANUTA KRAMARCZYK",
    "NATALIA DEMCIO + OSOBA TOWARZYSZĄCA",
    "BERNADETTA LIGNAR"
],

 26: [
    "MICHAL LIWOŃ + OSOBA TOWARZYSZĄCA",
    "KAZIMIERZ MICHAŁKA + OSOBA TOWARZYSZĄCA",
    "PAWEL MICHAŁKA + OSOBA TOWARZYSZĄCA",
    "MARIUSZ WOJTACHA + OSOBA TOWARZYSZĄCA",
    "ILONA SZYSZŁO + OSOBA TOWARZYSZĄCA",
    "MATEUSZ KOCOT + OSOBA TOWARZYSZĄCA"
],

  24: [
    "GRZEGORZ BAUCH + OSOBA TOWARZYSZĄCA",
    "MARCIN BEŚKA + OSOBA TOWARZYSZĄCA",
    "PAWEŁ BANACH + OSOBA TOWARZYSZĄCA",
    "ROBERT DRÓŻDŻ + OSOBA TOWARZYSZĄCA",
    "ADAM MAZUR + OSOBA TOWARZYSZĄCA",
    "BARTOSZ STĘPIEŃ + OSOBA TOWARZYSZĄCA"
],

  25: [
    "JACEK DYSZY + OSOBA TOWARZYSZĄCA",
    "JUREK SZLIMOK + OSOBA TOWARZYSZĄCA",
    "RYSZARD MIKOLAS + OSOBA TOWARZYSZĄCA",
    "MIROSŁAW WYLON + OSOBA TOWARZYSZĄCA",
    "KRZYSZTOF CZAPLA + OSOBA TOWARZYSZĄCA",
    "SZEJA GRZEGORZA + OSOBA TOWARZYSZĄCA"
],

  37: [
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "ZESPÓŁ ERDANOWSKI",
    "KONFERANSJER"
],

  33: [
    "KASIA MICHALCZYK",
    "JACEK MICHALCZYK",
    "OLA STOLARCZYK",
    "DAMIAN STOLARCZYK",
    "RENATA NOWAK",
    "DAMIAN NAWALKOWSKI",
    "JOLA MIELNIK",
    "SŁAWOMIR MIELNIK",
    "IWONA PISKOREK",
    "ANDRZEJ PISKOREK"
],

  34: [
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
    "MAREK JAKUBIEC"
],

  35: [
    "SANDRA WIELICZKO + OSOBA TOWARZYSZĄCA",
    "PATRYCJA CHREŚCIONKO",
    "MICHAŁ WAŁĘSA",
    "EDYTA WĘGRZYN",
    "ADAM SKOPAL",
    "KAROL ZAWADA + OSOBA TOWARZYSZĄCA",
    "MARCIN CWILĄG + OSOBA TOWARZYSZĄCA"
"MATEUSZ JAKUBIEC",
],

  31: [
    "MONIKA AUGUSTYN",
    "DARIUSZ AUGUSTYN",
    "KRYSTYNA FARYŚ",
    "JANUSZ FARYŚ",
    "REMIGIUSZ RYGOŁ + OSOBA TOWARZYSZĄCA",
    "KARINA WOŹNIAK",
    "WOJCIECH WOŹNIAK",
    "SYLWIA GRONDAL",
    "ŁUKASZ GRONDAL",
    "MATEUSZ MITAS + OSOBA TOWARZYSZĄCA"
],

  18: [
    "Anna Tandyrak",
    "Stanisław Tandyrak",
    "Justyna Bałazy",
    "Michał Bałazy",
    "Joanna Żebrowska + Osoba Towarzysząca",
    "Violetta Żukowska",
    "Piotr Jakonik",
    "Agnieszka Markiewicz",
    "Krzysztof Markiewicz"
],

  20: [
    "GRZEGORZ MIKETA + OSOBA TOWARZYSZĄCA",
    "DAWID KUREK + OSOBA TOWARZYSZĄCA",
    "CZESŁAW KIERAT + OSOBA TOWARZYSZĄCA",
    "TOMASZ LEDWOROWSKI + OSOBA TOWARZYSZĄCA",
    "STEFAN MIKOŁAJCZAK + OSOBA TOWARZYSZĄCA",
    "JERZY KĘDZIORA + OSOBA TOWARZYSZĄCA"
],

  22: [
    "MAREK SZMIDT",
    "SYBILLA SZMIDT",
    "ELA SZAFRAN",
    "WACŁAW SZAFRAN",
    "IREK KUCZMA",
    "ANNA GRZYBOWSKA + OSOBA TOWARZYSZĄCA",
    "MARCIN JAGODZIK",
    "ZUZANNA JAGODZIK",
    "DAMIAN STARZYCZNY + OSOBA TOWARZYSZĄCA"
],

 23: [
    "JACEK BIERYT",
    "BEATA BIERYT",
    "RAFAŁ CHELA",
    "IWONA CHELA",
    "KATARZYNA BORYS",
    "TOMASZ BORYS",
    "JANUSZ TROJAN",
    "EWA TROJAN",
    "JAROSŁAW WOŹNICA",
    "DOROTA WOŹNICA"
],

  29: [
    "ANNA SORCZYŃSKA + OSOBA TOWARZYSZĄCA",
    "AGNIESZKA NIEKRASZ + OSOBA TOWARZYSZĄCA",
    "ANNA MAZUR",
    "BEATA IGNASIAK",
    "WIOLETTA SROKOSZ",
    "MARIA GOŁAŚ",
    "HENRYK GOŁAŚ",
    "HANNA JARZYNKA + OSOBA TOWARZYSZĄCA",
    "HENRYK JARZYNKA"
],

  32: [
    "KRZYSZTOF TURZAŃSKI + OSOBA TOWARZYSZĄCA",
    "DAMIAN BARTYLA + OSOBA TOWARZYSZĄCA",
    "MAGDALENA STAROŚCIAK",
    "AREK ZIEMBA",
    "KAROL KUBIK + OSOBA TOWARZYSZĄCA",
    "SŁAWOMIR KUBIK + OSOBA TOWARZYSZĄCA"
    "WITOLD GAIK + OSOBA TOWARZYSZĄCA",
],

 21: [
    "MAREK JACKOWSKI + OSOBA TOWARZYSZĄCA",
    "ADAM LUBOCKI + OSOBA TOWARZYSZĄCA",
    "KAMILA BUSZTA-ROGACZEWSKA + OSOBA TOWARZYSZĄCA",
    "HANNA POBŁODZKA + OSOBA TOWARZYSZĄCA",
    "KATARZYNA ADAMIOK + OSOBA TOWARZYSZĄCA",
    "ANDRZEJ NAKIELNY + OSOBA TOWARZYSZĄCA"
],

  36: [
    "JOLANTA ZWIERZCHOWSKA",
    "BOGUSŁAW ZWIERZCHOWSKI",
    "ALICJA KUROWSKA",
    "BARTOSZ JÓZEFOWSKI",
    "HANNA RZEPECKA",
    "MAKSYMILIAN ZWIERZCHOWSKI",
    "MAŁGORZATA ZWIERZCHOWSKA",
    "PRZEMYSŁAW KULANIN",
    "RAFAŁ ZWIERZCHOWSKI"
],

  19: [
    "PIOTR SUTOR",
    "URSZULA SIECZKA",
    "JAROSŁAW LISZKA",
    "EWA GURSZCZYK",
    "ARTUR GURSZCZYK",
    "SYLWIA GURSZCZYK",
    "PIOTR GURSZCZYK",
    "KRZYSZTOF i KATARZYNA GIEL",
],
};


// Funkcja do wyświetlania gości
function populateGuestTable() {
  const guestList = document.getElementById("guestList");
  guestList.innerHTML = ""; // Wyczyść zawartość

  for (const [tableId, guests] of Object.entries(tables)) {
    guests.forEach((guest) => {
      const guestCard = document.createElement("div");
      guestCard.classList.add("guest-card");
      guestCard.innerHTML = `
        <h2>${guest}</h2>
        <p class="table-number">Stolik: ${tableId}</p>
      `;
      guestList.appendChild(guestCard);
    });
  }
}

// Funkcja do wyszukiwania gości
function searchGuest() {
  const searchBox = document.getElementById("searchBox");
  const searchTerm = searchBox.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const guestList = document.getElementById("guestList");
  guestList.innerHTML = ""; // Wyczyść zawartość

  for (const [tableId, guests] of Object.entries(tables)) {
    guests.forEach((guest) => {
      if (guest.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm)) {
        const guestCard = document.createElement("div");
        guestCard.classList.add("guest-card");
        guestCard.innerHTML = `
          <h2>${guest}</h2>
          <p class="table-number">Stolik: ${tableId}</p>
        `;
        guestList.appendChild(guestCard);
      }
    });
  }
}

// Uruchomienie funkcji wypełniającej tabelę po załadowaniu strony
window.onload = populateGuestTable;
