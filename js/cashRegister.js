

(function () {
  var myCalc = calculatorModule();
  var isOperator = true;
  var memLocation1 = 0;
  var memLocation2 = 0;
  var isAdd = false;
  var isSubtract = false;
  var isMultiply = false;
  var isDivision = false;
  var clickedAgain = false;


  //display
  var display = document.getElementById('display');

  //update display function
  function updateDisplay (newDisplay){
    if(clickedAgain !== true) {
    display.value += newDisplay;
    } else {
      display.value = newDisplay;
    }
  }

  //adds to memory function
  function addToMemory (isOperator, displayValue){
    if(isOperator){
      memLocation1 = myCalc.load(Number(displayValue));
      console.log(memLocation1);
    }
    else {
      memLocation2 = myCalc.load(Number(displayValue));
      console.log(memLocation2);
    }
  }

  //one
  var one = document.getElementById('1');
  one.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });


  //two
  var two = document.getElementById('2');
  two.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });


  //three
  var three = document.getElementById('3');
  three.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });


  //four
  var four = document.getElementById('4');
  four.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });


  //five
  var five = document.getElementById('5');
  five.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });

  //six
  var six = document.getElementById('6');
  six.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });

  //seven
  var seven = document.getElementById('7');
  seven.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });

  //eight
  var eight = document.getElementById('8');
  eight.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });

  //nine
  var nine = document.getElementById('9');
  nine.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });

  //zero
  var zero = document.getElementById('0');
  zero.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });

  //dubZero
  var dubZero = document.getElementById('00');
  dubZero.addEventListener('click', function(event){
    updateDisplay(event.target.innerHTML);
    addToMemory(isOperator, display.value);
  });

  //decimal
  var decimal = document.getElementById('.');
  decimal.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });


  //addition
  var addition = document.getElementById('+');
  addition.addEventListener('click', function(event){
      isOperator = false;
      display.value = '';
      isAdd = true;

      clickedAgain = true;
      if (clickedAgain) {

      memLocation1 = memLocation1 + memLocation2;
      display.value = memLocation1;
      console.log(display.value);
      }
  });


  //subtraction
  var minus = document.getElementById('-');
  minus.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
    isOperator = false;
    display.value = '';
    isSubtract = true;


    clickedAgain = true;
    if (clickedAgain) {
      memLocation1 = memLocation1 - memLocation2;
      display.value = memLocation1;
      console.log(display.value);
      }
  });

  //multiply
  var x = document.getElementById('x');
  x.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
    isOperator = false;
    display.value = '';
    isMultiply = true;
  });

  //divide
  var div = document.getElementById('÷');
  div.addEventListener('click', function(event){
    isOperator = false;
    display.value = '';
    isDivision = true;
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
    if(isAdd === true){

    myCalc.load(Number(memLocation1));
    myCalc.add(Number(memLocation2));
    display.value = myCalc.getTotal();
    console.log(display.value);

    } else if(isSubtract === true) {

    myCalc.load(Number(memLocation1));
    display.value = myCalc.subtract(Number(memLocation2));
    console.log(display.value);

    } else if(isMultiply === true){

    myCalc.load(Number(memLocation1));
    display.value = myCalc.multiply(Number(memLocation2));
    console.log(display.value);

    } else if (isDivision === true) {

    myCalc.load(Number(memLocation1));
    display.value = myCalc.divide(Number(memLocation2));
    console.log(display.value);

    }
  });
})();




