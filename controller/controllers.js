import recipes from '../../dummyData/recipes';

//create class and export
export class RecipesControllers{

/*
 * POST /book to save a new book.
 */
    static postRecipe(req, res) {
        
        var initialRecipesLength = recipes.length;  
        // push data into the Book
        recipes.push(req.body);  
        var finalRecipesLength = recipes.length;

        if(finalRecipesLength > initialRecipesLength){

            return res.send(recipes);
        }else{
                return res.send('Server error');
        }

    }

    /* Update Recipe by Id*/

    static putRecipe(req, res){

         var RecipeLength = recipes.length;
         var counter=0;
         for(counter; counter< RecipeLength;counter++){

            let currentRecipe = recipes[counter];
            let RecipeId = currentRecipe["id"];
            
            if( RecipeId==Number(req.params.id)){
                var reqData = req.body;
                console.log(reqData);
                console.log(reqData["timetaken"])
                console.log(reqData["timetaken"]);

                currentRecipe["name"]=reqData.name;

                currentRecipe["timetaken"]=reqData["timetaken"];
                currentRecipe["ingredient"]=reqData["ingredient"];
                currentRecipe["equipments"]=reqData["equipments"];
                currentRecipe["upvote"]=reqData.upvote;
                currentRecipe["downvote"]=reqData.downvote;
                currentRecipe["favourite"]=reqData.favourite;
                currentRecipe["reviews"].push(reqData.reviews);
                return res.send(currentRecipe)


            }
         }
    }

/*
 * DELETE /book/:id route to delete a book given its id.
 * 
 */
   static deleteRecipe(req, res) {


        var recipeLength = recipes.length;
        var counter =0;
        for(counter; counter<recipeLength;counter++){

                let currentRecipe = recipes[counter];
                let recipeId = currentRecipe["id"];
                console.log(req.params.id);
                if(req.params.id == recipeId){
                    recipes.splice(counter, 1);
                    console.log(recipes)
                    return res.send(currentRecipe);
                }
        }

        console.log(recipes);

    }

    static getRecipes(req, res) {
    
        res.send(recipes);
    }
    
   static postReviews(req, res){
       
       var reqId= parseInt(req.params.id);
       let RecipeLength = recipes.length;
       let counter =0;
       for(counter; counter<RecipeLength; counter++){

           let currentRecipe = recipes[counter];
           let recipeId = currentRecipe["id"];
           
           if (recipeId==reqId){
                var reqData = req.body;
                currentRecipe["reviews"].push(reqData["reviews"]);
                return res.send(currentRecipe)
           }
       }

   }

}



 
 