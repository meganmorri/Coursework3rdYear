const environmentButton = document.querySelector('#btn-environment');
const politicsButton = document.querySelector('#btn-politics');
const socialMediaButton = document.querySelector('#btn-socialMedia');
const feminismButton = document.querySelector('#btn-feminism');
const displayLabel = document.querySelector('#lbl-output');
const displayText = document.querySelector('#text-output');


let topics = "";
let information = "";



environmentButton.addEventListener('click', assignEnvironmentInfo);
politicsButton.addEventListener('click', assignPoliticsInfo);
socialMediaButton.addEventListener('click', assignSocialMediaInfo);
feminismButton.addEventListener('click', assignFeminismInfo);

function assignEnvironmentInfo(){
    topics = "Environment";
    information = "The last time carbon dioxide levels on our planet were as high as today was more than 4 million years ago. Increased emissions of greenhouse gases have led to a rapid and steady increase in global temperatures, which in turn is causing catastrophic events all over the world."
    updateLabel();
    updateText();
   
}

function assignPoliticsInfo(){
    topics = "Politics";
    information = "Wednesday 15 March was a historic day of strikes in both the United Kingdom and France. For France it was the eighth day of protests against reforms that would raise the retirement age from 62 to 64."
    updateLabel();
    updateText();
   
}

function assignSocialMediaInfo(){
    topics = "Social Media";
    information = "Some of the issues with social media today are the concentration of power by a few corporations, the spread of misinformation and extremism, and the impact on privacy, democracy, and mental health. There are also different perspectives on the benefits and harms of social media for creativity and community."
    updateLabel();
    updateText();
   
}

function assignFeminismInfo(){
    topics = "Feminism";
    information = "A day after the inauguration of US President Donald Trump, millions around the world joined the 2017 Women's March. A key aim was to highlight women's rights, which many believed to be under threat."
    updateLabel();
    updateText();
   
}


function updateLabel(){
    let output = `Thank you for choosing ${topics}`;
    console.log(output);
    displayLabel.textContent = output;
}

function updateText(){
    let output = `This is what we found - ${information}`;
    console.log(output);
    displayText.textContent = output;
}