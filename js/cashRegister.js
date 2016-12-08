var myCalc = calculatorModule();
console.log(myCalc);

var addbtn = document.getElementById("add");
var add = document.createElement("button");
add.innerHTML = "add";
addbtn.appendChild(add);