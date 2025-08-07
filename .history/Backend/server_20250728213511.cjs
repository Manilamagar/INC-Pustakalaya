const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');




dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Welcome to the INC Pustakalaya API');
});
app.get("/", (req, res) => {
    res.render("");
});



app.listen(5000,(req,res)=>{
    console.log("Server is running on port 5000");
})