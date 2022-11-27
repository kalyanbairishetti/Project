const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightName : {
        type : String,
        require : true
    },
    seatingCapacity : {
        type : Number,
        require : true
    },
    fuelCapacity : {
        type : String,
        require : true
    },
    trips: {
        type : Number,
        require : true
    },
    stoppages: {
        type : String,
        require : true
    }
    
})

const flight= mongoose.model("flightData", flightSchema);

module.exports= flight