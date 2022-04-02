// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";


// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(Router);

app.use((_req, res) => {
    res.status(404).send("<h1>unable to find that</h1>");
});


app.listen(process.env.PORT, '0.0.0.0', () => console.log("Server running at " + process.env.PORT)); 