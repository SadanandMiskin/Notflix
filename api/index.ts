import auth from './routes/auth'

import express from 'express'

const app = express()
app.use(express.json())

import mongoose from 'mongoose'



mongoose.connect('mongodb://localhost:27017' ,
  {
  dbName: 'notflix'
})
.then(()=> console.log('mongo connected'))
.catch((e)=> console.error(e))


app.use('/api/auth' , auth)

app.listen(3000, ()=>{
  console.log('Listening')
})