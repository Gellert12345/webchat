import express from "express";
import dotenv from "dotenv";
dotenv.config(); // hogy hazsnaljuk
const app = express();
import chats from "./data/data.js"; //adatbazis betöltése
//api=>
app.get("/", (req,res) => {
    res.send("API is running!");
});
//api=>
app.get("/api/chat",(req,res) => {
    res.send(chats);
});
app.get("/api/chat/:id",(req,res) => {
    //console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});
const PORT = process.env.PORT || 4000;
app.listen(4000,console.log("Server is running on Port 4000"));