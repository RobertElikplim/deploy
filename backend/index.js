// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";

// init express
const app = express();

const port = process.env.PORT || 3000;

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(Router);


app.listen(port, () => console.log('Server running')); 