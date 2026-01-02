import express from express;


const PORT = 3000;
const app = express();
const helloRoute = ("./routes/hello");

app.use(helloRoute);
