function login(){
    let a=document.getElementById("email").value;
    let b=document.getElementById("pass").value;
    let c=document.getElementById("name").value;
   for(i=0;i<b.length;i++){ 
if(document.getElementById("email").value==""||document.getElementById("pass").value==""||document.getElementById("name").value==""){
    alert("please enter someting")
}else{
let obj_data={
    email:a,
    password:b,
    name:c
}
localStorage.setItem("main_data",JSON.stringify(obj_data))

}
}}