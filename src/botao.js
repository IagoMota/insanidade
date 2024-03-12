const botaoMudarCor = document.getElementById("mudarCor");

botaoMudarCor.addEventListener("click", function() {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
});

function gerarCorAleatoria() {
    //Ta potente em mlk, show de bola, nem sabia que dava pra fazer isso com hex usando o Math()
    const letrasHex = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
}
