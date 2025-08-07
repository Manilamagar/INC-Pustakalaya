const express = require('express');
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();



app.listen(5000,(req,res)=>{
    console.log("Server is running on port 5000");
})