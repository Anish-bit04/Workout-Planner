const express = require("express")
const WorkoutModel = require('../model/WorkoutModel')
const {
    getWorkout,
    getWorkoutById,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/WorkoutController')
const router = express.Router()

router.get('/',getWorkout)

router.get('/:id',getWorkoutById)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.put('/:id',updateWorkout)

module.exports=router