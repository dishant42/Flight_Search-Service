const express=require("express");
const bodyparser=require("body-parser");


const {PORT}=require("./config/ServerConfig");

const setupAndStartServer= async()=>{

    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT, async()=>{
        console.log(`server started at ${PORT}`);
        
        
    })
}

setupAndStartServer();

// // Create a new user
// const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);