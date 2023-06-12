
const{client_errors}=require("../utils/error-code")
const validate_create_flight=(req,res,next)=>{
    if(
        !req.body.Flightnumber||
        !req.body.airplaneID||
        !req.body.departureAirportID||
        !req.body.arrivalAirportID||
        !req.body.arrivaltime||
        !req.body.departuretime||
        !req.body.price
        
    ){
        return res.status(client_errors.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"invalid request body for create flight",
            err:"missing mandatory properties to create a flight"
        });
    }

    next();
}

module.exports={
    validate_create_flight
}