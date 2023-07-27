import {createDomElement} from "./domInteractions.js"

class MajaApp{

   /* */
    constructor(){
        this.initializeApp();
    }
     initializeApp(){
        this.connectDomElements();
        this.setupListenners();
        this.renderFAQ();


     }
     connectDomElements = () =>{
    this.menu = document.getElementById("menu");
    this.header = document.getElementById("header");
    this.menuLineTop = document.getElementById("menuLineTop");
    this.menuLineMiddle = document.getElementById("menuLineMiddle");
    this.menuLineBottom = document.getElementById("menuLineBottom");
    this.navbar = document.getElementById("navbar");
    this.logo = document.getElementById("logo");
    this.main = document.getElementById("main");
    this.menuWrapper = document.getElementById("menuWrapper")
    this.navAboutMe = document.getElementById("navAboutMe");
    this.navHowWorks = document.getElementById("navHowWorks");
    this.navHome = document.getElementById("navHome");
    this.navPriceList = document.getElementById("navPriceList");
    this.priceList = document.getElementById("priceList");
    this.navFaq = document.getElementById("navFaq");
    this.faq = document.getElementById("Faq");
    this.home = document.getElementById("home");
    this.navContact = document.getElementById("navContact");
    this.contact = document.getElementById("contact");
    this.aboutMe = document.getElementById("aboutMe");
    this.howWorks = document.getElementById("howWorks");
    this.faqBoxWrapper = document.getElementById("faqBoxWrapper");
    this.button = document.getElementById("button");
    }
    setupListenners = () =>{
    this.menu.addEventListener("click", ()=>{
        this.header.classList.toggle('active');
        this.menuLineTop.classList.toggle('menu-active');
        this.menuLineMiddle.classList.toggle('menu-active');
        this.menuLineBottom.classList.toggle('menu-active');
       this.navbar.classList.toggle('hidde');
        this.logo.classList.toggle('hidde-logo');
        this.menuWrapper.classList.toggle("menu-wrapper-active");

    })
    this.navAboutMe.addEventListener("click",()=>{
        this.removeActiveNav();
        this.aboutMe.scrollIntoView({behavior: "smooth"});
    })
    this.navHowWorks.addEventListener("click",()=>{
        this.removeActiveNav();
        this.howWorks.scrollIntoView({behavior: "smooth"});
    })
    this.navHome.addEventListener("click",()=>{
        this.removeActiveNav();
        this.howWorks.scrollIntoView({behavior: "smooth"});
    })
    this.navPriceList.addEventListener("click",()=>{
        this.removeActiveNav();
        this.priceList.scrollIntoView({behavior: "smooth"});
    })
    this.navFaq.addEventListener("click",()=>{
        this.removeActiveNav();
        this.faq.scrollIntoView({behavior: "smooth"});
    })
    this.navContact.addEventListener("click",()=>{
        this.removeActiveNav();
        this.contact.scrollIntoView({behavior: "smooth"});
    })
    this.button.addEventListener("click",()=>{
        
        this.contact.scrollIntoView({behavior: "smooth"});
     
    }

    )


}

    removeActiveNav = () =>{
        this.header.classList.remove('active');
        this.menuLineTop.classList.remove('menu-active');
        this.menuLineMiddle.classList.remove('menu-active');
        this.menuLineBottom.classList.remove('menu-active');
       this.navbar.classList.add('hidde');
        this.logo.classList.remove('hidde-logo');
        this.menuWrapper.classList.remove("menu-wrapper-active");
    }

    renderFAQ = async () =>{
        
        this.arrayFaq = await this.getData();

      for(let faq of this.arrayFaq.faq){
             //console.log(faq.answer);

             this.createFaqBox(faq);
        }

    }
    
    getData = () => fetch('src/pytania.json').then(response => response.json());
    
    createFaqBox = (faq) => {

        const faqGreenBox = createDomElement('div', "faq-green-box", null, null);
        const faqBoxQuestion = createDomElement('div', "faq-box-question", null, null);
        const question = createDomElement('p', null, faq.question, null);
        const faqArrowButton = createDomElement('div', "faq-arrow-button", null, null);
        const faqArrowImg = createDomElement('img', "faq-arrow-button", null, "assets/Arrow bottom.svg" );
        const faqBoxAnswer = createDomElement('div', "faq-box-answer", null, null);
        const blackLine = createDomElement('div', "black-line", null, null);
        const answer = createDomElement('p', null, faq.answer, null);

        faqArrowButton.appendChild(faqArrowImg);
        
        faqBoxQuestion.appendChild(question);
        faqBoxQuestion.appendChild(faqArrowButton);

        faqBoxAnswer.appendChild(blackLine);
        faqBoxAnswer.appendChild(answer);

        faqGreenBox.appendChild(faqBoxQuestion);
        faqGreenBox.appendChild(faqBoxAnswer);
        this.faqBoxWrapper.appendChild(faqGreenBox);

        faqArrowButton.addEventListener("click", () =>{
            const currentSrc = faqArrowImg.getAttribute("src");
            console.log(currentSrc);
            console.log("hi");
           
            if (currentSrc === "assets/Arrow bottom.svg") {
              faqArrowImg.src = "assets/Arrow top.svg";
            } else {
              faqArrowImg.src = "assets/Arrow bottom.svg";
            }
        
            faqBoxAnswer.classList.toggle("faq-box-answer");
            faqGreenBox.classList.toggle("faq-green-box-active");

        }
        )

    }
}

document.addEventListener("DOMContentLoaded", new MajaApp());