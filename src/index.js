import home from "./modules/home";
import nav from "./modules/nav";

const content = document.querySelector("#content");

document.body.insertBefore(nav(), content);
content.appendChild(home())



