const express = require("express")
const mongoose = require("mongoose")
const Videos = require("./dbModel.js")

const data = require("./data.js")



//app config
const app = express()
const port = process.env.PORT || 8000

//middlewares

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

//DB Config
const connection_url = "mongodb+srv://arjunsharma6622:9700812822@cluster0.j6yz6.mongodb.net/?retryWrites=true&w=majority"



//DataBase connection
mongoose.connect(connection_url, {
    // useNewUrlParser : true,
    // useCreateIndex : true,
    // useUnifiedTopology : true
})
.then(() => console.log("Db connected"))
.catch((err) => console.log(`Error : ${err}`))

//api Endpoints

app.get("/", (req,res) => {
    res.send("Hello welcome to the  you have created just now")
})

app.get("/v1/posts", (req, res) => {
    res.send(data.data) //todo: get back here and solve this problem
})

app.get("/v2/posts", (req, res) => {
    Videos.find((err, data) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }    
    })
})

app.post("/v2/posts", (req, res) => {
    const dbVideos = req.body
    // console.log(dbVideos)
    // res.send(dbVideos)
    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
    
})


//listener

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})
