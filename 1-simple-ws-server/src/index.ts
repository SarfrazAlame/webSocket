// import express from "express";
// import http from "http";
// import { WebSocketServer } from "ws";

// const app = express();
// const port = 3000;

// const server = http.createServer(app);

// const wss = new WebSocketServer({ server });

// wss.on("connection", async (ws, req) => {
//     ws.on("message", (message) => {
//         console.log("received: %s", message);
//         ws.send(`Hello, you sent -> ${message}`);
//     });
// });

// app.get("/health", (req, res) => {
//     res.json({ msg: "I am healthy" })
// })

// server.listen(port, () => {
//     console.log("start listening...")
// });

// // /////////////////////////////////////////////////////////////////////  practice
import express from 'express'
import { WebSocketServer } from 'ws'
import http from 'http'

const app = express()
const port = 3000

const server = http.createServer(app)

const wss = new WebSocketServer({ server })


wss.on("connection", async (ws, req) => {
    ws.on("message", (message) => {
        console.log("message from server", message.toString())
        ws.send(` you sent ${message}`)
    })
})

app.get('/health', (req,res)=>{
    res.send("I am healthy")
})

server.listen(port, () => {
    console.log(`server is running`)
})