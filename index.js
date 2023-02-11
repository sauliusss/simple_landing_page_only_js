// add container class
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
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
homeLink.setAttribute("href", "#");
storiesLink.setAttribute("href", "#");
libraryLink.setAttribute("href", "#");
getStartedLink.setAttribute("href", "#");
// add to nav
nav.append(homeLink);
nav.append(storiesLink);
nav.append(libraryLink);
nav.append(getStartedLink);
// add element name
homeLink.innerHTML = "Home";
storiesLink.innerHTML = "Stories";
libraryLink.innerHTML = "Library";
getStartedLink.innerHTML = "Get Started";
// add style to container
container.style.border = "150px solid black";
// add style to header
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.padding = "0 150px";
// add style to logoSection
logoSection.style.display = "flex";
// add style to logo
logo.style.fontSize = "30px";
logo.style.fontWeight = "900";
logo.style.color = "blue";
logo.style.padding = "10px 20px";
logo.style.border = "1px solid blue";
logo.style.borderRadius = "15px";
// add style to logoRight

// add style to nav
homeLink.style.margin = "0 50px 0 0";
storiesLink.style.margin = "0 50px 0 0";
libraryLink.style.margin = "0 50px 0 0";
getStartedLink.style.margin = "0 50px 0 0";

homeLink.style.textDecoration = "none";
storiesLink.style.textDecoration = "none";
libraryLink.style.textDecoration = "none";
getStartedLink.style.textDecoration = "none";

homeLink.style.color = "black";
homeLink.style.fontWeight = "900";
storiesLink.style.color = "black";
libraryLink.style.color = "black";
getStartedLink.style.color = "white";
getStartedLink.style.fontWeight = "900";
// nav last child style
getStartedLink.style.padding = "10px 20px";
getStartedLink.style.backgroundColor = "blue";
getStartedLink.style.border = "none";
