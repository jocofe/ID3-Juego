const fadeIn = (el) => {
    let element = document.querySelector(el);
    element.style.opacity = 1;
    element.style.marginTop = '-25px';
};

const myButton = document.querySelector('.cta-start');
myButton.addEventListener("click", () => {
    let element2 = document.querySelector('.allcontent');
    element2.style.opacity = 0;
    element2.style.marginTop = '25px'; 
    let element3 = document.querySelector('#flow');
    element3.style.animationDuration = '0.3';
    element3.style.width = 0;
});