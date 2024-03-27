const db = require('./banco')

const Agendamentos = db.sequelize.define('Agendamentos',{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data_contato:{
        type: db.Sequelize.STRING
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

//Agendamentos.sync({force: true})

module.exports = Agendamentos
