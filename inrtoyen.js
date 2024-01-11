const inrinput=document.querySelector('#inrinput');
const yeninput=document.querySelector('#yeninput');
const resultArea=document.querySelector('.output');

//adding an event listener
yeninput.addEventListener('keyup', function(){
  if (yeninput.value){
    const result=eval(yeninput.value*1.76);
    console.log(result);
    resultArea.innerText=`INR ${result}`;
  }
})

//inrinput eventlistener
inrinput.addEventListener('keyup', function(){
  if (inrinput.value){
    const result=eval(inrinput.value/1.76);
    console.log(result);
    resultArea.innerText=`Yen ${result}`;
  }
})