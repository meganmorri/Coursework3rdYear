const environmentButton = document.querySelector('#btn-environment');
const politicsButton = document.querySelector('#btn-politics');
const socialMediaButton = document.querySelector('#btn-socialMedia');
const feminismButton = document.querySelector('#btn-feminism');
const displayLabel = document.querySelector('#lbl-output');

let topics = "";


environmentButton.addEventListener('click', assignEnvironmentInfo);
politicsButton.addEventListener('click', assignPoliticsInfo);
socialMediaButton.addEventListener('click', assignSocialMediaInfo);
feminismButton.addEventListener('click', assignFeminismInfo);

function assignEnvironmentInfo(){
    topics = "Environment";
    
    updateLabel();
}

function assignPoliticsInfo(){
    topics = "Politics";
    
    updateLabel();
}

function assignSocialMediaInfo(){
    topics = "Social Media";
    
    updateLabel();
}

function assignFeminismInfo(){
    topics = "Feminism";
    
    updateLabel();
}


function updateLabel(){
    let output = `Thank you for choosing ${topics}`;
    console.log(output);
    displayLabel.textContent = output;
}