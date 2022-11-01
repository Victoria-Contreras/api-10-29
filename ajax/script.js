const imageContainer = document.getElementById("image-container")

let imageUrl;

fetch("https://dog.ceo/api/breeds/image/random")
    .then(resultFromFetch => resultFromFetch.json()
        .then(resultFromJason => imageUrl = resultFromJason.message)
        .then(() => imageContainer.innerHTML = `<img src="${imageUrl}"><img>`));