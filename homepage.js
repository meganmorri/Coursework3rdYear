const homeButton = document.querySelector('#btn-home');
const accountButton = document.querySelector('#btn-account');
const educateButton = document.querySelector('#btn-educate');
const worldNewsButton = document.querySelector('#btn-worldNews');
const displayLabel = document.querySelector('#lbl-output');
const displayContent = document.querySelector('#content-output');

let page = "";
let content = "";

homeButton.addEventListener('click', assignHomeContent);
accountButton.addEventListener('click', assignAccountContent);
educateButton.addEventListener('click', assignEducateContent);
worldNewsButton.addEventListener('click', assignWorldNewsContent);
 
function assignHomeContent(){
  page = "Home";
 
  updateLabel();
 
 
}

function assignEducateContent(){
  page = "Educate";
 
  updateLabel();
  
 
}

function assignAccountContent(){
  page = "Account";
  updateLabel();
  
 
}

function assignWorldNewsContent(){
  page = "World News";
  updateLabel();
 
}

function updateLabel(){
  let output = `${page}`;
  console.log(output);
  displayLabel.textContent = output;
}








        
