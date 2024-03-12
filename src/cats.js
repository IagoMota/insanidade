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
                    //ficou muito massa isso kkkkkk


                    //Ja coloquei o miado KKKKKK é só clicar
            catPicture.addEventListener("click", ()=>{
                let snd = new Audio("../assets/sound.mp3")
                snd.play()
            })
        })
    )