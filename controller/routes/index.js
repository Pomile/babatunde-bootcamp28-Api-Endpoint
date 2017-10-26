//import recipe class
import express from 'express';
import postRecipes from './api';
var app = express();
var router = express.Router();

router.post("/api/recipes" , (req, res)=>{
    postRecipes;
});
      
    

export default router;