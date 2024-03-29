"use strict"

window.addEventListener('scroll', setScroll);
window.addEventListener('wheel', setScroll);

function setScroll(){
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');
    
    if(window.pageYOffset > 90){
        if(!hero.classList.contains('min')){
            hero.classList.add('min');
        }
        if(!header.classList.contains('min')){
            header.classList.add('min');
        }
    } else {
        if(hero.classList.contains('min')){
            hero.classList.remove('min');
        }
        if(header.classList.contains('min')){
            header.classList.remove('min');
        }

        scrollOut();
    }

    const scrollInElement = Array.from(document.querySelectorAll('.scrollIn:not(.visible)'));

    scrollInElement.forEach(element => {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;

        if(
            window.pageYOffset > 90 &&
            top < window.innerHeight && 
            bottom >= 0
        ){
            scrollIn(element);
        }
    })
}

function scrollIn(element){
    element.classList.add('visible');

    if(element.dataset.function !== undefined){
        switch(element.dataset.function){
            case "information":
                fadeInInformation();
                setMeInformation();
                setAge();
        }
    }
}

function scrollOut(){
    const scrollOutELement = Array.from(document.querySelectorAll('.scrollIn.visible'));

    scrollOutELement.forEach(element => {
        element.classList.remove('visible');
    })

    fadeOutInformation();
    resetAge();
}