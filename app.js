// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName('li');
for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}
// Click on a close button to hide the current list item
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = 'none';
  }
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('myInput').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUl').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = 'none';
    }
  }
}