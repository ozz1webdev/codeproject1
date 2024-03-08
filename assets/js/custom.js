function startpage() {
    var bodyp = document.getElementById('homepage');
    
    bodyp.style.height = "80vh"
}
function homeBtn() {
    var homepage = document.getElementById('homepage');
    var aboutpage = document.getElementById('aboutpage');
    var contactpage=document.getElementById('contactpage');
    
    contactpage.style.height = "0vh";
    aboutpage.style.height = "0vh";
    homepage.style.height = "80vh";
}
function aboutBtn(){
    var homepage = document.getElementById('homepage');
    var aboutpage = document.getElementById('aboutpage');
    var contactpage=document.getElementById('contactpage');
    
    homepage.style.height = "0vh";
    contactpage.style.height = "0vh";
    aboutpage.style.height = "80vh";
}
function contactBtn () {
    var homepage = document.getElementById('homepage');
    var aboutpage = document.getElementById('aboutpage');
    var contactpage=document.getElementById('contactpage');
    
    homepage.style.height = "0vh";
    aboutpage.style.height = "0vh";
    contactpage.style.height = "80vh";
    
}