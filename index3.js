const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//conexão com o bd mysql
const sequelize = new Sequelize('projeto1','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

//Configurando o motor de templates
//Esse main carrega as configurações do html5 nas outras paginas
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Configurando o body parser
const bodyParser = require('body-parser');
//usando o body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
//O metodo render só precisa do nome do arquivo do tipo handlebars
app.get('/cad', function(req,res){
    res.render('formulario');
});



//Quando o botão submit for clicado
//O metodo post manda para a rota /add
//informando que os dados foram enviados
app.post('/add', function(req,res){
    res.send('Titulo: '+req.body.titulo+"<br>"+' Conteudo: '+req.body.conteudo);
});

app.get('/formsoma', function(req,res){
    res.render('soma');
});

function funcSoma(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

app.post('/somar', function(req,res){
    res.send('Resultado: '+ funcSoma(req.body.num1, req.body.num2));
});

//O metodo listen é para ouvir a porta 8081
app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081');
});