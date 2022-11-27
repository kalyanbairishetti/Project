const flightData  = require("../models/flight")
const getFlights = async (req,res) =>{
    try {
        const allFlight = await flightData.find();
        res.status(200).json(allFlight);
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    };
}

const createFlight=  async(req,res) =>{
    const flight = req.body;
    const newFlight = new flightData(flight);
    try {
        await newFlight.save();
        res.status(201).json(newFlight);
    } catch (error) {
        res.status(404).json({message:error.message})
        
    };
}

const deleteFlight = (req,res) => {
    const id = req.params.id
    
    try {
        flightData.findByIdAndRemove(id).exec();
        res.send ('successfully Deleted');
       
    } catch (error) {
        console.log(error);
       
        
    };
}

const updateFlight = (req,res) =>{
    const id = req.params['id']

    const obj = req.body;

    flightData.findOneAndUpdate(
        {_id:id},
        {$set : obj},(err,result) => {
        if(err){
            res.send("Not updated")
        }else{
            res.send(result)
        }
    })
}

module.exports = {getFlights, createFlight,updateFlight, deleteFlight}