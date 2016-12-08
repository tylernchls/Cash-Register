var myCalc = calculatorModule();



(function(){

for (var i = 0; i <= 9; i++) {
  var btnBox = document.getElementById('btnBox');
  var  createBtn = document.createElement('button');
  createBtn.innerHTML = i;
  createBtn.id = i;
  createBtn.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
  });
  btnBox.appendChild(createBtn);
  }
})();




