let sliderAll = document.getElementById("carousel_all");
let controllerSlide1 = document.getElementById("controller1");
let controllerSlide2 = document.getElementById("controller2");
let controllerSlide3 = document.getElementById("controller3");

let nowPosition = 0;
let slideWidth = sliderAll.clientWidth / 3;
let slideNumber = 2;
let timeSlide = 6000;



function slideActiv() {
    if (slideNumber==1) {
        controllerSlide1.classList.add("control__border-color")
        controllerSlide2.classList.remove("control__border-color")
        controllerSlide3.classList.remove("control__border-color")
    }
    if (slideNumber==2) {
        controllerSlide1.classList.remove("control__border-color")
        controllerSlide2.classList.add("control__border-color")
        controllerSlide3.classList.remove("control__border-color")
    }
    if (slideNumber==3) {
        controllerSlide1.classList.remove("control__border-color")
        controllerSlide2.classList.remove("control__border-color")
        controllerSlide3.classList.add("control__border-color")
    }
}

function slideLeft() {
    if (slideNumber==1) {
        slideNumber = 3
        sliderAll.style.transform = `translateX(-33.33%)`;
        console.log(slideNumber)
        sliderAll.style.transition = `0.7s`;
        slideActiv();
    }
    else {
        slideNumber --
        let nextPosition = 33.33*(Math.abs(2-slideNumber))
        sliderAll.style.transform = `translateX(${nextPosition}%)`;
        console.log(slideNumber)
        console.log(nextPosition)
        sliderAll.style.transition = `1s`;
        slideActiv();
    }

}

function slideRight() {
    if (slideNumber==3) {
        slideNumber = 1
        sliderAll.style.transform = `translateX(33.33%)`;
        console.log(slideNumber)
        sliderAll.style.transition = `0.7s`;
        slideActiv();
    }
    else {
        slideNumber ++
        let nextPosition = 33.33*(2-slideNumber)
        sliderAll.style.transform = `translateX(${nextPosition}%)`;
        console.log(slideNumber)
        console.log(nextPosition)
        sliderAll.style.transition = `1s`;
        slideActiv();
    }
}

setInterval (slideRight,timeSlide);
document.getElementById("slider-left").addEventListener("click", slideLeft);
document.getElementById("slider-right").addEventListener("click", slideRight);

/*function slideLeftold() {


if (nowPosition==2*slideWidth) {
    nowPosition=-slideWidth
    sliderAll.style.transform = `translateX(${nowPosition}px)`;
    console.log(nowPosition)
    sliderAll.style.transition = `0.5s`;
}

if (nowPosition<2*slideWidth) {
    nowPosition += slideWidth;
    sliderAll.style.transform = `translateX(${nowPosition}px)`;
    console.log(nowPosition)
    sliderAll.style.transition = `2s`;
}

}

function slideRightold() {


if (nowPosition==0) {
    nowPosition = 3*slideWidth
    sliderAll.style.transform = `translateX(${nowPosition}px)`;
    console.log(nowPosition)
    sliderAll.style.transition = `0.5s`;
}

if (nowPosition>0) {
    nowPosition -= slideWidth;
    sliderAll.style.transform = `translateX(${nowPosition}px)`;
    console.log(nowPosition)
    sliderAll.style.transition = `2s`;
}
}
*/

