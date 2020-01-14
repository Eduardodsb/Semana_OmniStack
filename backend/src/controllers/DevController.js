const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//Controller geralmente possui 5 funções: index, show, store, update, destroy


module.exports = {

    async index(request, response){
        const devs = await  Dev.find();

        return response.json(devs);       
    },


    async store(request, response){
        const {github_username, techs, latitude, longitude} = request.body;
    
        let dev = await Dev.findOne({github_username});

        if(!dev){
            //await faz com que espere o retorno na api responder antes de retornar. 
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);//OBS: Ao utilizar crases no lugar de aspas, podemos utilizar váriaveis com a string. 
        
            const {name = login, avatar_url, bio} = apiResponse.data //"name = login" Uma forma de definir um nome padrão, caso o campo name não exista. 
        
            const techsArray =  parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
            github_username, //Equivalente a github_username: github_username
            name,      //Equivalente a name: name. obs: podemos encurtar por terem o mesmo nome. 
            avatar_url,
            bio,
            techs: techsArray,
            location,
            });

        }
        
        return response.json(dev);

    }
}