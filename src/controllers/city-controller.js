const {city_service}=require("../services/index");

const cityservice=new city_service();

const create=async(req,res)=>{
    try {
        const city=await cityservice.createcity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Succesfully created a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err:error
        })
        
    }
}

const destroy=async(req,res)=>{
    try {
        const response=await cityservice.deletecity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Succesfully deleted a city",
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete city",
            err:error
        });
        
    }
}

const get=async(req,res)=>{
    try {
        const response=await cityservice.getcity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Succesfully fetched a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err:error
        })
        
    }
}

// Patch->/city/:id->req.body
const update=async(req,res)=>{
    try {
        const response=await cityservice.updatecity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Succesfully updated a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update a city",
            err:error
        })
        
    }
}

const getallcities=async (req,res)=>{
    try {
        const cities=await cityservice.getallcities();
        return res.status(200).json({
            data:cities,
            success:true,
            message:"Succesfully updated a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err:error
        })
    }
}

module.exports={
    create,get,destroy,update,getallcities
}