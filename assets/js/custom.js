let devCard = document.getElementById('id_card_dev');
let graphCard = document.getElementById('id_card_graph');
let serverCard = document.getElementById('id_card_server');

function card_server_click() {
    devCard.classList.remove('card_dev_anim2');
    graphCard.classList.remove('card_graph_anim2');
    devCard.classList.add('card_dev_anim1');
    graphCard.classList.add('card_graph_anim1');
    serverCard.classList.add('card_server_anim2');

}
function card_dev_click() {
    graphCard.classList.remove('card_graph_anim2');
    serverCard.classList.remove('card_server_anim2');
    serverCard.classList.add('card_server_anim1');
    graphCard.classList.add('card_graph_anim1');
    devCard.classList.add('card_dev_anim2');

}

function card_graph_click() {
    devCard.classList.remove('card_dev_anim2');
    serverCard.classList.remove('card_server_anim2');
    devCard.classList.add('card_dev_anim1');
    serverCard.classList.add('card_server_anim1');
    graphCard.classList.add('card_graph_anim2');
}
function home_link () {
    devCard.classList.remove('card_dev_anim1');
    serverCard.classList.remove('card_server_anim1');
    graphCard.classList.remove('card_graph_anim1');

    devCard.classList.remove('card_dev_anim2');
    serverCard.classList.remove('card_server_anim2');
    graphCard.classList.remove('card_graph_anim2');
}
