const{AirportService}=require("../services/index");

const Airportservice=new AirportService();

const create=async(req,res)=>{
    try {
        const airport=await Airportservice.create(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Succesfully created a airport",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a airport",
            err:error
        })
        
    }
}

module.exports={
    create
}
