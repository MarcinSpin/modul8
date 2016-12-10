function checkOnclickEvent(param) {
  console.log(param);
}
var list = document.getElementById('Lista')
    add = document.getElementById('addElem');


addElem.addEventListener('click', function(e) {
  list.innerHTML += '<li>item</li>' 
});

var itemsByTagName = document.getElementsByTagName('li');

console.log(itemsByTagName);
