import express from "express";
import helloRoute from "./routes/hello.js";
import { connectDB } from "./routes/config/db.js";



const PORT = 3000;
const app = express();

connectDB();

app.use("/api/products", helloRoute);

app.listen(PORT, ()=>{
    console.log("successfully loaded at port ${PORT}");
});
