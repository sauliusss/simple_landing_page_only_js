// add header class
const header = document.createElement("div");
header.classList.add("header");
document.body.appendChild(header);
// add logo class
const logo = document.createElement("div");
logo.classList.add("logo");
document.querySelector("body").appendChild(logo);
logo.innerHTML = "new logo here";
header.append(logo);
