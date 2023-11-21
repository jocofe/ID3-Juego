const fadeIn = (el) => {
    let element = document.querySelector(el);
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.marginTop = '-25px';
    }, 500); //setTimeout para delay haces función y al cerrarla le das milliseconds    
};

const myButton = document.querySelector('.cta-start');
myButton.addEventListener("click", () => {
    let element2 = document.querySelector('.allcontent');
    element2.style.opacity = 0;
    setTimeout(() => {
        let element3 = document.querySelector('#flow');
        element3.style.width = 0;
    }, 700);
});
    

const myButton2 = document.querySelector('.cta-close');
myButton2.addEventListener('click', () => {
    let element2 = document.querySelector('#flow');
    element2.style.width = '100%'; 
    setTimeout(() => {
        let element3 = document.querySelector('.allcontent');
        element3.style.transition = 'all 1s ease-in-out;'
        element3.style.opacity = 1;
    }, 1000);
});