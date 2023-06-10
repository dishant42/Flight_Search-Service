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


module.exports={
    create
}