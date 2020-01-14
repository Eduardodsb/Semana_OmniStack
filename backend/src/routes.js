 const {Router} = require('express');
 const DevController = require('./controllers/DevController');
 const SearchController = require('./controllers/SearchController');

 const routes = Router();

 routes.get('/devs', DevController.index);
 routes.post('/devs', DevController.store); // Define uma rota da aplicação.

 routes.get('/search', SearchController.index);

module.exports =  routes; //Exporta as rotas definida nesse arquivo.