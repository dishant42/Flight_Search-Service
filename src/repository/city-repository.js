// repository is for interatciong with model;

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


    async destroycity({ cityID }) {
        try {
            await City.destroy({
                where: {
                    id: cityID
                }
            });

        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);
        }

    };

    async updatecity(cityID, data) {
        try {
            const city = await City.update({      //The City.update method is called, indicating that an 
                //update operation should be performed on city model
                where: {                         //If the update operation is successful, the city variable is   assigned the result of the update operation, which could be the number of affected rows or or any other relevant information.
                    id: cityID
                }

            })
            return city;
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);
        }
    };


    async getcity(cityID) {
        try {
            const city = await City.findByPK(cityID);
            return city;
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);
        }
    };

}

module.exports = CityRepository;