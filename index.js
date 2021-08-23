
// find all necessary variable
const cuponName=document.getElementById('cupon-code');
const memoryCost=document.getElementById('memory-value');
const storageCost=document.getElementById('storage-value');
const deliveryCost=document.getElementById('delivery-value');
const cuponText=document.getElementById('cupon');
const totalCost=document.getElementById('total');
const lastAmount = document.getElementById('final-amount');
// calculation/get extra memory cost 
function amountOfExtraMemory(cost){
    memoryCost.innerText=cost;  
}
//calculation/get all storage cost 
 function amountOfStorage(value){
     storageCost.innerText=value;

 }
//  calculation/get all delivery amount 
 function deliverOfCost(amount){
     deliveryCost.innerText=amount;
 }
 // calculation total amount
function totalUpdateValue()
{
   const amountOfExtraMemory=Number(memoryCost.innerText);
   const storageTotal=Number(storageCost.innerText);
   const deliveryTotal=Number(deliveryCost.innerText);
   total.innerText= amountOfExtraMemory +storageTotal+deliveryTotal+1299;
   lastAmount.innerText=total.innerText;
}
// calculation offer amount and using promo code 
function finalCost(){
    const offerAmount=total.innerText;
    const getOffer=offerAmount*.8;
    lastAmount.innerText=getOffer;
}
// using addEventListener dom 
document.getElementById('memory1').addEventListener('click',function(){
 amountOfExtraMemory(0);
    totalUpdateValue();
});
document.getElementById('memory2').addEventListener('click',function(){
    amountOfExtraMemory(180);
    totalUpdateValue();
});
document.getElementById('storage1').addEventListener('click',function(){
  amountOfStorage(0);
  totalUpdateValue();
});
document.getElementById('storage2').addEventListener('click',function(){      
    amountOfStorage(100);
  totalUpdateValue();
});
document.getElementById('storage3').addEventListener('click',function(){
    
    amountOfStorage(180);
  totalUpdateValue();
});
document.getElementById('delivery1').addEventListener('click',function(){
    deliverOfCost(0);
    totalUpdateValue();
});
document.getElementById('delivery2').addEventListener('click',function(){
    deliverOfCost(20);
    totalUpdateValue();
});
cuponName.addEventListener('click',function(){
    
 if(cuponText.value=='stevekaku'){
  finalCost();
  cuponText.value= '';
 }
 else{
    cuponText.value= '';
 }

});