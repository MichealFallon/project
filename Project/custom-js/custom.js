
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

var logout = document.getElementById('loginlogout');
logout.addEventListener("click", Logout);

function Logout()
{
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}


// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}
document.getElementById("buy-button").addEventListener("click",buy,false)
function buy(){
    localStorage.setItem("checkout",0)
}




