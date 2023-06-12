const CrudService=require("./crud-service");
const{AirportRepository}=require("../repository/index");

class AirportService extends CrudService{
    constructor(){
        const Airportrepository=new AirportRepository;
        super(Airportrepository);
    }
}

module.exports=AirportService;