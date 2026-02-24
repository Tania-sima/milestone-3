
let allChakri=document.getElementById('chakri');
let hidePage=document.getElementById('hide');
let all=document.getElementById('all');
let interview=document.getElementById('interview_btn');
let rejected=document.getElementById('rejected_btn');
let interviewPage=document.getElementsByClassName('job-details');
let del= document.querySelectorAll('.icon');

let total=0;
let total_reject= document.querySelector('.zero');
let sum =0;
let total_interview= document.querySelector('#zero');
let card_interview=document.querySelectorAll('.interview');

for(let card of card_interview){
card.addEventListener('click', function(){
   let apply=card.parentElement.querySelector('.applied');
    if(apply.innerText.trim() ==='INTERVIEW'){
      return;
    }
    else if(apply.innerText.trim() ==='REJECTED'){
      total--;
     total_reject.innerText=total; 
     }
   apply.innerHTML=card.innerHTML;
  apply.style.backgroundColor='rgb(202, 236, 194)';
  apply.style.color='green';
sum++;
total_interview.innerText=sum; 
   
});
}

let card_rejected=document.getElementsByClassName('rejected');
for(let reject of card_rejected){
reject.addEventListener('click', function(){
   let second_apply=reject.parentElement.querySelector('.applied'); 

   if(second_apply.innerText.trim() ==='REJECTED'){
    return;
   }
   if(second_apply.innerText.trim() ==='INTERVIEW'){
      sum--;
     total_interview.innerText=sum; 
     }
   
  second_apply.innerHTML=reject.innerHTML;
  second_apply.style.backgroundColor='rgb(239, 172, 154)';
  second_apply.style.color='red';
  total++;
total_reject.innerText=total;
   }
)};



 all.addEventListener('click',function(){
      allChakri.style.display='block';
     hidePage.style.display='none';
     all.style.backgroundColor='rgb(96, 146, 220)';
      interview.style.backgroundColor='white'
    rejected.style.backgroundColor='white';
     for(let page of interviewPage){
      page.style.display='block';
}
document.getElementById('number').innerText=interviewPage.length+ ' jobs';
    });

interview.addEventListener('click', function(){
   allChakri.style.display='block';
     hidePage.style.display='none';
 all.style.backgroundColor='white';
      interview.style.backgroundColor='rgb(96, 146, 220)'
    rejected.style.backgroundColor='white';
     for(let page of interviewPage){
  if(page.querySelector('.applied').innerText.trim() ==='INTERVIEW'){
   page.style.display='block';
}
else{
  page.style.display='none';
 
}
} 
if(sum===0){
  allChakri.style.display='none';
  hidePage.style.display='block';
}
document.getElementById('number').innerText=sum+' of '+interviewPage.length+ ' jobs';
 });

  


 rejected.addEventListener('click', function(){
      allChakri.style.display='block';
     hidePage.style.display='none';
     all.style.backgroundColor='white';
      interview.style.backgroundColor='white'
    rejected.style.backgroundColor='rgb(96, 146, 220)';
     let num=document.getElementById('number');
     num.innerText=total+'of'+ interviewPage.length+ 'jobs';
     for(let page of interviewPage){
  if(page.querySelector('.applied').innerText.trim() ==='REJECTED'){
   page.style.display='block';
}
else{
  page.style.display='none';
}
}  
if(total===0){
  allChakri.style.display='none';
  hidePage.style.display='block';
}
document.getElementById('number').innerText=total+' of '+interviewPage.length+ ' jobs';
    });
   

all.click();


for(let dlt of del){
dlt.addEventListener('click',function(event){
  event.stopPropagation();
  const trashh=event.currentTarget.parentElement.parentElement;
  const trash=trashh.querySelector('.applied');
  if(trash.innerText.trim()==='INTERVIEW'){
    sum--;
    total_interview.innerText=sum;
  }
  else if(trash.innerText.trim()==='REJECTED'){
    total--;
    total_reject.innerText=total;
  }
 trashh.remove();
 let notRemove= document.getElementsByClassName('job-details').length;
document.querySelector('.eight').innerText=notRemove;
document.getElementById('number').innerText=notRemove + ' jobs';
if(notRemove===0){
  allChakri.style.display='none';
  hidePage.style.display='block';
}
});
}
