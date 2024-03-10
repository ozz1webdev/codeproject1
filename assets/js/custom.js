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
    var contactMsg = document.getElementById("contactMesg");
    var win = document.getElementById("contactMsg");
    
    if (contactName.value != "" && contactMail.value != "" && contactMsg.value != "") {
        win.style.height = "300px";
        win.style.width = "500px";
    }
    else {
        win.style.height = "0px";
        win.style.width = "0px";
    }
}
function msgCloseBtn() {
    var win = document.getElementById("contactMsg");
    var contactName = document.getElementById("contactName");
    var contactMail = document.getElementById("contactMail");
    var contactMsg = document.getElementById("contactMesg");

    win.style.height = "0px";
    //win.style.width = "0px";

    contactName.value="";
    contactMail.value = "";
    contactMsg.value = "";
}
function onLogin() {
    var doorLeft = document.getElementById('doorLeft');
    var doorRight = document.getElementById('doorRight');
    
    doorLeft.style.width = "50%";
    doorRight.style.width = "50%";

    setTimeout(loginForm,5000);

}
function loginForm(){
    var loginForm = document.getElementById('loginForm');
    loginForm.style.height = "300px";
}
function loginSubmit() {
    var doorLeft = document.getElementById('doorLeft');
    var doorRight = document.getElementById('doorRight');
    var loginForm = document.getElementById('loginForm');
    var user = document.getElementById('userName');
    var pass = document.getElementById('userPassword');

    if (user.value == "guest" && pass.value == "guest") {
        doorLeft.style.width = "0px";
        doorRight.style.width = "0px";
        loginForm.style.height = "0px";
    }
    else {
        //alert("Wrong Username or Password Plz Enter Username: guest Password: guest for demostration");
    }
}
function loginCancel() {
    var doorLeft = document.getElementById('doorLeft');
    var doorRight = document.getElementById('doorRight');
    var loginForm = document.getElementById('loginForm');
    
    doorLeft.style.width = "0px";
    doorRight.style.width = "0px";
    loginForm.style.height = "0px";

}
function mainScrollfunc() {
    
};