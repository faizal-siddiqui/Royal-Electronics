

let loginform = document.getElementById("form")
loginform.onsubmit = (event) => {
    event.preventDefault()
    check_loginData()
}

function check_loginData(){
    let email = loginform.email.value;
    let password = loginform.password.value;

    let userdata = JSON.parse(localStorage.getItem("user_data"))
   
    if((userdata.email == email) && (userdata.password == password)){
        alert(`Hello! ${userdata.firstname + " " + userdata.Lastname} You are successfully logined`)

        localStorage.setItem("userName", JSON.stringify(userdata.firstname + " " + userdata.Lastname))
        loginform.reset()
        window.location.href = "index.html"
    } else{
        alert("Your E mail and Password is incorrect")
    }
}





// pASSWORD

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


