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
app.use('/api/issue',issueRoutes); // Assuming you have issue routes defined in a separate file
app.use('/api/return',returnRoutes); // Assuming you have return routes defined in a separate file
app.use('/api/author',authorRoutes); // Assuming you have author routes defined in a separate file
app.use('/api/category',categoryRoutes); // Assuming you have category routes defined in a separate file
app.use('/api/transaction',transactionRoutes); // Assuming you have transaction routes defined in a separate file


app.listen(5000,(req,res)=>{
    console.log("Server is running on port 5000");
})