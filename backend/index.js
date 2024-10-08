require('dotenv').config()
const express = require('express')
const workoutRoute = require('./routes/workout')
const userRoute = require('./routes/user')

const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoute)

app.use('/api/users',userRoute)

//db connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>console.log(`Db is connected & Server is active at ${process.env.PORT}`))
})
.catch((err)=>{
console.log(err)
})
