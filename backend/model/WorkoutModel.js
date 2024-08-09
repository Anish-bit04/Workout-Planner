const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},{timestamps:true})

const WorkoutModel = mongoose.model('Workouts',WorkoutSchema)

module.exports= WorkoutModel