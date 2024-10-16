import * as process from "node:process";

import services from "./services/index.js";

import feathers from "@feathersjs/feathers";
import express from "@feathersjs/express";

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));
app.configure(express.rest());

app.use(express.errorHandler());

app.listen(process.env.PORT | 3030);

await services(app);

app.on("listening", () => {
    console.log(`Server is running on localhost:${process.env.PORT}`);
})