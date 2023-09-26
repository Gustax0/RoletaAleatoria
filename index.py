from flask import Flask
import webbrowser

app = Flask(__name__)

@app.route("/")
def hello_world():
    return """
        <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/static/styles/style.css">
    <title>Roleta Aleatória</title>
</head>

<body>
    <div class="topnav">
        <div class="nav-links">
            <a class="active" href="#home">Home</a>
            <a class="aboutus">About me</a>
            <a class="cassino">Cassinos</a>
            <a class="esportes">Esportes</a>
        </div>
    </div>
    </div>
    <div class="usuario">
        <input class="input-field" type="number" id="numAdv" placeholder="Digite seu palpite">
        <br>
        <button class="botao">Faça seu palpite</button>
        <br>
        <a id="historico"></a>
        <br>
        <p class="numero" id="numeroAleatorio">Número Aleatório: <span id="valor">0</span></p>

        <p class="texto2" id="mensagem"></p>
        <br>
        <button class="botao2">Tentar Novamente</button>
    </div>

    <div class="tent">
        <ul id="tentativas"></ul>
    </div>

    <script src="/static/scripts/script.js"></script>
</body>

</html>
    """

if __name__ == "__main__":
    webbrowser.open_new_tab('http://127.0.0.1:5000/')
    app.run()
# noobpro was here.
