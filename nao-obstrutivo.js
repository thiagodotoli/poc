var frase;

carregaFrase = (callback) => {
    setTimeout(function() {
        frase="minha frase";
        callback();
    }, 5000)  // 5 segundos
}

imprimeFrase = () => {
    console.log(frase);
}

carregaFrase(imprimeFrase);

console.log("ola");