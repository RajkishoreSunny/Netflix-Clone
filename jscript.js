function getStarted(){
    document.querySelector(".btn btn-lg");
    alert("Registration Succesfull! Please check mail for furthur steps");
}

function loginPage(){
    document.querySelector(".btn btn-rounded");
    alert("Redirecting to Login Page!");
    location.replace('H:/Semester%202/HTML%20Projects/Netflix/SignIn.html');
}

function login(){
    var mai = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    if(mai == "admin@gmail.com" && pass == "admin@123"){
        alert("Welcome admin!!!");
    }
    else{
        alert("Login Successfull!");
    }
}
function signup(){
    alert("A mail will be sent after you enter your mail adress!! Please Sign up from there");
}
function forgotpass(){
    alert("Reset Password link sent to your mail address!!!");
}