import {getData} from "./fetchData.js";

let specialBurger = document.getElementById('specialBurger');
specialBurger.addEventListener('mouseover', ButtonHovered)

// Function that executes when the image is hovered
function ButtonHovered() {
    let randomInt;

    let storedDate = localStorage.getItem("randomIntDate");
    const currentDate = new Date().toDateString();

     // Check if the storedDate matches the currentDate
    if (storedDate === currentDate) {
        randomInt = parseInt(localStorage.getItem("randomInt"));
    } 
    else {
        randomInt = getRandomInt(0, 27);
        localStorage.setItem("randomInt", randomInt);
        localStorage.setItem("randomIntDate", currentDate);
    }

    getData(randomInt).then(data => {
        const headline = document.createElement('p');
        const burgerName = document.createElement('p');
        const burgerDescription = document.createElement('p');
        const ingredientsHeadline = document.createElement('p');
        const ingredientsDescription = document.createElement('p');

        const infoContainer = document.getElementById('back-content');

        headline.innerText = 'Burger of the Day:'; // Headline text
        headline.id = 'headline'; // ID for CSS styling
        burgerName.id = 'burgerNameID';
        burgerDescription.id = 'burgerdescriptionID';

        ingredientsHeadline.innerText = 'Ingredients:'; // Headline text
        ingredientsHeadline.id = 'ingredientsheadline'; // ID for CSS styling
        ingredientsDescription.id = 'ingredientsdescriptionID';

        burgerName.innerText = data.name;
        burgerDescription.innerText = data.description;
        ingredientsDescription.innerText = data.ingredients;

        infoContainer.appendChild(headline);
        infoContainer.appendChild(burgerName);
        infoContainer.appendChild(burgerDescription);
        infoContainer.appendChild(ingredientsHeadline);
        infoContainer.appendChild(ingredientsDescription);
    });
}

// Function that creates a random int number 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
