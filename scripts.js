const fadeIn = (el) => {
    let element = document.querySelector(el);
    element.style.opacity = 1;
    element.style.marginTop = '-25px';
};

const myButton = document.querySelector('.cta-start');
myButton.addEventListener("click", () => {
    let element2 = document.querySelector('.allcontent');
    element2.style.opacity = 0;
    let element3 = document.querySelector('#flow');
    element3.style.animationDuration = '0.3';
    element3.style.width = 0;
});

const myButton2 = document.querySelector('.cta-close');
myButton2.addEventListener('click', () => {
    let element3 = document.querySelector('#flow');
    element3.style.width = '100%'; 
    if (element3.style.width = '100%') {
        let element2 = document.querySelector('.allcontent');
        element3.style.animationDuration = '2s';
        element2.style.transition = 'all 1s ease-in-out;'
        element2.style.opacity = 1;
    }
});