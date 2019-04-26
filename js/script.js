var anchor = document.querySelector('a');
console.log(anchor);
var allAnchors = document.querySelectorAll('a');
console.log(allAnchors);

allAnchors[1].textContent = 'This text is set from JS using DOM manipulation.';
allAnchors[1].href = 'https://www.google.com';
allAnchors[1].target = 'blank';

var para1 = document.getElementById('para-1');
console.log(para1);
var para1UsingSelector = document.querySelector('#para-1');
console.log(para1UsingSelector);
para1.style.color = 'orange';

var btn = document.getElementsByClassName('button');
console.log(btn[0]);
var btnUsingSelector = document.querySelector('.button');
console.log(btnUsingSelector);
btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';