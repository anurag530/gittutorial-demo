//traversing the dom//
var itemList=document.querySelector('#items');
//parentNode

 //console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNode

//console.log(itemList.childNodes);

// //children

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

 // //firstChild

 //console.log(itemList.firstChild);

//firstElementChild

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello 1';

// //lastChild

 //console.log(itemList.lastChild);
 
//lastElementChild

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='Hello 4';

//nextSibiling

//console.log(itemList.nextSibling);

//nextElementSibiling

//console.log(itemList.nextElementSibling);

//previousSibiling

//console.log(itemList.previousSibling);

//previousElementSibiling

//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createElement------

//create a div
var newDiv=document.createElement('div');

//add class

newDiv.className='hello';

//add id

newDiv.id='hello1';

//add attr

newDiv.setAttribute('title','hello div ji');


//create text node
var newDivText=document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);

//parentNode=document.getElementById('items');
//parentNode.innerHtml='hello world'+ parentNode.innerHtml;

var h1=document.querySelector('#items > li:nth-child(1)');
 
var container=document.querySelector('#items');
 
 
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("HEllo word"));
  li.setAttribute("class", "list-group-item"); // added line
  container.insertBefore(li,h1);
   