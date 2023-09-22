var intervalID;
var numeroAleatorio;
var inputTravado = false;
var tentativas = [];

function atualizarNumero() {
    numeroAleatorio = Math.floor(Math.random() * 101);
    document.getElementById("valor").textContent = numeroAleatorio;
}

function verificarPalpite() {
    var palpite = parseInt(document.getElementById("numAdv").value);
    var acertou = palpite === numeroAleatorio;


    if (acertou) {
        document.getElementById("mensagem").textContent = "Acertou!";
    } else {
        document.getElementById("mensagem").textContent = "Errou!";
    }

    tentativas.push({ palpite: palpite, acertou: acertou, sorteado: numeroAleatorio });

    atualizarListaTentativas();

    document.getElementById("numAdv").disabled = true;
    inputTravado = true;

    clearInterval(intervalID);
}

function atualizarListaTentativas() {
    var listaTentativas = document.getElementById("tentativas");
    listaTentativas.innerHTML = "";

    for (var i = 0; i < tentativas.length; i++) {
        var item = document.createElement("li");
        item.textContent = "Tentativa " + (i + 1) + ": Palpite: " + tentativas[i].palpite + ", Sorteado: " + tentativas[i].sorteado + " (" + (tentativas[i].acertou ? "Acertou" : "Errou") + ")";
        listaTentativas.appendChild(item);
    }
}

document.querySelector(".botao").addEventListener("click", function () {
    if (!inputTravado) {
        verificarPalpite();
    }
});

document.querySelector(".botao2").addEventListener("click", function () {
    document.getElementById("numAdv").disabled = false;
    inputTravado = false;
    document.getElementById("mensagem").textContent = "";

    document.getElementById("numAdv").value = "";

    atualizarNumero();
    atualizarListaTentativas();
    clearInterval(intervalID);
    intervalID = setInterval(atualizarNumero, 0);
});

document.getElementById("historico").addEventListener("click", function () {
    atualizarListaTentativas();
});




atualizarNumero();
intervalID = setInterval(atualizarNumero, 0);