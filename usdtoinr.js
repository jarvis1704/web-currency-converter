const usdinput=document.querySelector('#usdinput');
const inrinput=document.querySelector('#inrinput');
const resultArea=document.querySelector('.output');

//adding an event listener
usdinput.addEventListener('keyup', function(){
  if (usdinput.value){
    const result=eval(usdinput.value*80);
    console.log(result);
    resultArea.innerText=`INR ${result}`;
  }
})

//inrinput eventlistener
inrinput.addEventListener('keyup', function(){
  if (inrinput.value){
    const result=eval(inrinput.value/80);
    console.log(result);
    resultArea.innerText=`$ ${result}`;
  }
})

