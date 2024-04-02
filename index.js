function closeHamb() {
    console.log("Close Hamburger Menu");
    const hambMenu = document.getElementsByClassName("hambMenu")[0];
    hambMenu.classList.remove("hambOpen");
}

function openHamb() {
    console.log("Open Hamburger Menu");
    const hambMenu = document.getElementsByClassName("hambMenu")[0];
    hambMenu.classList.add("hambOpen");
}