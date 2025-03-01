const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto1','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

//then é uma função de callback
//ela é executada quando algum evento acontece
//que é a sequelize.authenticate()
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!');
}).catch(function(erro){
    console.log('Falha ao se conectar: '+erro);
});