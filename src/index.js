import home from "./modules/home";
import nav from "./modules/nav";
import menu from "./modules/menu";
import "./styles/style.css";

const content = document.querySelector("#content");
document.body.insertBefore(nav(), content);
content.appendChild(home())

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(home())
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu())
});