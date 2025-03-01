const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto1','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

//Criando uma tabela postagem
const Postagem = sequelize.define('postagens',{
    //Criando um campo título
    titulo:{
        //O tipo STRING tem um limite de 255 caracteres
        type: Sequelize.STRING
    },
     //O tipo TEXT é ilimitado no tamanho
     conteudo:{
        type:Sequelize.TEXT
     }
});
//sinconiza com o banco de dados
// Postagem.sync({force: true}); //force: true força a criação da tabela

//Criando a tabela usuario
const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});
//sinconiza com o banco de dados
// Usuario.sync({force: true}); //force: true força a criação da tabela

//inserindo dados na tabela
Usuario.create({
    nome: 'Mario',
    sobrenome: 'Jesus',
    idade: 33,
    email: 'analista@gamil.com'
});