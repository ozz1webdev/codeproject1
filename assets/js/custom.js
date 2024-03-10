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
    submitBtn();
}
function submitBtn () {
    var contactName = document.getElementById("contactName");
    var contactMail = document.getElementById("contactMail");
    var contactMsg = document.getElementById("contactMsg");
    var win = document.getElementById("contactMsg");
    alert
    if (contactName.textContent == "Write your name here..") { // && contactMail.textContent != "" && contactMsg.textContent != "") {
        win.style.height = "0px";
    }
    else {
        win.style.height = "300px";
    }
}
function msgCloseBtn() {
    var win = document.getElementById("contactMsg");
    win.style.height = "0px";
    console.log("click");
}
