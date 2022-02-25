let d = document.querySelector('#négatif');
let d2 = document.querySelector('#négation');
let fumer = document.querySelector('#fumer');
let pipe = document.querySelector('#pipe');
var txt = document.querySelector('#titre');

function hide(){
  if(getComputedStyle(d).display != "none"){
    d.style.display = "none";
  }
};

function hide2(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  }
};

function fume(){
  if(getComputedStyle(fumer).display == "none" && txt.innerText == "Anti Magritte"){
    fumer.style.display = "block";
  }
};

function appa(){
  if(txt.innerText == "Magritte"){
  	txt.innerText = 'Anti Magritte';
  }
};

d.onclick = hide;
d2.onclick = hide2;
pipe.onclick = fume;
txt.onclick = appa;