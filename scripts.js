const fadeIn = (el) => {
    let element = document.querySelector(el);
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.marginTop = '-25px';
    }, 500); //setTimeout para delay haces función y al cerrarla le das milliseconds    
};

const gameClasification = [
    {position: '1', name: 'Paquito', points: '50 puntos'},
    {position: '2', name: 'Marisa', points: '45 puntos'}
    {position: '3', name: 'Alberto', points: '43 puntos'},
    {position: '4', name: 'Carlos', points: '40 puntos'}
    {position: '5', name: 'Laura', points: '37 puntos'},
    {position: '6', name: 'Juanito', points: '35 puntos'}
];

const rankingNode = document.querySelector('.ranking');

rankingNode.forEach((positionInfo) => {
    const pointsLabel = positionInfo.scoring === 1 ? 'punto' : 'puntos';

    rankingHtml += `<div class="ranking__item">
    <div><strong> ${positionInfo.position}.</strong> ${positionInfo.name}</div>
    <div>${positionInfo.scoring} ${pointsLabel}</div>
    </div>`
    rankingNode.innerHTML = htmlForPosition;
});

function startGame() {
    const availableClasses = [
        'redsquare--1',
        'redsquare--2',
        'redsquare--3',
        'redsquare--4',
        'redsquare--5'
    ];

    const availableTimers = [1000, 1500, 2000, 2500, 3000];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function pickRedsquare() {
        if (availableClasses.length === 0) {
            return;
        }

        const randomIndex = getRandomInt(0, availableClasses.length - 1);
        const randomTimerIndex = getRandomInt(0, availableTimers.length - 1);
        const timerToUse = availableTimers[randomTimerIndex];
        const classToUse = availableClasses.splice(randomIndex, 1)[0];
        const redsquareNode = document.querySelector('.redsquare:not(.redsquare--selected)');

        if (!redsquareNode) {
            return;
        }

        redsquareNode.classList.add('redsquare--selected');
        redsquareNode.classList.add(classToUse);

        const clickListener = () => {
            redsquareNode.classList.remove('redsquare--show');
            const countSpan = document.querySelector('#count');
            countSpan.innerText = parseInt(countSpan.innerText) + 1;
        };

        redsquareNode.addEventListener('click', clickListener);

        setTimeout(() => {
            redsquareNode.classList.add('redsquare--show');
        }, 400);

        setTimeout(() => {
            redsquareNode.classList.remove('redsquare--show');

            setTimeout(() => {
                redsquareNode.classList.remove('redsquare--selected');
                redsquareNode.classList.remove(classToUse);
                availableClasses.push(classToUse);
                redsquareNode.removeEventListener('click', clickListener);
            }, 400);
        }, timerToUse);
    }

    pickRedsquare();
    return setInterval(pickRedsquare, 1000);
}

const myButton = document.querySelector('.cta-start');
let gameInterval;

myButton.addEventListener("click", () => {
    let element2 = document.querySelector('.allcontent');
    element2.style.opacity = 0;
    setTimeout(() => {
        let element3 = document.querySelector('#flow');
        element3.style.width = 0;

        if (gameInterval) {
            clearInterval(gameInterval);
        }

        gameInterval = startGame();
    }, 700);
});

const closeBtn = document.querySelector('.cta-close');
closeBtn.addEventListener('click', () => {
    setTimeout(() => {
        clearInterval(gameInterval);
        const countSpan = document.querySelector('#count');
        countSpan.innerText = 0;
    }, 1000);
    
    setTimeout(() => {
        let element2 = document.querySelector('#flow');
    element2.style.width = '100%';
    }, 500);
    
    setTimeout(() => {
        let element3 = document.querySelector('.allcontent');
        element3.style.transition = 'all 1s ease-in-out;'
        element3.style.opacity = 1;
    }, 1000);
});