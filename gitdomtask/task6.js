 
 //querySelector//
// alert('h');

var querySelector2=document.querySelector('#items > li:nth-child(2)');
querySelector2.style.backgroundColor ='green'
var querySelector2=document.querySelector('#items > li:nth-child(3)');
querySelector2.style.display ='none'
console.log(querySelector2);

 //querySelectorAll//

document.querySelectorAll('#items > li')[1].style.color ='green'

var item=document.querySelectorAll('.title');

var odd1=document.querySelectorAll('#items > li:nth-child(odd)');
console.log(odd1);

for(var i=0;i<odd1.length;i++){
    odd1[i].style.backgroundColor='green';//'#f4f4f4';
    }