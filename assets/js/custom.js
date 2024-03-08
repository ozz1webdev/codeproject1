let container = document.getElementById('container');
let aboutContainer = document.getElementById('aboutContainer');

function homeBtn() {
    let container = document.getElementById('container');
    let aboutContainer = document.getElementById('aboutContainer');

    container.classList.remove('containerClear');
    container.classList.remove('containerVisible');
    container.classList.remove('containerStart');
    aboutContainer.classList.remove('aboutContainerClear');
    aboutContainer.classList.remove('aboutContainerFinal');
    aboutContainer.classList.remove('aboutContainerStart');

    aboutContainer.classList.add('aboutContainerClear');
    container.classList.add('containerVisible');
}
function aboutBtn(){
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
function contactBtn () {
    
}