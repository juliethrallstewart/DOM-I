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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav text content
let navLinks = document.querySelectorAll('nav a');
let navContent1 = navLinks[0].innerHTML = siteContent.nav["nav-item-1"];
let navContent2 = navLinks[1].innerHTML = siteContent.nav["nav-item-2"];
let navContent3 = navLinks[2].innerHTML = siteContent.nav["nav-item-3"];
let navContent4 = navLinks[3].innerHTML = siteContent.nav["nav-item-4"];
let navContent5 = navLinks[4].innerHTML = siteContent.nav["nav-item-5"];
let navContent6 = navLinks[5].innerHTML = siteContent.nav["nav-item-6"];
let navContent7 = navLinks[6] = logo;

console.log(navLinks[0].textContent)
navLinks.forEach(item => console.log(item.innerHTML))

// call to act content (cta)

let ctaHeadline = document.querySelector('.cta h1').textContent = siteContent.cta["h1"];

let ctaButton = document.querySelector('.cta-text button').textContent = siteContent.cta["button"]

let ctaImg = document.querySelector("#cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

// main content

// top content

let topContent = document.querySelector('.top-content').children;

// top content h4's
let topH4Feature = topContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"]
let topH4About = topContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"]

// top content text 

let topTextFeature = topContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"]
let topTextAbout = topContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"]


// top content middle image of code snippets across the screen

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content

let bottomContent = document.querySelector('.bottom-content').children;

// bottom content h4's
let bottomH4Services = bottomContent[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
let bottomH4Products = bottomContent[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
let bottomH4Vision = bottomContent[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];

// bottom content text 

let bottomTextServices = bottomContent[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];
let bottomTextProduct = bottomContent[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];
let bottomTextVision = bottomContent[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// contact section

let contact = document.querySelector(".contact").children;

let contactH4 = contact[0].textContent = siteContent["contact"]["contact-h4"];
let contactAddrs = contact[1].textContent = siteContent["contact"]["address"];
let contactPH = contact[2].textContent = siteContent["contact"]["phone"];
let contactEmail = contact[3].textContent = siteContent["contact"]["email"];


// footer 

let footer = document.querySelector('footer p').textContent = siteContent['footer']['copyright']