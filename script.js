let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")

function mudarVisual(cor, imagem){ // função
    tenis.classList.add("troca-efeito") // animação

    body.style.background = cor // altera a cor de fundo
 

    setTimeout(() => { // altera a imagem
        tenis.src = imagem // altera a imagem
        tenis.classList.remove("troca-efeito") // animação
    }, 500)

}
