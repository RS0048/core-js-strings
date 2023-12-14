let modalWindow = document.getElementById("modalWindow");
let modalShadow = document.getElementById("modalShadow");
let bodyMenu = document.getElementById("bodyMenu")
let burgerMenu = document.getElementById("burgerMenu")

function modalVisible() {
    modalWindow.style.display = "flex";
    modalShadow.style.display = "flex";
    bodyMenu.style.overflow = "hidden";
    burgerMenu.style.display = "flex";

}

function modalInvisible() {
    modalWindow.style.display = "none";
    modalShadow.style.display = "none";
    bodyMenu.style.overflow = "";
}

document.getElementById("menu1").addEventListener("click", modalVisible);
document.getElementById("modalEnd").addEventListener("click", modalInvisible);
document.getElementById("modalShadow").addEventListener("click", modalInvisible);

//расчет добавок

let price = 7.00;
let sizeS = 0.00;
let sizeM = 0.50;
let sizeL = 1.00;
let sugar = 0.50;
let cinnamon = 0.50;
let syrup = 0.50;
//let sum = price+sizeM;
//let sum2 = sum.toFixed(2);
//console.log(sum2);

//refreshButton

let refreshButton = document.getElementById("refreshButton");
let dopMenu = document.getElementById("dopMenu")
let dopMenu2 = document.getElementById("dopMenu2")
let dopMenu3 = document.getElementById("dopMenu3")
let dopMenu4 = document.getElementById("dopMenu4")


function refreshOn() {
dopMenu1.style.display = "Block";
dopMenu2.style.display = "Block";
dopMenu3.style.display = "Block";
dopMenu4.style.display = "Block";
refreshButton.style.display = "none";
}

document.getElementById("refreshButton").addEventListener("click", refreshOn);

