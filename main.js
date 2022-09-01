var menuItems = document.getElementById("wrapper");

function hideMenu() {
    console.log("ok");
    menuItems.style.top = "-700px";
}

function showMenu() {
    menuItems.style.top = "0";
}

// ----------------------------------------

const btn = document.querySelector(".more-button");
const div = document.querySelector(".more");

btn.addEventListener("click", function () {
    console.log("ok");
    btn.classList.toggle("show");
    div.classList.toggle("show");
})