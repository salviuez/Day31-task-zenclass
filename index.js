import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT;
//const PORT = 4001;

//const MONGO_URL = "mongodb://127.0.0.1";
//const MONGO_URL = "mongodb+srv://salviuez:Jesusatas19@cluster0.iy7r0xj.mongodb.net"
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongo is connected")

app.get("/", function (request, response) {
    response.send("Welcome to the task");
})



app.listen(PORT, () => console.log(`the server starts in :,${PORT}`))