var myCalc = calculatorModule();

//text field
var text = document.getElementById('txtField');
var createText = document.createElement('input');
createText.id = "field";
createText.setAttribute('type', 'text');
createText.setAttribute('value', 0);
text.appendChild(createText);


//buttons 0-9
(function(){

for (var i = 0; i <= 9; i++) {
  var btnBox = document.getElementById('btnBox');
  var  createBtn = document.createElement('button');
  createBtn.innerHTML = i;
  createBtn.id = i;
  createBtn.addEventListener('click', function(event){
    var field = document.getElementById('field')
    field.value = event.target.innerHTML;
  });
  btnBox.appendChild(createBtn);
  }
})();

//00 Button
var dubZero = document.getElementById('dubZero');
var createDubZero = document.createElement('button');
createDubZero.id = "zero";
createDubZero.innerHTML = "00";
createDubZero.addEventListener('click', function(event){
  var field = document.getElementById('field')
  field.value = event.target.innerHTML;
  });
dubZero.appendChild(createDubZero);

//Period Button
var period = document.getElementById('period');
var createPeriod = document.createElement('button');
createPeriod.innerHTML = ".";
createPeriod.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
period.appendChild(createPeriod);


//Division button
var divide = document.getElementById('divide');
var createDivide = document.createElement('button');
createDivide.innerHTML = "÷";
createDivide.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
divide.appendChild(createDivide);

//Multiplication button
var mult = document.getElementById('mult');
var createMult = document.createElement('button');
createMult.innerHTML = "x";
createMult.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
mult.appendChild(createMult);

//Subtract button
var subtract = document.getElementById('subtract');
var createSub = document.createElement('button');
createSub.innerHTML = "-";
createSub.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
subtract.appendChild(createSub);

//Addition button
var addition = document.getElementById('add');
var createAdd = document.createElement('button');
createAdd.innerHTML = "+";
createAdd.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
addition.appendChild(createAdd);

//Equal button
var equal = document.getElementById('equal');
var createEqual = document.createElement('button');
createEqual.innerHTML = "=";
createEqual.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
equal.appendChild(createEqual);

//Clear button
var clear = document.getElementById('clear');
var createClear = document.createElement('button');
createClear.innerHTML = "clear";
createClear.addEventListener('click', function(event){
    var field = document.getElementById('field')
    field.value = 0;

  });
clear.appendChild(createClear);

//Get balance button
var balance = document.getElementById('balance');
var createBalance = document.createElement('button');
createBalance.innerHTML = "get balance";
createBalance.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
balance.appendChild(createBalance);

//Deposit Button
var deposit = document.getElementById('deposit');
var createDeposit = document.createElement('button');
createDeposit.innerHTML = "deposit cash";
createDeposit.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
deposit.appendChild(createDeposit);

//Withdraw Button
var withdraw = document.getElementById('withdraw');
var createWithdraw = document.createElement('button');
createWithdraw.innerHTML = "withdraw cash";
createWithdraw.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
withdraw.appendChild(createWithdraw);