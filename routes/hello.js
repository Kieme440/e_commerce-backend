import express from express;

const helloRoute = express.Router();

helloRoute.get("/hello", (req, res)=>{
    res.send("welcome to my world!");
});

module.exports = helloRoute;

