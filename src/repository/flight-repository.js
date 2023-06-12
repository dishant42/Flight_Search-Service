const {Flights}=require("../models/index")
const { Op } = require("sequelize");


class FlightRepository{

    #createfilter(data){
        let filter={};
        if(data.arrivalAirportID){
            // Object.assign(filter,)
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportID){
            // Object.assign(filter,)
            filter.departureAirportID = data.departureAirportID;
        }
        let priceFilter = [];
        if(data.minPrice) {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
        console.log(priceFilter);
        return filter;
    }
    


    async createFlight(data){
        try {
            const flight=await Flights.create(data)
            return flight;
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);
        }
    }

    async getFlight(flightID){
        try {
            const response=await Flights.findByPk(flightID);
            return response;
        } catch (error) {
            console.log("some error has occured in repository layer");
            throw (error);   
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createfilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports=FlightRepository;