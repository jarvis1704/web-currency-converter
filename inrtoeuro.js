const inrinput=document.querySelector('#inrinput');
const euroinput=document.querySelector('#euroinput');
const resultArea=document.querySelector('.output');

//adding an event listener
euroinput.addEventListener('keyup', function(){
  if (euroinput.value){
    const result=eval(euroinput.value/0.011);
    console.log(result);
    resultArea.innerText=`INR ${result}`;
  }
})

//inrinput eventlistener
inrinput.addEventListener('keyup', function(){
  if (inrinput.value){
    const result=eval(inrinput.value*0.011);
    console.log(result);
    resultArea.innerText=`EURO ${result}`;
  }
})

