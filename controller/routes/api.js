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

/*
 * GET /book/:id route to retrieve a book given its id.
 */

}



 
 