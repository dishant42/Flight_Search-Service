// repository is for interatciong with model;

const { Op } = require("sequelize");

const { City } = require("../models/index")

class CityRepository {
    async createcity({ name }) {
        try {
            const city = await City.create({
                name: name
            });
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);
        }

    };   //name:name is same as name


    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    };

    async updatecity(cityID, data) {
        try {
            const city = await City.update( data,{        
                where: {                                    
                    id: cityID
                },

            })
            return city;
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);
        }
    };


    async getcity(cityID) {
        try {
            const city = await City.findByPk(cityID);
            return city;
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);
        }
    };

    async getallcities(filter){
        try {
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                        [Op.startsWith]: filter.name

                    }
                }
            })
            return cities;
            }
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);                                  
        }
    }

}

module.exports = CityRepository;

//The City.update method is called, indicating that an update operation should be performed on city model .If the update operation is successful, the city variable is   assigned the result of the update operation, which could be the number of affected rows or or any other relevant information
