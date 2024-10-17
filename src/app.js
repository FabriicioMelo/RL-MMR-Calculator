import * as process from "node:process";

import services from "./services/index.js";

import feathers from "@feathersjs/feathers";
import express from "@feathersjs/express";

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));
app.configure(express.rest());

app.use(express.errorHandler());

const port = process.env.APP_PORT | 3030;

app.listen(port).then(() => {
    console.log(`Server is running on localhost:${port}`);
}).catch(err => {
    console.log(`Failed to start the server:${err}`)
});

await services(app);