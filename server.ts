
/*EXT MODS*/

import {Request,Response} from 'express';
const express = require('express');
const path = require("path");
//const bodyParser = require('body-parser');
/*APP VAR*/

const app = express();
const port:number =  5290;


/*APP CONFIG*/

app.set("views", path.join(__dirname,"app/views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname,"public")));
//app.use(bodyParser.urlencoded({extended: true}));

/*ROUTE VAR*/

app.get('/',(req: Request,res: Response)=>{
	res.render('index',{title:"Landing Page"});
});		

app.get('/map',(req: Request, res: Response)=>{
	res.render('map',{title:"Delivery Zone"});
});

//app.post('/',(req: Request, res: Response)=>{
//	res.render('map',{title:"Zone Map"});
//});

/*SERV ACTIVAT*/

app.listen(port,()=>{
	console.log(`Now listening on localhost: port ${port}`);
});




