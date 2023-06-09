const express=require("express");
const bodyparser=require("body-parser");

const apiroutes=require("./routes/index");

const {PORT}=require("./config/ServerConfig");
const db=require("./models/index");

const {City,Airport}=require("./models/index");

const setupAndStartServer= async()=>{

    const app=express();

    app.use(bodyparser.json());  //json data is being parsed
    app.use(bodyparser.urlencoded({extended:true}));   //url encoded format data is being parsed


    app.use("/api",apiroutes);
    
    app.listen(PORT, async()=>{
        console.log(`server started at ${PORT}`);
        // const city=await City.findOne({
            //     where:{
                //         id:14
                //     }
        // }
        // )
        // const airport=await city.getAirports();
        // console.log(city);
        // console.log(airport);

        // const resultjoinquery=await City.findAll({
        //     include:{
        //         model:Airport,
        //         required:true},

        //     where:{
        //         id:14
        //     }
        // })
        // console.log(JSON.stringify(resultjoinquery,null,2));
        
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter:true});
              
        // }
    })
}

setupAndStartServer();

// // Create a new user
// const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);

// The User.create method is being called to create a new user object. The method is assumed to be asynchronous and returns a promise.
// The object being passed as an argument { firstName: "Jane", lastName: "Doe" } contains the properties for the new user, such as the first name and last name.