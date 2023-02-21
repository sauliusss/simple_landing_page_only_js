// add container class
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
// header section start >>>>>>>>>>>>>>>>>>>>>
// add header class
const header = document.createElement("div");
header.classList.add("header");
container.appendChild(header);
// logo section
const logoSection = document.createElement("div");
logoSection.classList.add("logoSection");
header.appendChild(logoSection);
// add logo class
const logo = document.createElement("div");
logo.classList.add("logo");
document.querySelector("body").appendChild(logo);
logoSection.append(logo);
logo.innerHTML = "F";
// add logoRight class
const logoRight = document.createElement("div");
logoRight.classList.add("logoRight");
logoSection.append(logoRight);
// add logoRightText
const logoRightText = document.createElement("div");
logoRight.append(logoRightText);
logoRightText.innerHTML = "Foundation";
// add logoRightText2
const logoRightText2 = document.createElement("div");
logoRight.append(logoRightText2);
logoRightText2.innerHTML = "Startup landing template";
// add nav class
const nav = document.createElement("div");
nav.classList.add("nav");
header.append(nav);
// add links in nav

const homeLink = document.createElement("a");
const storiesLink = document.createElement("a");
const libraryLink = document.createElement("a");
const getStartedLink = document.createElement("a");

// set attributes
const array = [homeLink, storiesLink, libraryLink, getStartedLink];
for (let i = 0; i < array.length; i++) {
  console.log(array[0].setAttribute("href", "#"));
}
// homeLink.setAttribute("href", "#");
// storiesLink.setAttribute("href", "#");
// libraryLink.setAttribute("href", "#");
// getStartedLink.setAttribute("href", "#");

// add to nav
for (let i = 0; i < array.length; i++) {
  console.log(nav.append(array[i]));
}
// nav.append(homeLink);
// nav.append(storiesLink);
// nav.append(libraryLink);
// nav.append(getStartedLink);
// // add element name
homeLink.innerHTML = "Home";
storiesLink.innerHTML = "Stories";
libraryLink.innerHTML = "Library";
getStartedLink.innerHTML = "Get Started";
// add style to container
container.style.margin = "200px 150px";
container.style.border = "150px solid #3c1c57";
// add style to header
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.padding = " 50px 50px 0 150px";
header.style.backgroundColor = "#f3c7bd";

// add style to logoSection
logoSection.style.display = "flex";
// add style to logo
logo.style.fontSize = "30px";
logo.style.fontWeight = "900";
logo.style.color = "#3e44c8";
logo.style.backgroundColor = "white";
logo.style.padding = "10px 20px";
logo.style.border = "1px solid blue";
logo.style.borderRadius = "15px";
// add style to logoRight
logoRight.style.margin = "5px 0 0 12px";
// add style to logoRightText
logoRightText.style.fontSize = "22px";
logoRightText.style.fontWeight = "900";
// add style to logoRightText2
logoRightText2.style.fontSize = "18px";
logoRightText2.style.color = "#a8857f";
// add style to nav
// add style to homeLink
const marg = [homeLink, storiesLink, libraryLink, getStartedLink];
for (let i = 0; i < array.length; i++) {
  console.log((marg[i].style.margin = "5px 50px 0 0"));
}
for (let i = 0; i < array.length; i++) {
  console.log((marg[i].style.textDecoration = "none"));
}
for (let i = 0; i < array.length; i++) {
  console.log((marg[i].style.fontSize = "20px"));
}
for (let i = 0; i < array.length - 1; i++) {
  console.log((marg[i].style.color = "black"));
}

// homeLink.style.margin = "5px 50px 0 0";
// homeLink.style.textDecoration = "none";
// homeLink.style.fontSize = "20px";
homeLink.style.fontWeight = "900";
// homeLink.style.color = "black";
// add style to storiesLink
// storiesLink.style.margin = "5px 50px 0 0";
// storiesLink.style.textDecoration = "none";
// storiesLink.style.fontSize = "20px";
// storiesLink.style.color = "black";
// add style to libraryLink
// libraryLink.style.margin = "5px 50px 0 0";
// libraryLink.style.textDecoration = "none";
// libraryLink.style.fontSize = "20px";
// libraryLink.style.color = "black";
// add style to getStartedLink
// getStartedLink.style.margin = "5px 50px 0 0";
// getStartedLink.style.textDecoration = "none";
getStartedLink.style.fontWeight = "900";
getStartedLink.style.color = "white";
// getStartedLink style
getStartedLink.style.padding = "10px 20px";
// getStartedLink.style.fontSize = "20px";
getStartedLink.style.backgroundColor = "#2f40c6";
getStartedLink.style.border = "none";
// header section end >>>>>>>>>>>>>>>>>>>>>

