const Sequelize = require('sequelize')
const sequelize = new Sequelize('dsm','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Banco ativo!!')
}).catch(function(erro){
    console.log('falha ao conectar no banco: ' + erro)
})

const agendamentos = sequelize.define('agendamentos',{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})

//agendamentos.sync({force: true})

module.exports = agendamentos