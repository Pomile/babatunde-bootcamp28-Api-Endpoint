
import express from 'express';
import bodyParser from 'body-parser';
import {RecipesControllers} from './controller/controllers';
let app = express();
let port = 4089;
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


app.post('/api/recipes', (req, res)=>{

    RecipesControllers.postRecipe(req, res);

});
// Update Recipe by Id
app.put('/api/recipes/:id', (req, res)=>{

    RecipesControllers.putRecipe(req, res);

});
// Delete Recipe by ID
app.delete('/api/recipes/:id', (req, res)=>{

    RecipesControllers.deleteRecipe(req, res);

});
// Get All Recipe  and get most popular recipe by upvotes count
app.get('/api/recipes', (req, res)=>{
    if (req.query.sort){

        RecipesControllers.getRecipesByUpvoteDesc(req, res);

    }else if (!req.query.sort){

        RecipesControllers.getRecipes(req, res);
    }
    

});

app.post('/api/recipes/:id/reviews', (req, res)=>{
    //console.log(typeof req.params.id)
    RecipesControllers.postReviews(req, res);

});




app.get("*", (req, res) => res.json({message: "Check your Url"}));
app.listen(port);
console.log("Listening on port " + port);

export default app; // for testing


