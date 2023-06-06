const express=require("express");
const bodyparser=require("body-parser");

const apiroutes=require("./routes/index");

const {PORT}=require("./config/ServerConfig");

const setupAndStartServer= async()=>{

    const app=express();

    app.use(bodyparser.json());  //json data is being parsed
    app.use(bodyparser.urlencoded({extended:true}));   //url encoded format data is being parsed


    app.use("/api",apiroutes);
    
    app.listen(PORT, async()=>{
        console.log(`server started at ${PORT}`);
        
        
    })
}

setupAndStartServer();

// // Create a new user
// const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);

// The User.create method is being called to create a new user object. The method is assumed to be asynchronous and returns a promise.
// The object being passed as an argument { firstName: "Jane", lastName: "Doe" } contains the properties for the new user, such as the first name and last name.