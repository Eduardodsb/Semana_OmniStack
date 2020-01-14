const express = require('express');
const mongoose = require('mongoose');

const app = express();

//MongoDB (Banco não relacional) - Podemos hospedar o mesmo na nuvem.

mongoose.connect('mongodb+srv://Eduardo:omnistack@cluster0-6qv5y.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//permite que o express compreenda o formato json.
app.use(express.json()) //.use configura todas as rotas da aplicação (ge, post, put ...)

/*Principais métodos HTTP utilizados serão:
- GET (Buscar informação)
- POST (Inserir informação)
- PUT (Editar informação)
- DELETE (Deletar informação)
*/

/*Tipos de parâmetros:
- Query Params (Utilizado com o get): request.query (Filtros, ordenação, paginação, ...)
- Route Params (Utilizado com o put e o delete): request.params (Identificar um recurso na alteração ou remoção)
- Body (Utilizado com o post e o put): request.body (Dados para criação ou alteração de um registro)
*/

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({message: 'Hello BBosa'});
}); // Define uma rota da aplicação.

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({message: 'Hello BBosa'});
}); // Define uma rota da aplicação.

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello BBosa'});
}); // Define uma rota da aplicação.


app.listen(3333); //Define a porta da aplicação