function myFunction() {
  let element = document.getElementById("sub-menu");
  let menu = document.getElementById("menu");
  let menuX = document.getElementById("menu-x");

  if (element.style.display == "block") {
    element.style.display = "none";
    menu.style.display = "block";
    menuX.style.display = "none";
  } else {
    element.style.display = "block";
    menu.style.display = "none";
    menuX.style.display = "block";
  }
}
