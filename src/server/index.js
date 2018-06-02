import express from "express";
import renderApp from "./renderApp";

const app = express();

app.get("/", (req, res) => {
  res.send(renderApp());
});

app.listen(3000, () => console.log("Listening on port 3000..."));
