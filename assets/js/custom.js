let container = document.getElementById('container');
let aboutContainer = document.getElementById('aboutContainer');

function homeAnim() {
    let container = document.getElementById('container');
    let aboutContainer = document.getElementById('aboutContainer');

    container.classList.remove('containerClear');
    container.classList.remove('containerFinal');
    container.classList.remove('containerStart');

    container.classList.add('containerStart');
}
function aboutAnim(){
    let container = document.getElementById('container');
    let aboutContainer = document.getElementById('aboutContainer');

    container.classList.remove('containerClear');
    container.classList.remove('containerFinal');
    container.classList.remove('containerStart');

    aboutContainer.classList.remove('aboutContainerClear');
    aboutContainer.classList.remove('aboutContainerFinal');
    aboutContainer.classList.remove('aboutContainerStart');


    container.classList.add('containerClear');
    aboutContainer.classList.add('aboutContainerStart');
    
}



//const card1 = document.querySelector('card1');
const card1 = document.getElementById('card1');

document.addEventListener('mousemove', (e) =>{
    const card1 = document.getElementById('card1');

    rotateElement(e,card1);
});

function rotateElement(event,element) {
    const x = event.clientX; //track X position
    const y = event.clientY; //track Y position
    
    //get middle of the windows
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    //get offset from middle the distance where mouse is from middle
    const offsetX = ((x-middleX) / middleX) * 45;
    const offsetY = ((y-middleY) / middleY) * 45;

    element.style.setProperty("width",500);
    element.style.setProperty("--rotateX",-1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}