const submitBtn=document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(){
   const userEmail=document.getElementById('user-email');
   const email=userEmail.value;
   const userPassword=document.getElementById('user-password');
   const password=userPassword.value;
   if(email=="sontan@bap.com"&& password=="eva"){
    window.location.href="bank.html";
   }
   else{
    alert('invalid user');
   }
})