window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");

  // DER TRYKKES / KLIKKES PÅ MENU KNAPPEN

  document.querySelector("#menu_knap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggle menu");
  document.querySelector("#menu_burger").classList.toggle("hidden");

  let erSkjult = document
    .querySelector("#menu_burger")
    .classList.contains("hidden");

  if (erSkjult == true) {
    // NÅR MENUEN ER SKJULT DA VINDUET ER BLEVET MINDRE LAVES MENUEN OM TIL EN BURGERMENU MED TRE STREGER
    document.querySelector("#menu_knap").textContent = "☰";
  } else {
    // NÅR MENUEN ER ÅBEN ÆNDRES DE TRE STREGER TIL ET KRYDS - HER KAN MAN LUKKE MENUEN
    document.querySelector("#menu_knap").innerHTML = "&times";
  }
}
