const botoes = document.querySelectorAll("article button"); // acrescentei o article

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado(){
       let texto = botao.querySelector("span");
       if (curtiu === false){
        texto.textContent++;
        curtiu = true;
       } else {
        texto.textContent--;
        curtiu = false;
       }
    }
});