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

//расчет добавок

let startPrice = 7.00;
let sizeS = 0.00;
let sizeM = 0.50;
let sizeL = 1.00;
let sugar = 0.50;
let cinnamon = 0.50;
let syrup = 0.50;

let totalPrice;
let sizePrice = 0;
let addPrice = 0;

let buttonTool1 = document.getElementById("buttonTool1")
let buttonTool2 = document.getElementById("buttonTool2")
let buttonTool3 = document.getElementById("buttonTool3")
let buttonTool4 = document.getElementById("buttonTool4")
let buttonTool5 = document.getElementById("buttonTool5")
let buttonTool6 = document.getElementById("buttonTool6")

let icoTool1 = document.getElementById("icoTool1")
let icoTool2 = document.getElementById("icoTool2")
let icoTool3 = document.getElementById("icoTool3")
let icoTool4 = document.getElementById("icoTool4")
let icoTool5 = document.getElementById("icoTool5")
let icoTool6 = document.getElementById("icoTool6")

let contentTool1 = document.getElementById("contentTool1")
let contentTool2 = document.getElementById("contentTool2")
let contentTool3 = document.getElementById("contentTool3")
let contentTool4 = document.getElementById("contentTool4")
let contentTool5 = document.getElementById("contentTool5")
let contentTool6 = document.getElementById("contentTool6")

let modalTotalPrice = document.getElementById("modalTotalPrice");

// выбор размера

function chooseSizeS () {
    sizePrice = 0.00;
    buttonTool1.classList.add("tool__button_modificed");
    buttonTool2.classList.remove("tool__button_modificed");
    buttonTool3.classList.remove("tool__button_modificed");

    icoTool1.classList.add("tool__ico_modificed");
    icoTool2.classList.remove("tool__ico_modificed");
    icoTool3.classList.remove("tool__ico_modificed");

    contentTool1.classList.add("tool__content_modificed");
    contentTool2.classList.remove("tool__content_modificed");
    contentTool3.classList.remove("tool__content_modificed");

    totalPrice = startPrice + sizePrice + addPrice
    modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
}

document.getElementById("buttonTool1").addEventListener("click", chooseSizeS);

function chooseSizeM () {
    sizePrice = 0.50;
    buttonTool1.classList.remove("tool__button_modificed");
    buttonTool2.classList.add("tool__button_modificed");
    buttonTool3.classList.remove("tool__button_modificed");

    icoTool1.classList.remove("tool__ico_modificed");
    icoTool2.classList.add("tool__ico_modificed");
    icoTool3.classList.remove("tool__ico_modificed");

    contentTool1.classList.remove("tool__content_modificed");
    contentTool2.classList.add("tool__content_modificed");
    contentTool3.classList.remove("tool__content_modificed");

    totalPrice = startPrice + sizePrice + addPrice
    modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
}

document.getElementById("buttonTool2").addEventListener("click", chooseSizeM);

function chooseSizeL () {
    sizePrice = 1.00;
    buttonTool1.classList.remove("tool__button_modificed");
    buttonTool2.classList.remove("tool__button_modificed");
    buttonTool3.classList.add("tool__button_modificed");

    icoTool1.classList.remove("tool__ico_modificed");
    icoTool2.classList.remove("tool__ico_modificed");
    icoTool3.classList.add("tool__ico_modificed");

    contentTool1.classList.remove("tool__content_modificed");
    contentTool2.classList.remove("tool__content_modificed");
    contentTool3.classList.add("tool__content_modificed");

    totalPrice = startPrice + sizePrice + addPrice
    modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
}

document.getElementById("buttonTool3").addEventListener("click", chooseSizeL);

//выбор добавок


// sugar
function chooseAddSugar () {
if (!buttonTool4.classList.contains("tool__button_modificed")) {
    addPrice += sugar
    buttonTool4.classList.add("tool__button_modificed");
    icoTool4.classList.add("tool__ico_modificed");
    contentTool4.classList.add("tool__content_modificed");

    totalPrice = startPrice + sizePrice + addPrice
    modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
} else {
    addPrice -= sugar
    buttonTool4.classList.remove("tool__button_modificed");
    icoTool4.classList.remove("tool__ico_modificed");
    contentTool4.classList.remove("tool__content_modificed");

    totalPrice = startPrice + sizePrice + addPrice
    modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
}
}

document.getElementById("buttonTool4").addEventListener("click", chooseAddSugar);


//cinnamon
function chooseAddCinnamon () {
    if (!buttonTool5.classList.contains("tool__button_modificed")) {
        addPrice += cinnamon
        buttonTool5.classList.add("tool__button_modificed");
        icoTool5.classList.add("tool__ico_modificed");
        contentTool5.classList.add("tool__content_modificed");
    
        totalPrice = startPrice + sizePrice + addPrice
        modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
    } else {
        addPrice -= cinnamon
        buttonTool5.classList.remove("tool__button_modificed");
        icoTool5.classList.remove("tool__ico_modificed");
        contentTool5.classList.remove("tool__content_modificed");
    
        totalPrice = startPrice + sizePrice + addPrice
        modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
    }
    }
    
    document.getElementById("buttonTool5").addEventListener("click", chooseAddCinnamon);


    //syrup
    function chooseAddSyrup () {
        if (!buttonTool6.classList.contains("tool__button_modificed")) {
            addPrice += syrup
            buttonTool6.classList.add("tool__button_modificed");
            icoTool6.classList.add("tool__ico_modificed");
            contentTool6.classList.add("tool__content_modificed");
        
            totalPrice = startPrice + sizePrice + addPrice
            modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
        } else {
            addPrice -= syrup
            buttonTool6.classList.remove("tool__button_modificed");
            icoTool6.classList.remove("tool__ico_modificed");
            contentTool6.classList.remove("tool__content_modificed");
        
            totalPrice = startPrice + sizePrice + addPrice
            modalTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)
        }
        }
        
        document.getElementById("buttonTool6").addEventListener("click", chooseAddSyrup);