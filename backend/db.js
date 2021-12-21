const mongoose=require('mongoose')

const dbURI='mongodb://localhost:27017/TodoList'

mongoose.connect(dbURI)

//extra

const db=mongoose.connection;

db.on('error',(err)=>{
    console.log('error in mongodb')
    })

    db.on('connected',(err)=>{
        console.log('mongodb is connect ..')
    });