const express = require('express');
const { default: mongoose } = require('mongoose');
const Tread = require('./models/Thread');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;
mongoose
.connect(process.env.MONGO_DB)
.then(
    console.log("dbconnect")
)
.catch((err)=>
    console.log(err)
)

app.get("/api/v1/threads",async(req,res)=>{
    try {
        const allThreads = await Tread.find({})
        res.status(200).json(allThreads)

    } catch (error) {
        console.log(error)
        
    }
    
})

app.post("/api/v1/threads",async(req,res)=>{
    try {
        const createTread = await Tread.create(req.body)
        res.status(200).json(createTread)

    } catch (error) {
        console.log(error)
        
    }
    
})
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})