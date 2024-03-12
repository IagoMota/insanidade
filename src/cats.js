const catsAPI = "https://api.thecatapi.com/v1/images/search?limit=10"
const main = document.querySelector("main")
fetch(catsAPI)
    .then(response => response.json())
    .then(response =>
        response.forEach(picture => {
            const catPicture = document.createElement("img");
            catPicture.src = picture.url
            catPicture.classList.add("cat")
            main.appendChild(catPicture)
        })
    )