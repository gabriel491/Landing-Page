function clickMenu() {
  let nav = document.getElementById("nav-bar");
  let list = document.getElementById("list");
  let close = document.getElementById("burguer");

  if (nav.classList == 'active') {
    nav.classList.remove("active")
    list.style.display = "none";
    close.textContent = 'menu'

  } else {
    nav.classList.add("active")
    list.style.display = "block";
    close.textContent = 'close'
  }
}
