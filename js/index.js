const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

////HEADER AND UPPER SECTION
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Add titles to the Nav
const navigationLinks = document.querySelectorAll("nav a")

const navLinksText = [];

for (const property in siteContent.nav) {
  if (property.includes("nav")) {
    navLinksText.push(siteContent.nav[property])
  }
}

navLinksText.forEach ((text,idx)=> {
  navigationLinks[idx].innerHTML = text
})


//add the h1
const title = document.querySelector("h1");
title.innerHTML = siteContent.cta.h1;

//add the top section button
const topButton = document.querySelector("button");
topButton.textContent = siteContent.cta.button;

//add the top section image
const topImage = document.getElementById("cta-img");
topImage.src = siteContent["cta"]["img-src"]


////MIDDLE SECTION: MAIN CONTENT
//Do the titles
const middleTitles = document.querySelectorAll(".main-content h4");
const middleTitlesText = [];

for (const property in siteContent["main-content"]) {
  if (property.includes("h4")) {
    middleTitlesText.push(siteContent["main-content"][property])
  }
}

middleTitlesText.forEach ((text,idx)=> {
  middleTitles[idx].innerHTML = text
})

//Do the paragraph text under each title
const middlePs = document.querySelectorAll(".main-content p");
const middlePsText = [];

for (const property in siteContent["main-content"]) {
  if (property.includes("content")) {
    middlePsText.push(siteContent["main-content"][property])
  }
}

middlePsText.forEach ((text,idx)=> {
  middlePs[idx].innerHTML = text
})

//Do the middle section image
const middleimage = document.getElementById("middle-img")
middleimage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

////DO THE CONTACT SECTION
//add the title
const contactHeader = document.querySelector(".contact h4")
contactHeader.textContent=siteContent.contact["contact-h4"]

//Add the paragpraphs
const contactPs = document.querySelectorAll(".contact p")
const contactPsText = [];

for (const property in siteContent["contact"]) {
  if (property.includes("h4")) {
    contactHeader.textContent=siteContent.contact[property]
  } else {
    contactPsText.push(siteContent.contact[property])
  }
}

contactPsText.forEach((text,idx)=> {
  contactPs[idx].textContent=text
})

////DO THE FOOTER
const footerContent = document.querySelector("footer")

footerContent.textContent=siteContent.footer.copyright;