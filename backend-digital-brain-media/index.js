const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');

let knex = require ('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'digitalbrain'
    }
})

const app = express();
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    next();
});


app.use(cors({credentials:true,origin:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(4000, function(){
    console.log('Server is running on port 4000')
});

app.post('/register', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.body,'0000000000000000000000000000000000')
    knex('register').insert({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }) 
    .then (() => {
        res.status(200).send({
            sucess: 'true',
            message: 'Add SuccessFully'
        })
    })
})