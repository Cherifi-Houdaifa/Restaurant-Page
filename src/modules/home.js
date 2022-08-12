/* <div class="home">
        <h1>Garantita</h1>
        <p><a href="https://fr.wikipedia.org/wiki/Garantita">Karantika</a> , also called garantiea , calentica , karantita , is an Algerian dish of Hispano-Oranian origin
            made with chickpea flour , having the appearance of a gratin or flan . Frequently sold by itinerant
            merchants in the big cities of Algeria , it is preferably eaten hot.</p>
        <img src="./karantika.jpg" alt="">
    </div>
*/

import img from "../karantika.jpg";

export default () => {
    let homediv = document.createElement("div");
    homediv.setAttribute("id", "home")

    let header = document.createElement("h1");
    header.textContent = "Garantita";

    let container = document.createElement("div");

    let p = document.createElement("p");
    let link = document.createElement("a");
    link.setAttribute("href", "https://fr.wikipedia.org/wiki/Garantita");
    link.textContent = "Karantika";
    p.appendChild(link);
    p.append(" , also called garantiea , calentica , karantita , is an Algerian dish of Hispano-Oranian origin made with chickpea flour , having the appearance of a gratin or flan . Frequently sold by itinerant merchants in the big cities of Algeria , it is preferably eaten hot.");

    let image = document.createElement("img");
    image.src = img;

    container.appendChild(p);
    container.appendChild(image);

    homediv.appendChild(header);
    homediv.appendChild(container);

    return homediv;
}