import recipes from '../../dummyData/recipes';

//create class and export
export class Recipe{

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
            console.log(req.body);
            if(req.params.id == RecipeId){
                var reqData = req.body;
                
                console.log(reqData);
                console.log(reqData["timetaken"])
                console.log(reqData["timetaken"]);
<<<<<<< HEAD
=======

                currentRecipe["name"]=reqData.name;
>>>>>>> Put-Feature
                currentRecipe["timetaken"]=reqData["timetaken"];
                currentRecipe["upvote"]=reqData.upvote;
                currentRecipe["downvote"]=reqData.downvote;
                currentRecipe["favourite"]=reqData.favourite;
                currentRecipe["reviews"].push(reqData.reviews);



<<<<<<< HEAD
                return res.send(recipes)
=======
                return res.send(currentRecipe)
>>>>>>> Put-Feature

            }
         }
    }

/*
 * GET /book/:id route to retrieve a book given its id.
 */

}



 
 