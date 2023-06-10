const { Flightrepository, Airplanerepository } = require("../repository/index");
const {cmptime}=require("../utils/helper");
class FlightService {

    /* we will be getting
        flight-number
        airplane id,
        departureairportid,
        arrivalairportid,
        arrivaltime
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
}

module.exports=FlightService;
