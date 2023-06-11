const { Flightrepository, Airplanerepository } = require("../repository/index");
const {cmptime}=require("../utils/helper");
class FlightService {

    /* we will be getting
        flight-number
        airplane id,
        departureairportid,
        arrivalairportid,
        arrivaltimer
        departuretime
        price
        total-seats ->fetch from airplane */

    constructor() {
        this.airplanerepository = new Airplanerepository();
        this.flightRepository = new Flightrepository();
    }
        

   
    async createflight(data) {
        try {

            if(!cmptime(data.arrivaltime,data.departuretime)){
                throw{
                    error:"arrival time cannot be before departure time"
                }
            }
            const airplane = await this.airplanerepository.getAirplane(data.airplaneID);
            const flight = await this.flightRepository.createFlight({ ...data, totalseats: airplane.capacity })
            return flight;
        } catch (error) {
            console.log("something error has occurred in service layer");
            throw { error }
        }
    }

    async getflight(flightID){
        try {
            const response=await this.flightRepository.getFlight(flightID);
            return response;
        } catch (error) {
            console.log("something error has occurred in service layer");
            throw { error }
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports=FlightService;
