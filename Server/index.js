//imports
const express = require('express')
const cors = require('cors')
const apply = express();
const mysql = require('mysql2')

//Serviço de envio do material do front end para o back end e base de dados//

apply.use(express.json())
apply.use(cors()) //cross- compartilhamento de recursos origem (permite o conteúdo ir do backend para o front e vice-versa)

//conectando ao banco de dados local
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : , 
    database : 'sys'
})
// testando se o banco de dados foi conectado
db.connect((err) => {
    if(!err){
        console.log('Conectado ao banco de dados')
    }else{
        console.log('Erro ao conectar ao banco de dados')
    }
})


//posta o material do card no back end e dentro da tabela no mySQL
apply.post('/newTodo', (req, res) => {
    console.log(req.body);
    const q = 'insert into todos (newTodo, createdAt) values (?, ?)';
    db.query(q, [req.body.newTodo, new Date()], (err, results) => {
        if (err) {
            console.log("falha em armazenar newTodo");
        }else{
            console.log("newTodo armazenado com sucesso");
        }
        })
})

//pega da database e manda pro front
apply.get('/readTodo', (req, res) => {
    const q = 'select * from todos';
    db.query(q, (err, result) => {
        if(err){
            console.log("falha em carregar newTodo pro front");
    }
    else{
        console.log("sucesso em carregar newTodo pro front");
        res.send(result)
    }
})
})


//teste de log para ver se o server está ligado (joguei na porta 5000)
apply.listen(5000, () => {console.log('server started');
})