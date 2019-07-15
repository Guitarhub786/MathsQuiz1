

var question = [
  {q:"1+1",a:2},
  {q:"2+2",a:4},
  {q:"4+4",a:8},
  {q:"3+5",a:7},
  {q:"7+4",a:11},
  {q:"8+7",a:15},
  
];
var qcount = 0;
var input = document.getElementById("myInput");

for (i = 0; i < question.length; i++) { 
  console.log (i, question[i].q,question[i].a);
  
  printq();
}


function printq(){
  document.getElementById("displayQuestion").innerHTML =qcount + " -- " + question[qcount].q;

  document.getElementById("myInput").focus();
  input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
  });

}

function checkanswer(){
  var answer = parseInt(document.getElementById("myInput").value);
  
  if(answer == question[qcount].a){
    document.getElementById("displayFeedback").innerHTML = qcount + " " + "correct!";
  }else{
    document.getElementById("displayFeedback").innerHTML = qcount + " " + "wrong!";
  }
  input.value = ""
  qcount++;
 // if (question.length < 2){
    printq();
  //}
  
}

function checkBtn(evt){
  if (evt == 'enter'){
    checkanswer();
  } else {
  document.getElementById("myInput").value += evt;
  document.getElementById("myInput").size = "90";
  }
}

function deleteBtn(){
  tmpString = document.getElementById("myInput").value
  tmpString = tmpString.slice(0, -1);
  document.getElementById("myInput").value = tmpString;

  var myString = '!thisIsMyString';
var sillyString = myString.slice(0,mySt.length - 1);
}