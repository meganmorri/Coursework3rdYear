const nameInput = document.querySelector('#input-lbl');
const pressedBtn = document.querySelector('#btn-press');
const outputText = document.querySelector('#output-lbl')


pressedBtn.addEventListener('click', updateLabel);


function updateLabel(){
    const inputText = nameInput.value;
    

    console.log(inputText);

    outputText.textContent = "Hello " + inputText + "! Welcome back.";
   
}
