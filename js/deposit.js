

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput=document.getElementById('deposit-input');
    const newdepositInputAmountString=depositInput.value;
   const newdepositInputAmount=parseFloat(newdepositInputAmountString);

   const depositTotal=document.getElementById('deposit-total');
   const prevDepositTotalAmountString=depositTotal.innerText;
   const prevDepositTotalAmount=parseFloat(prevDepositTotalAmountString);
   const currentDepositTotalAmount=prevDepositTotalAmount+newdepositInputAmount;
   depositTotal.innerText=currentDepositTotalAmount;
  const depositTotalInnerText=depositTotal.innerText;
  const depositTotalAmountNum=parseFloat(depositTotalInnerText);
   depositInput.value='';

  const balanceTotal=document.getElementById('balance-total');
  const currentBalaneceTotalString=balanceTotal.innerText;
  const currentBalaneceTotal=parseFloat(currentBalaneceTotalString);
  const currentTotalBalance=newdepositInputAmount+currentBalaneceTotal;
  balanceTotal.innerText=currentTotalBalance;
  



})
