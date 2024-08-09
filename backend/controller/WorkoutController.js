const WorkoutModel = require('../model/WorkoutModel')
const mongoose = require('mongoose')

// get all workout
const getWorkout = async(req,res)=>{
const workout = await WorkoutModel.find({}).sort({createdAt:-1})
res.status(200).json(workout)

}

//get single workout 
const getWorkoutById = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'No such workout woth given id'})
    }

    const workout = await WorkoutModel.findById({_id:id})
    if(!workout){
        res.status(404).json({error: 'No workout with given id available'})
    }
    res.status(200).json(workout)
}


//post 
const createWorkout = async (req,res)=>{
    const {title,reps,load} = req.body;
    try{
        const newWorkout = await WorkoutModel.create({title,reps,load})
        res.status(200).json(newWorkout)

    }catch(err){
        res.status(400).send('Error while creating on database')
    }  
}

// delete
const deleteWorkout = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'No such workout woth given id'})
    }

    const workout = await WorkoutModel.findByIdAndDelete({_id:id})
    if(!workout){
        res.status(404).json({error: 'No workout with given id available'})
    }
    res.status(200).json(workout)
}

//put 
const updateWorkout = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'No such workout woth given id'})
    }
    const workout = await WorkoutModel.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        res.status(404).json({error: 'No workout with given id available'})
    }
    res.status(200).json(workout)

}

module.exports = {
    getWorkout,
    getWorkoutById,
    createWorkout,
    deleteWorkout,
    updateWorkout
}