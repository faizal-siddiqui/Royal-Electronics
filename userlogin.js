function login(){
    
    var d=document.getElementById("email").value;
    
    var f=document.getElementById("pass").value;
    var x=localStorage.getItem("main_data");
    var data=JSON.parse(x);
    console.log(data.email)
    
       if(x==null){
        alert("please enter something")
       }else if(d==data.email&&f==data.password){
   
   }
       else{
        alert("please enter correct email,number,passowrd")
       }
    }