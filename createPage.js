
let signup_form = document.getElementById('signup_form')
signup_form.onsubmit = (ev) => {
    ev.preventDefault()
    takeformData()
}


function takeformData(){
    let firstname = document.getElementById("firstname").value;
    let Lastname = document.getElementById("Lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let number = document.getElementById("number").value;

    let userdata = {
        firstname,
        Lastname,
        email,
        password,
        confirmpassword,
        number
    }

    if(checkEmail(email) && checkPassword(password) && checkMobile(number)){


        localStorage.setItem("user_data", JSON.stringify(userdata))

        alert(`Hello! ${firstname + " " + Lastname} Your account is created`)


        document.getElementById('signup_form').reset();

        window.location.href = "signInPage.html"
        

    } else if(checkEmail(email) && checkPassword(password)){
        alert(`Hey! ${firstname + " " + Lastname} Your Mobile Number is wrong`)

    } else if(checkEmail(email) && checkMobile(number)){
        alert(`Hey! ${firstname + " " + Lastname} Your Password is not appropriate`)

    } else if(checkPassword(password) && checkMobile(number)){
        alert(`Hey! ${firstname + " " + Lastname} Your Email is not appropriate`)

    } else if(checkPassword(password) && checkMobile(number)){
        alert(`Hey! ${firstname + " " + Lastname} Your Email is not appropriate`)

    } else{
        alert(`Hey! ${firstname + " " + Lastname} Your details is not in proper format`)
    }
}

function checkEmail(email){
    
    return email.includes('@')? true: false
}

function checkPassword(password){
    
    if(password.length >= 8 && (password.includes("!") || password.includes("@") || password.includes("#") || password.includes("$") || password.includes("%") || password.includes("^") || password.includes("&") || password.includes("*")) && (password.includes(1) || password.includes(2) || password.includes(3) || password.includes(4) || password.includes(5) || password.includes(6) || password.includes(7) || password.includes(8) || password.includes(9) || password.includes(0))){

        return true;

    } else{
        return false;
    }
}


function checkMobile(number){

    return number.length == 10 ? true: false; 
}


// pasword


function toggleinput(){
    let password = document.getElementById('password')

    let confirmpassword = document.getElementById('confirmpassword')

    let validaty = document.getElementById('validaty')
    if (validaty.checked == true){
        password.type = "text"
        confirmpassword.type = "text"
      } else {
        password.type = "password"
        confirmpassword.type = "password"
      }
}

let validaty = document.getElementById('validaty')
validaty.onclick =() =>{

    toggleinput()
}
