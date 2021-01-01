document.getElementById("btn-2").addEventListener("click",()=>{
   var emailVal= document.getElementById("email").value
   var passwordVal= document.getElementById("password").value
   obj={}
   localStorage.setItem("login",JSON.stringify({email:emailVal,password:passwordVal}))
  
})