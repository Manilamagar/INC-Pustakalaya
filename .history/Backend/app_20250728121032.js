import express from 'express';
const app = express();

app.get("/",(req,res) =>{
    res.render("server is ready")
})

const port = process.env.PORT || 5000;
app.listen(port,() =>{
    console.log("server at http://localhost:${port}")

    



    