const express  = require ('express');
const app = express();
//criando as rotas
//rota raiz
app.get("/", function(req, res) {
    res.sendFile(__dirname+"/html/pag01.html");
});

//rota sobre
app.get("/sobre", function(req, res) {
    res.sendFile(__dirname+"/html/sobre.html");
});

//rota forum
app.get("/forum", function(req, res) {
    res.send(`
        <h1>Minha pagina forum</h1>
        <a href="/">Home</a><br>
        <a href="/sobre">Sobre</a>
    `);
});

//usando parametros na rota
app.get("/ola/:nome/:cargo/:situacao", function(req, res) {
    //req => dados enviados pelo usuario
    //res => resposta que vamos enviar para o usuario
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu cargo e: " + req.params.cargo + "</h2>" + "<h3>Situacao: " + req.params.situacao + "</h3>");
});

//criando o servidor
app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081");
});