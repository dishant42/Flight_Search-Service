const express=require("express");
const citycontroller=require("../../controllers/city-controller");
const flightcontroller=require("../../controllers/flight-controller");
const airportcontroller=require("../../controllers/airport-controller");

const{flightmiddleware}=require("../../middlewares/index");

const router=express.Router();

// routes for city
router.post("/city",citycontroller.create);
router.delete("/city/:id",citycontroller.destroy);
router.patch("/city/:id",citycontroller.update);
router.get("/city/:id",citycontroller.get);
router.get("/city",citycontroller.getallcities);

// routes for flights
router.post("/flight",flightmiddleware.validate_create_flight,flightcontroller.create);
router.get("/flight/:id",flightcontroller.getFlight);
router.get('/flights', flightcontroller.getAll);
router.patch("/flight/:id",flightcontroller.updateflight);

// routes for airports
router.post("/airport",airportcontroller.create);

module.exports=router;