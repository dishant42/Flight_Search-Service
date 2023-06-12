const {flightservice}=require("../services/index")

const flightService=new flightservice();
const {success_codes}=require("../utils/error-code")

const create=async(req,res)=>{
    try {
        const flightRequestdata={
            Flightnumber:req.body.Flightnumber,
            airplaneID:req.body.airplaneID,
            departureAirportID:req.body.departureAirportID,
            arrivalAirportID:req.body.arrivalAirportID,
            arrivaltime:req.body.arrivaltime,
            departuretime:req.body.departuretime,
            price:req.body.price
        }
        const flight=await flightService.createflight(flightRequestdata);
        return res.status(success_codes.CREATED).json({
            data:flight,
            success:true,
            message:"Succesfully created a flight",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a flight",
            err:error
        })
        
    }
}

const getFlight =async(req,res)=>{
    try {
        const flight=await flightService.getflight(req.params.id);
        return res.status(success_codes.CREATED).json({
            data:flight,
            success:true,
            message:"Succesfully created a flight",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a flight",
            err:error
        })
        
    }
}

const getAll = async (req, res) => {
    try {
        console.log(req.query);
        const response = await flightService.getAllFlightData(req.query);
        return res.status(success_codes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        });
    }
}


module.exports={
    create,getFlight,getAll
}