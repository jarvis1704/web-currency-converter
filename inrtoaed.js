const inrinput=document.querySelector('#inrinput');
const aedinput=document.querySelector('#aedinput');
const resultArea=document.querySelector('.output');

//adding an event listener
aedinput.addEventListener('keyup', function(){
  if (aedinput.value){
    const result=eval(aedinput.value/0.044);
    console.log(result);
    resultArea.innerText=`INR ${result}`;
  }
})

//inrinput eventlistener
inrinput.addEventListener('keyup', function(){
  if (inrinput.value){
    const result=eval(inrinput.value*0.044);
    console.log(result);
    resultArea.innerText=`AED ${result}`;
  }
})