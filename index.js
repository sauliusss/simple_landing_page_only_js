// add header class
const header = document.createElement("div");
header.classList.add("header");
document.body.appendChild(header);
// add logo class
const logo = document.createElement("div");
logo.classList.add("logo");
document.querySelector("body").appendChild(logo);
header.append(logo);
logo.innerHTML = "new logo here";
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
