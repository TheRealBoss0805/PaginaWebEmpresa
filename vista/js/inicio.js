const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".icon-left-dir");
const next = document.querySelector(".icon-right-dir");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
});

next.addEventListener("click", function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
});

//create circle indicators
function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.setAttribute("onclick", "indicateSlide(this)");
        div.id = i;
        if (i === 0) {
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}

circleIndicator();

function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator() {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    
    changeSlide();
}

function nextSlide() {

    if (index === slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    if(index === -1){
        index = 9;
    }
    
    if (index === 10) {
        index = 0;
    }

    slides[index].classList.add("active");
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 6000);
}

function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 6000);


/*
const before = document.querySelector('.before');
const after = document.querySelector('.after');
const carusel = document.querySelector('.slider-inicio-tercero');

before.addEventListener('click', () => {
    carusel.scrollLeft -=400
})

after.addEventListener('click', () => {
    carusel.scrollLeft += 400
})
*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
