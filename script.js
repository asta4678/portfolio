window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  //vi vælger det der skal tages fat i
  document.querySelector("#menu_knap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggle menu");
  document.querySelector("#menu_burger").classList.toggle("hidden");

  //vi spørger om den indeholder klassen "hidden". let er den nye måde at lave variabler
  let erSkjult = document
    .querySelector("#menu_burger")
    .classList.contains("hidden");

  if (erSkjult == true) {
    // menuen er nu skjult - ændre menuknap til tre streger lll
    document.querySelector("#menu_knap").textContent = "☰";
  } else {
    //menuen er nu vist - ændre menuknap til X
    document.querySelector("#menu_knap").innerHTML = "&times";
  }
}
