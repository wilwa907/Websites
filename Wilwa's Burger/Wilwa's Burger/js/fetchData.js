export function getData(i) {
    return fetch('https://my-burger-api.herokuapp.com/burgers') // Get data
        .then(function (response) { // Do this first
            return response.json(); // Convert to JSON object and return
        })
        .then(function (data) { // Then, do this
            return {
                name: data[i].name,
                description: data[i].description,
                ingredients: data[i].ingredients
            };
        });
}
