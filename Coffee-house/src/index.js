let sliderAll = document.getElementById("carousel_all");
let nowPosition = 0;
let slideWidth = sliderAll.clientWidth / 3;
let slideAbsWidth = 0;

function slideLeft() {


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

function slideRight() {


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

document.getElementById("slider-left").addEventListener("click", slideLeft);
document.getElementById("slider-right").addEventListener("click", slideRight);