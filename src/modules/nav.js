export default () => {
    let navDiv = document.createElement("div");
    navDiv.setAttribute("id", "nav");
    
    let homeBtn = document.createElement("input");
    homeBtn.setAttribute("type", "button");
    homeBtn.setAttribute("value", "Home");
    homeBtn.setAttribute("id", "home-btn");

    let menuBtn = document.createElement("input");
    menuBtn.setAttribute("type", "button");
    menuBtn.setAttribute("value", "Menu");
    menuBtn.setAttribute("id", "menu-btn");

    navDiv.append(homeBtn);
    navDiv.append(menuBtn);

    return navDiv
}