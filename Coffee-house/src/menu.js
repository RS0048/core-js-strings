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

    chooseSizeS();

    buttonTool4.classList.remove("tool__button_modificed");
    icoTool4.classList.remove("tool__ico_modificed");
    contentTool4.classList.remove("tool__content_modificed");

    buttonTool5.classList.remove("tool__button_modificed");
    icoTool5.classList.remove("tool__ico_modificed");
    contentTool5.classList.remove("tool__content_modificed");

    buttonTool6.classList.remove("tool__button_modificed");
    icoTool6.classList.remove("tool__ico_modificed");
    contentTool6.classList.remove("tool__content_modificed");

    sizePrice = 0;
    addPrice = 0;

}

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

//выбор модалки

let imgMenu = document.getElementById("imgMenu")
let titleMenu = document.getElementById("titleMenu")
let contentMenu = document.getElementById("contentMenu")

//1
function modalMenu1 () {
    imgMenu.innerHTML = '<img src="./img/coffee-1.jpg" alt="coffee">'
    titleMenu.innerHTML = "Irish coffee"
    contentMenu.innerHTML = "Fragrant black coffee with Jameson Irish whiskey and whipped milk"
    modalTotalPrice.innerHTML = "$7.00"
    startPrice = 7.00
}

document.getElementById("menu1").addEventListener("click", modalMenu1);
document.getElementById("menu1").addEventListener("click", modalVisible);



//2
function modalMenu2 () {
    imgMenu.innerHTML = '<img src="./img/coffee-2.jpg" alt="coffee">'
    titleMenu.innerHTML = "Kahlua coffee"
    contentMenu.innerHTML = "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk"
    modalTotalPrice.innerHTML = "$7.00"
    startPrice = 7.00
}

document.getElementById("menu2").addEventListener("click", modalMenu2);
document.getElementById("menu2").addEventListener("click", modalVisible);



//3
function modalMenu3 () {
    imgMenu.innerHTML = '<img src="./img/coffee-3.jpg" alt="coffee">'
    titleMenu.innerHTML = "Honey raf"
    contentMenu.innerHTML = "Espresso with frothed milk, cream and aromatic honey"
    modalTotalPrice.innerHTML = "$5.50"
    startPrice = 5.50
}

document.getElementById("menu3").addEventListener("click", modalMenu3);
document.getElementById("menu3").addEventListener("click", modalVisible);



//4
function modalMenu4 () {
    imgMenu.innerHTML = '<img src="./img/coffee-4.jpg" alt="coffee">'
    titleMenu.innerHTML = "Ice cappuccino"
    contentMenu.innerHTML = "Cappuccino with soft thick foam in summer version with ice"
    modalTotalPrice.innerHTML = "$5.00"
    startPrice = 5.00
}

document.getElementById("menu4").addEventListener("click", modalMenu4);
document.getElementById("menu4").addEventListener("click", modalVisible);



//5
function modalMenu5 () {
    imgMenu.innerHTML = '<img src="./img/coffee-5.jpg" alt="coffee">'
    titleMenu.innerHTML = "Espresso"
    contentMenu.innerHTML = "Classic black coffee"
    modalTotalPrice.innerHTML = "$4.50"
    startPrice = 4.50
}

document.getElementById("menu5").addEventListener("click", modalMenu5);
document.getElementById("menu5").addEventListener("click", modalVisible);



//6
function modalMenu6 () {
    imgMenu.innerHTML = '<img src="./img/coffee-6.jpg" alt="coffee">'
    titleMenu.innerHTML = "Latte"
    contentMenu.innerHTML = "Espresso coffee with the addition of steamed milk and dense milk foam"
    modalTotalPrice.innerHTML = "$5.50"
    startPrice = 5.50
}

document.getElementById("menu6").addEventListener("click", modalMenu6);
document.getElementById("menu6").addEventListener("click", modalVisible);



//7
function modalMenu7 () {
    imgMenu.innerHTML = '<img src="./img/coffee-7.jpg" alt="coffee">'
    titleMenu.innerHTML = "Latte macchiato"
    contentMenu.innerHTML = "Espresso with frothed milk and chocolate"
    modalTotalPrice.innerHTML = "$5.50"
    startPrice = 5.50
}

document.getElementById("menu7").addEventListener("click", modalMenu7);
document.getElementById("menu7").addEventListener("click", modalVisible);



//8
function modalMenu8 () {
    imgMenu.innerHTML = '<img src="./img/coffee-8.jpg" alt="coffee">'
    titleMenu.innerHTML = "Coffee with cognac"
    contentMenu.innerHTML = "Fragrant black coffee with cognac and whipped cream"
    modalTotalPrice.innerHTML = "$6.50"
    startPrice = 6.50
}

document.getElementById("menu8").addEventListener("click", modalMenu8);
document.getElementById("menu8").addEventListener("click", modalVisible);