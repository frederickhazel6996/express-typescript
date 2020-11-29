import { NextFunction ,Request,Response} from "express";
import * as express from "express"
var app = express();

/* GET home page. */
app.get('/', function(req:Request, res:Response, next:NextFunction) {
  res.status(200).send("I work Lmaoo");
});

export default app;
