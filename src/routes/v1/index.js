const express=require("express");
const citycontroller=require("../../controllers/city-controller");

const router=express.Router();

router.post("/city",citycontroller.create);
router.delete("/city/:id",citycontroller.destroy);
router.patch("/city/:id",citycontroller.update);
router.get("/city/:id",citycontroller.get);

module.exports=router;