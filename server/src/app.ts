import express  , {Request , Response} from "express";
import path from "path";

const app = express();
app.use(express.json());
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , ".." ,  "public")));

app.get("/"  , (req : Request, res : Response)=>{
  res.render("index" , {title:"Chess Game"});
}); 

export default app;
