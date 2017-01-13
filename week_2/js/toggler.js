function Toggler(selector) {
  this.elem = document.querySelector(selector);

Toggler.prototype.getElem = function(){
  return this.elem;
};
Toggler.prototype.show = function(){
  this.elem.style.display = "";
};
Toggler.prototype.hide = function(){
  this.elem.style.display = "none";
};

(function(){

var elem = new Toggler(".section");
var button = document.querySelector(".button");

elem.hide();

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
        button.textContent = button.dataset.hide;
    } else {
        elem.hide();
        button.textContent = button.dataset.show;
    }

}, false);

}) ();
