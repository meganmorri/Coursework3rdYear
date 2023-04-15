
customElements.define('page-one', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="tertiary">
            <ion-title position="center">
                Homepage! 
            </ion-title>
        </ion-toolbar>
       
    </ion-header>

<ion-content id="content-output">
  <ion-card>
    <ion-card-header>
      <ion-card-title color="tertiary">GET POLITICAL</ion-card-title>
      <ion-card-subtitle color="secondary">What our app does</ion-card-subtitle>
  
    </ion-card-header>
  
    <ion-card-content>
        Hello! Welcome to Get Political, we are so glad you have decided to join us on educating the world on the recent social troubles we are facing.
        Our app will let you choose a topic each day that you can read about and see all the latest news and headlines that interest you. We also have a donation page where you
        can donate to organisations that need it the most.
    </ion-card-content>
  </ion-card>
  
  
  <img src="homepage3.jfif" alt="homepagelogo" width="350" height="150"> 
  
    
  
  <ion-card>
    <ion-card-header>
      <ion-card-title color="tertiary">OUR AIM</ion-card-title>
      <ion-card-subtitle color="secondary">why we created this app</ion-card-subtitle>
    </ion-card-header>
   
    <ion-card-content>
            Get Political is a vital part of throwing away the stigma around conversations about the environmental and social issues we face everyday in the world. 
            If we start educating today, we can hold the dsicussion tommorrow and each day after, to help everyone around you learn new things and grow their knowledge.
    </ion-card-content>
  </ion-card>
  </ion-content>
            <ion-footer>
                <ion-button expand="block" href="#/two">Click to Begin Educating</ion-button>
            </ion-footer>
        `;

        const scriptTag = document.createElement('script');
        scriptTag.src = 'homepage.js';
        document.head.appendChild(scriptTag);
    }
});

customElements.define('page-two', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="tertiary">
            <ion-title position="center">
                Educate Today! 
            </ion-title>
        
        <ion-buttons>
        <ion-back-button></ion-back-button>
    </ion-buttons>
    </ion-toolbar>
      </ion-header>
       
      
    <ion-content >    
 <ion-item>

  <ion-segment value="Topics">
    <ion-segment-button id="btn-environment">
    <ion-label color="primary">Environment</ion-label>
  </ion-segment-button>
  <ion-segment-button id="btn-politics">
    <ion-label color="primary">Politics</ion-label>
  </ion-segment-button>
  <ion-segment-button id="btn-socialMedia">
    <ion-label color="primary">Social Media</ion-label>
  </ion-segment-button>
  <ion-segment-button id="btn-feminism">
    <ion-label color="primary">Feminism</ion-label>
  </ion-segment-button>
  </ion-segment>
 </ion-item>

<ion-item>
  <ion-card>
    <ion-card-subtitle color="tertiary">
      <ion-label id="lbl-output"></ion-label>
</ion-card-subtitle>
<ion-card-content>
  <ion-text id="text-output"></ion-text>
</ion-card-content>
</ion-card>

</ion-item>
<ion-img src="environment.jfif" alt="environment" width="100" height="100" position="center"></ion-img>


</ion-content>

            <ion-footer>
                <ion-button expand="block"  href="#/three">View my account</ion-button>
            </ion-footer>

            <style>
  ion-img {
  width: 50%;
  height: 50%;
  position:absolute;
  left:0;
  right:0;
  margin:0 auto;
  
  
}

    ion-title{
        text-align: center;
    }

</style>
        `;
        const scriptTag = document.createElement('script');
        scriptTag.src = 'educational.js';
        document.head.appendChild(scriptTag);
    }
});

customElements.define('page-three', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="tertiary">
        
            <ion-title >
                My Profile 
            </ion-title>
            
       
        <ion-buttons>
        <ion-back-button></ion-back-button>
    </ion-buttons>
    </ion-toolbar>
      </ion-header>

      <ion-content>
        
       <ion-card>
        <ion-card-title color="tertiary">Login</ion-card-title>
        
            <ion-item>
                <ion-label position="floating">Enter your name</ion-label>
                
                <ion-input type="text" id="input-lbl"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Enter your password</ion-label>
                <ion-input type="password" ></ion-input>
              </ion-item>
             
              <ion-button fill="outline" id="btn-press">Click Here</ion-button>
              <ion-item>
                <ion-label id="output-lbl"></ion-label>
              </ion-item>
            </ion-card>


            <ion-card>
                <ion-card-subtitle color="tertiary">Settings</ion-card-subtitle>
                <ion-card-content>
                  
                    <ion-list>
                      <ion-item>
                        <ion-label position="stacked">Full Name</ion-label>
                        <ion-input placeholder="Enter text"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="stacked">Email Address</ion-label>
                        
                         <ion-input placeholder="Enter text"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="stacked">Age</ion-label>
                         <ion-input placeholder="Enter text"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="stacked">Current Topic</ion-label>
                         <ion-input placeholder="Enter text"></ion-input>
                      </ion-item>
                      
                    </ion-list>
                  
                </ion-card-content>
                 
            </ion-card>
            
      
                
            </ion-content>
            <ion-footer>
            <ion-button expand="block" href="#/four">Todays News</ion-button>
            </ion-footer>


            <style>
  ion-img{
    width: 100px;
    height: 100px;
  left:0;
  right:0;
  margin:0 auto;
  }
 
  ion-title{
  
   text-align: center;
  }
  ion-card-title{
  
  text-align: center;
 }
 ion-card-subtitle{
  
  text-align: center;
 }

</style>
        `;
        const scriptTag = document.createElement('script');
        scriptTag.src = 'account.js';
        document.head.appendChild(scriptTag);
    }
});

customElements.define('page-four', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="tertiary">
            <ion-title position="center">
                World News! 
            </ion-title>
        <ion-buttons>
        <ion-back-button></ion-back-button>
    </ion-buttons>

    </ion-toolbar>
      </ion-header>
        <ion-card>
        <ion-card-title>Top Headlines</ion-card-title>
      </ion-card>
      
        <ion-card>
        <ion-card-content>
        
        <iframe src="./worldsnewstoday.html" width="100%" height="500" frameBorder="0"></iframe>
        </ion-card-content>
        </ion-card> 
        </ion-content>
        
        <ion-footer>
        <ion-button expand="block"  href="#/">Go back to HomePage</ion-button>
           </footer>
        `;
        const scriptTag = document.createElement('script');
        scriptTag.src = 'worldsnewstoday.js';
        document.head.appendChild(scriptTag);
    }
});