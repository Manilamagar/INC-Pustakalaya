const express = require('express');
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {


app.listen(5000,(req,res)=>{
    console.log("Server is running on port 5000");
})