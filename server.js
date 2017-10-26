import express from 'express';

import morgan from 'morgan';
import bodyParser from 'body-parser';
import {Recipe} from './controller/routes/api';
let app = express();
let port = 4099;
import config from 'config'; 

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('dev')); //'combined' outputs the Apache style LOGs
}

//parse application/json                                       
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
//app.get("/", (req, res) => res.json({message: "Welcome to Our Recipe World!"}));

app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

app.get('/api/recipes', (req, res)=>{

    Recipe.getRecipe(req, res);

});
app.post('/api/recipes', (req, res)=>{

    Recipe.postRecipe(req, res);

});


app.get("*", (req, res) => res.json({message: "Welcome to Our Recipe World!"}));
app.listen(port);
console.log("Listening on port " + port);

export default app; // for testing