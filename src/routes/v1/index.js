const express=require("express");
const citycontroller=require("../../controllers/city-controller");
const flightcontroller=require("../../controllers/flight-controller");
const airportcontroller=require("../../controllers/airport-controller");
const router=express.Router();

router.post("/city",citycontroller.create);
router.delete("/city/:id",citycontroller.destroy);
router.patch("/city/:id",citycontroller.update);
router.get("/city/:id",citycontroller.get);
router.get("/city",citycontroller.getallcities);
router.post("/flight",flightcontroller.create);
router.get("/flight/:id",flightcontroller.getFlight);
router.get('/flights', flightcontroller.getAll);
router.post("/airport",airportcontroller.create);

module.exports=router;