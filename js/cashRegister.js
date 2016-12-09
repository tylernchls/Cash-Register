(function () {
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
    myCalc.add(Number(mem2));
    display.value = myCalc.getTotal();
    console.log(myCalc.saveMemory());

    }

    else if(subtract === true) {

    myCalc.load(Number(mem1));
    display.value = myCalc.subtract(Number(mem2));
    console.log(display.value);

    }

    else if(multiply === true){
    myCalc.load(Number(mem1));
    display.value = myCalc.multiply(Number(mem2));
    console.log(display.value);

    }

    else if (division === true) {
    myCalc.load(Number(mem1));
    display.value = myCalc.divide(Number(mem2));
    console.log(display.value);

    }
  });
})();




