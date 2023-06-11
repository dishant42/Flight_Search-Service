const {flightservice}=require("../services/index")

const flightService=new flightservice();

const create=async(req,res)=>{
    try {
        const flight=await flightService.createflight(req.body);
        return res.status(201).json({
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
        return res.status(201).json({
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
        return res.status(200).json({
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