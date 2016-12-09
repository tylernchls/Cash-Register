var myCalc = calculatorModule();
var operator = true;
var mem1 = 0;
var mem2 = 0;
var add = false;
var subtract = false;
var multiply = false;
var division = false;


//display
var display = document.getElementById('display');

//one
var one = document.getElementById('1');
one.addEventListener('click', function(event){
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});


//two
var two = document.getElementById('2');
two.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});


//three
var three = document.getElementById('3');
three.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});


//four
var four = document.getElementById('4');
four.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});


//five
var five = document.getElementById('5');
five.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});


//six
var six = document.getElementById('6');
six.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});

//seven
var seven = document.getElementById('7');
seven.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});



//eight
var eight = document.getElementById('8');
eight.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
 if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});


//nine
var nine = document.getElementById('9');
nine.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});

//zero
var zero = document.getElementById('0');
zero.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
  if(operator){
    mem1 = myCalc.load(Number(display.value));
    console.log(mem1);
  }
  else{
  mem2 = myCalc.load(Number(display.value));
    console.log(mem2);
  }
});

//dubZero
var dubZero = document.getElementById('00');
dubZero.addEventListener('click', function(event){
  display.value += event.target.innerHTML;
});

//decimal
var decimal = document.getElementById('.');
decimal.addEventListener('click', function(event){
  console.log(event.target.innerHTML);
});


//addition
var addition = document.getElementById('+');
addition.addEventListener('click', function(){
    operator = false;
    display.value = '';
    add = true;
});


//subtraction
var minus = document.getElementById('-');
minus.addEventListener('click', function(event){
  console.log(event.target.innerHTML);
  operator = false;
  display.value = '';
  subtract = true;
});

//multiply
var x = document.getElementById('x');
x.addEventListener('click', function(event){
  console.log(event.target.innerHTML);
   operator = false;
    display.value = '';
    multiply = true;
});

//divide
var div = document.getElementById('÷');
div.addEventListener('click', function(event){
  display.value = "";
  operator = false;
  display.value = '';
  division = true;
});


//clear
var clear = document.getElementById('clear');
clear.addEventListener('click', function(event){
  display.value = "";
});


//get balance
var getBalance = document.getElementById('balance');
getBalance.addEventListener('click', function(event){
  console.log(event.target.innerHTML);
});


//depCash
var depCash = document.getElementById('deposit');
depCash.addEventListener('click', function(event){
  console.log(event.target.innerHTML);
});


//withdraw
var withDraw = document.getElementById('withdraw');
withdraw.addEventListener('click', function(event){
  console.log(event.target.innerHTML);
});


//equals
var equals = document.getElementById('=');
equals.addEventListener('click', function(event){
  if(add === true){

  myCalc.load(Number(mem1));
  console.log(myCalc.add(Number(mem2)));

  }

  else if(subtract === true) {

  myCalc.load(Number(mem1));
  console.log(myCalc.subtract(Number(mem2)));

  }

  else if(multiply === true){
  myCalc.load(Number(mem1));
  console.log(myCalc.multiply(Number(mem2)));

  }

  else if (division === true) {
  myCalc.load(Number(mem1));
  console.log(myCalc.divide(Number(mem2)));

  }
});





// //text field
// var text = document.getElementById('txtField');
// var createText = document.createElement('input');
// createText.id = "field";
// createText.setAttribute('type', 'text');
// createText.setAttribute('value', "");
// text.appendChild(createText);
// var display = document.getElementById('field');

// //buttons 0-9
// (function(){

// for (var i = 0; i <= 9; i++) {
//   var btnBox = document.getElementById('btnBox');
//   var  createBtn = document.createElement('button');
//   createBtn.innerHTML = i;
//   createBtn.addEventListener('click', function(event){
//     display.value +=1;
//   });
//   btnBox.appendChild(createBtn);
//   }
// })();

// //00 Button
// var dubZero = document.getElementById('dubZero');
// var createDubZero = document.createElement('button');
// createDubZero.id = "zero";
// createDubZero.innerHTML = "00";
// createDubZero.addEventListener('click', function(event){
//   display.value += display.value;
//   });
// dubZero.appendChild(createDubZero);

// //Period Button
// var period = document.getElementById('period');
// var createPeriod = document.createElement('button');
// createPeriod.innerHTML = ".";
// createPeriod.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// period.appendChild(createPeriod);


// //Division button
// var divide = document.getElementById('divide');
// var createDivide = document.createElement('button');
// createDivide.innerHTML = "÷";
// createDivide.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// divide.appendChild(createDivide);

// //Multiplication button
// var mult = document.getElementById('mult');
// var createMult = document.createElement('button');
// createMult.innerHTML = "x";
// createMult.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// mult.appendChild(createMult);

// //Subtract button
// var subtract = document.getElementById('subtract');
// var createSub = document.createElement('button');
// createSub.innerHTML = "-";
// createSub.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// subtract.appendChild(createSub);

// //Addition button
// var addition = document.getElementById('add');
// var createAdd = document.createElement('button');
// createAdd.innerHTML = "+";
// createAdd.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// addition.appendChild(createAdd);

// //Equal button
// var equal = document.getElementById('equal');
// var createEqual = document.createElement('button');
// createEqual.innerHTML = "=";
// createEqual.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// equal.appendChild(createEqual);

// //Clear button
// var clear = document.getElementById('clear');
// var createClear = document.createElement('button');
// createClear.innerHTML = "clear";
// createClear.addEventListener('click', function(event){
//     var field = document.getElementById('field')
//     field.value = 0;

//   });
// clear.appendChild(createClear);

// //Get balance button
// var balance = document.getElementById('balance');
// var createBalance = document.createElement('button');
// createBalance.innerHTML = "get balance";
// createBalance.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// balance.appendChild(createBalance);

// //Deposit Button
// var deposit = document.getElementById('deposit');
// var createDeposit = document.createElement('button');
// createDeposit.innerHTML = "deposit cash";
// createDeposit.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// deposit.appendChild(createDeposit);

// //Withdraw Button
// var withdraw = document.getElementById('withdraw');
// var createWithdraw = document.createElement('button');
// createWithdraw.innerHTML = "withdraw cash";
// createWithdraw.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//   });
// withdraw.appendChild(createWithdraw);