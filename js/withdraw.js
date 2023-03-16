document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const newwithdrawInputAmountString=withdrawInput.value;
    const newwithdrawInputAmount=parseFloat(newwithdrawInputAmountString);
    withdrawInput.value='';
    if(isNaN(newwithdrawInputAmount)){
        alert('plz enter a number');
        return;
    }

    const withdrawTotal=document.getElementById('withdraw-total');
    const prevwithdrawTotalAmountString=withdrawTotal.innerText;
    const prevwithdrawTotalAmount=parseFloat(prevwithdrawTotalAmountString);

    
   

    
   const balanceTotal=document.getElementById('balance-total');
   const currentBalaneceTotalString=balanceTotal.innerText;
   const currentBalaneceTotal=parseFloat(currentBalaneceTotalString);
   if(newwithdrawInputAmount>currentBalaneceTotal){
    alert('baap er bank e eto tk nai');
    return;
   }
   const totalWithdraw=prevwithdrawTotalAmount+newwithdrawInputAmount;
   withdrawTotal.innerText=totalWithdraw;


   const currentTotalBalance=currentBalaneceTotal-newwithdrawInputAmount;
   balanceTotal.innerText=currentTotalBalance;
  

   







   
})