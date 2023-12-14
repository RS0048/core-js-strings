
let modalBurger = document.getElementById("modalBurger")
let burgerButton = document.getElementById("burgerButton")
let lineBurger1 = document.getElementById("lineBurger1")
let lineBurger2 = document.getElementById("lineBurger2")

function burgerVisible() {
    modalBurger.style.display = "flex"
    bodyIndex.style.overflow = "hidden";
    //lineBurger1.classList.add("line-burger-rotate1")
    //lineBurger2.classList.add("line-burger-rotate2")
}

function burgerInvisible() {
    modalBurger.style.display = "none"
    bodyIndex.style.overflow = "";
    //lineBurger1.classList.add("line-burger-rotate1")
    //lineBurger2.classList.add("line-burger-rotate2")
}

document.getElementById("burgerButton").addEventListener("click", burgerVisible);
document.getElementById("burgerClose1").addEventListener("click", burgerInvisible);
document.getElementById("burgerClose2").addEventListener("click", burgerInvisible);
document.getElementById("burgerClose3").addEventListener("click", burgerInvisible);
document.getElementById("burgerClose4").addEventListener("click", burgerInvisible);
document.getElementById("burgerClose5").addEventListener("click", burgerInvisible);