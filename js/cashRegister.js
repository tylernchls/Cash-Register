(function () {
  var myCalc = calculatorModule();
  var isOperator = true;
  var memLocation1 = 0;
  var memLocation2 = 0;
  var isAdd = false;
  var isSubtract = false;
  var isMultiply = false;
  var isDivision = false;


  //display
  var display = document.getElementById('display');

  //one
  var one = document.getElementById('1');
  one.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });


  //two
  var two = document.getElementById('2');
  two.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });


  //three
  var three = document.getElementById('3');
  three.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });


  //four
  var four = document.getElementById('4');
  four.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });


  //five
  var five = document.getElementById('5');
  five.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });


  //six
  var six = document.getElementById('6');
  six.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2= myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });

  //seven
  var seven = document.getElementById('7');
  seven.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });



  //eight
  var eight = document.getElementById('8');
  eight.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
   if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });


  //nine
  var nine = document.getElementById('9');
  nine.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
    }
  });

  //zero
  var zero = document.getElementById('0');
  zero.addEventListener('click', function(event){
    display.value += event.target.innerHTML;
    if(isOperator){
      memLocation1 = myCalc.load(Number(display.value));
      console.log(memLocation1);
    }
    else{
    memLocation2 = myCalc.load(Number(display.value));
      console.log(memLocation2);
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
  addition.addEventListener('click', function(event){
      isOperator = false;
      display.value = '';
      isAdd = true;
  });


  //subtraction
  var minus = document.getElementById('-');
  minus.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
    isOperator = false;
    display.value = '';
    isSubtract = true;
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




