function sumNumbers(){
var number_01=
  document.getElementById("number1").value
var number_02=  document.getElementById("number2").value

var answer =(parseInt(number_01) + parseInt(number_02))

document.getElementById('sum').innerHTML = answer

}

function subtractNumbers(){
  var number_01=
  document.getElementById("number1").value
var number_02=  document.getElementById("number2").value

var answer3 =(parseInt(number_01) - parseInt(number_02))

document.getElementById('difference').innerHTML = answer3
}

function multiplyNumbers(){

var number_03=
  document.getElementById("number3").value
var number_04=  document.getElementById("number4").value
   
var answer2 =(parseInt(number_03) * parseInt(number_04))

document.getElementById('product').innerHTML = answer2

}

function divideNumbers(){
  var number_01=
  document.getElementById("number1").value
var number_02=  document.getElementById("number2").value

var answer4 =(parseInt(number_03) / parseInt(number_04))

document.getElementById('quotient').innerHTML = answer4
}
