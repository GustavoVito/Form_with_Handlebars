const express = require('express')
const agendamentos = require('./banco')
const app = express()
const handlebars = require('express-handlebars').engine

app.engine('handlebars', handlebars({defaultLayout: 'main'}))

app.set('view engine', 'handlebars')


app.get('/', function(req, res){
    res.render('cadastro')
})

app.get('/lista', function(req, res){
    res.render('lista')
})

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

/*app.get('/lista', function(req, res){
    res.send('Pagina de Cadastro')
})

app.get('/listar', function(req, res){
    res.send('Listas')
})*/