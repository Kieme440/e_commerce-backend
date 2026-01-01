import express from express;


const PORT = 3000;
const app = express();
app.get("/hello", (req, res)=>{
    res.send("Hello")
})
app.listen(PORT, "0.0.0.0", function(){
    console.log("loaded successfully at port ${PORT}");
})
