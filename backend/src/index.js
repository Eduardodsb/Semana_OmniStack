const express = require('express'); //Importações 
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

//MongoDB (Banco não relacional) - Podemos hospedar o mesmo na nuvem.

mongoose.connect('mongodb+srv://Eduardo:omnistack@cluster0-6qv5y.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//permite que o express compreenda o formato json.
//.use configura todas as rotas da aplicação (ge, post, put ...)
app.use(express.json()) //express deve vir antes do routes.
app.use(routes);

app.listen(3333); //Define a porta da aplicação