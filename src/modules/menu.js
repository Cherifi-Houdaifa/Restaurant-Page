export default () => {
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu");

    let title = document.createElement("h1");
    title.textContent = "Garantita";

    let descriptionTitle = document.createElement("h2");
    descriptionTitle.textContent = "Description";

    let description = document.createElement("p");
    description.textContent = "Karantika is the most famous food in algeria, If you ever visited algeria make sure to try it.";

    let priceTitle = document.createElement("h2");
    priceTitle.textContent = "Price";

    let price = document.createElement("p");
    price.textContent = "Karantika has a reasonable price which anyone can afford it.";

    let recipe = document.createElement("a");
    recipe.textContent = "Check Recipe Here";
    recipe.setAttribute("href", "https://youtu.be/nN2LnYnmkfI");
 
    menuDiv.appendChild(title);
    menuDiv.appendChild(descriptionTitle);
    menuDiv.appendChild(description);
    menuDiv.appendChild(priceTitle);
    menuDiv.appendChild(price);
    menuDiv.appendChild(recipe);
    
    return menuDiv;
}