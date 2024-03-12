const nigga = document.querySelector("#nigga")
const cadeirante = document.querySelector(".img-cadeirante")


cadeirante.addEventListener("click", () => {
    const img = document.querySelector(".img-cadeirante img")
    img.src = "../assets/wheelchair-fall.gif"
    let snd = new Audio("../assets/sound3.mp3")
    
    setTimeout(() => {
        snd.play()
    }, 500);
    setTimeout(() => {
        img.src = "https://institutogiorgionicoli.org.br/wp-content/uploads/2022/08/cadeirante-forte-980x551.jpg"
    }, 1800);
})

nigga.addEventListener("click", () => {
    let snd = new Audio("../assets/sound2.mp3")
    snd.play()
})