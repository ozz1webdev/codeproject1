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
    aboutContaner.classList.remove('aboutContainerFinal');
    aboutContaner.classList.remove('aboutContainerStart');


    container.classList.add('containerClear');
    aboutContainer.classList.add('aboutContainerStart');
    
}
