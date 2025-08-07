const express = require('express');
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the INC Pustakalaya API');
});

app.use('/api/book',bookRoutes); // Assuming you have routes defined in a separate file
app.use('/api/user',userRoutes); // Assuming you have user routes defined in a separate file


app.listen(5000,(req,res)=>{
    console.log("Server is running on port 5000");
})