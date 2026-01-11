import { Socket } from "socket.io";
import app from "./app";
import { connectDB } from "./configs/db.config";
import http from "http";
import {Server} from 'socket.io';
import { Chess, QUEEN } from "chess.js";

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server);

const chess = new Chess();

export interface playerInterface {
  white ?:string   ,
  black ?: string 
}
let players : playerInterface = {};
let currentPlayer = "W";

io.on("connection" ,(uniqueSocket :Socket)=>{
  console.log("Backend Connected" , uniqueSocket.id);
  if(!players.white){
    players.white = uniqueSocket.id;
    uniqueSocket.emit("playerRole" , "w");
  }else if(!players.black){
    players.black = uniqueSocket.id;
    uniqueSocket.emit("playerRole" , "b");
  }else{
    uniqueSocket.emit("spectatorRole");
  }

  uniqueSocket.on("disconnect" , ()=>{
    if(uniqueSocket.id === players.white){
      delete players.white;
    }else if (uniqueSocket.id === players.black){
      delete players.black;
    }
    console.log("Disconnected");
  })

  uniqueSocket.on("move" , (move)=>{
    try{
      if(chess.turn() === "w" && uniqueSocket.id !== players.white){
        return ;
      }
      if(chess.turn() === "b" && uniqueSocket.id !== players.black){
        return ;
      }

      const result = chess.move(move);
      if(result){
        currentPlayer = chess.turn();
        io.emit("move" , move);
        io.emit("boardState" , chess.fen());
      }else{
        console.log("Invalid Move : ", move);
        uniqueSocket.emit("invalidMove" , move);
      }
    }catch(err){
      console.log(err)
      uniqueSocket.emit("Invalid Move" , move);
    }
  })

})

// Connect DB locally 
connectDB();

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