// hero section start >>>>>>>>>>>>>>>>>>>>>
// hero class add
const hero = document.createElement("div");
hero.classList.add("hero");
container.append(hero);
// hero imgAndText class
const imgAndText = document.createElement("div");
imgAndText.classList.add("imgAndText");
hero.append(imgAndText);
// hero texts class
const texts = document.createElement("div");
texts.classList.add("texts");
imgAndText.append(texts);
// hero text
const heroText = document.createElement("div");
texts.append(heroText);
heroText.innerHTML = "Build stunning websites &amp; apps.";
// hero text2
const heroText2 = document.createElement("div");
texts.append(heroText2);
heroText2.innerHTML = "Creative live segments and target the right people for messages based on their behaviors.";
// hero img
const img = document.createElement("img");
img.setAttribute("src", "./img/pokemon.png");
img.setAttribute("alt", "pokemon");
imgAndText.append(img);
// hero buttons
const heroButtons = document.createElement("div");
heroButtons.classList.add("heroButons");
const heroButton = document.createElement("div");
heroButton.innerHTML = "Get Started";
const heroButton2 = document.createElement("div");
heroButton2.innerHTML = "Learn More";
hero.append(heroButtons);
heroButtons.append(heroButton);
heroButtons.append(heroButton2);
// hero class style
hero.style.height = "800px";
hero.style.backgroundColor = "#f3c7bd";
// imgAndText style
imgAndText.style.display = "flex";
imgAndText.style.width = "100%";
// hero text style
heroText.style.maxWidth = "10em";
heroText.style.padding = "100px 0 0 150px";
heroText.style.fontSize = "80px";
heroText.style.fontWeight = "900";
// hero text2 style
heroText2.style.maxWidth = "16em";
heroText2.style.padding = "70px 0 0 150px";
heroText2.style.fontSize = "25px";
heroText2.style.fontWeight = "400";
heroText2.style.lineHeight = "1.5";
// hero img style
img.style.padding = "100px 50px 0 0";
// hero buttons style
heroButtons.style.display = "flex";
heroButtons.style.margin = "50px 0 0 0 ";
// heroButton style
const btn = [heroButton, heroButton2];
for (let i = 0; i < btn.length; i++) {
  console.log((btn[i].style.padding = "10px 20px"));
}
for (let i = 0; i < btn.length; i++) {
  console.log((btn[i].style.fontSize = "22px"));
}
for (let i = 0; i < btn.length; i++) {
  console.log((btn[i].style.textAlign = "center"));
}
for (let i = 0; i < btn.length; i++) {
  console.log((btn[i].style.fontWeight = "900"));
}

for (let i = 0; i < btn.length; i++) {
  console.log((btn[i].style.border = "none"));
}

for (let i = 0; i < btn.length; i++) {
  console.log((btn[i].style.cursor = "pointer"));
}

heroButton.style.margin = "0 0 20px 150px";
// heroButton.style.padding = "10px 20px";
// heroButton.style.fontSize = "22px";
// heroButton.style.textAlign = "center";
// heroButton.style.fontWeight = "900";
heroButton.style.backgroundColor = "#2f40c6";
heroButton.style.color = "white";
// heroButton.style.border = "none";
// heroButton.style.cursor = "pointer";
// heroButton2 style
heroButton2.style.margin = "0 0 20px 40px";
// heroButton2.style.padding = "10px 20px";
// heroButton2.style.fontSize = "22px";
// heroButton2.style.textAlign = "center";
// heroButton2.style.fontWeight = "900";
heroButton2.style.backgroundColor = "white";
heroButton2.style.color = "#2f40c6";
// heroButton2.style.border = "none";
// heroButton2.style.cursor = "pointer";
