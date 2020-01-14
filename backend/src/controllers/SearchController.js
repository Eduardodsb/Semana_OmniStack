const Dev =  require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        //Buscar todos os devs num raio de 10km e filtrar por tecnologia.
        const {latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs:{
                $in: techsArray, //In é um operador lógico do mongo. 
            },
            location:{
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates:[longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            },
        });
        return response.json({devs});
    }
}