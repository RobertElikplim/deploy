// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";


// init express
const app = express();
const port = process.env.PORT || 5000;

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(Router);

// To serve our frontend
app.get(/.*/, (_req, res) => {
    const p = path.resolve(__dirname, '../frontend/dist/index.html');
    res.sendFile(p);
});

app.use((_req, res) => {
    res.status(404).send("<h1>unable to find that</h1>");
});


app.listen(port, function () {
    console.log("Ready to Go! Backend listening on port : " + port);
  });