const express = require("express");
const { getFlights, createFlight, deleteFlight, updateFlight } = require("../controllers/flight.js");
const router = express.Router();


router.get("/",getFlights)

router.post("/",createFlight)

router.put("/:id",updateFlight)

router.delete("/:id",deleteFlight)

module.exports = router;