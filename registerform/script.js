


document.getElementById("Registration").addEventListener("submit",function validation(e){   
    e.preventDefault();
   var name= document.getElementById("userName").value;
   var email= document.getElementById("email").value;
   var phoneNumber= document.getElementById("phoneNumber").value;
   var password= document.getElementById("password").value;
   var c_password= document.getElementById("Confirm-password").value;

   document.querySelectorAll(".error").forEach(ele => ele.innerHTML = "");
 
   if(name===""){ 
       document.getElementById("nameError").innerHTML="Name is Required";
   }

   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
   if(email=== ""){
     document.getElementById("emailError").innerHTML="Email is Required";
   }
   else if(!emailPattern.test(email)){
     document.getElementById("emailError").innerHTML="Email should be correct format"; 
   }
   
   if(phoneNumber===""){
     document.getElementById("PhoneError").innerHTML="Number is Required";
   }
   else if(phoneNumber.length!==10){
     document.getElementById("PhoneError").innerHTML="Number length should be 10 digits";
   }

   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/;
   if(password===""){
      document.getElementById("PasswordError").innerHTML="Password is Required";
   }
   else if(password.length<6 || password.length>15){
      document.getElementById("PasswordError").innerHTML="Password should be at least 6 characters";
   }
   else if(!passwordRegex.test(password)){
      document.getElementById("PasswordError").innerHTML="Password should contain alpha-numeric values , with at least one special symbol";
   }
   
   if( c_password===""){
     document.getElementById("confirmPassword").innerHTML="confirm-Password is Required";
   }
   else if(c_password!==password){
    document.getElementById("confirmPassword").innerHTML="confirmPassword should match password";
   }


 alert(`Name : ${name}
        Email : ${email}
        Phone-Number : ${phoneNumber}
        Password : ${password}`);
});

