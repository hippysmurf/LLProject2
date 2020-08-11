// Declare variables
var drinkObj = 
{
  "drinks": [
        {
            "idDrink": "13060",
            "strDrink": "Margarita",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": "",
            "strIngredient6": "",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": "",
            "strMeasure5": "",
            "strMeasure6": "",
            "strMeasure7": "",
            "strMeasure8": "",
            "strMeasure9": "",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "dateModified": "2015-08-18 14:42:59"
        },
        {
            "idDrink": "11118",
            "strDrink": "Blue Margarita",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Blue Curacao",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": "",
            "strIngredient6": "",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": "Coarse ",
            "strMeasure5": " ",
            "strMeasure6": " ",
            "strMeasure7": " ",
            "strMeasure8": " ",
            "strMeasure9": " ",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "dateModified": "2015-08-18 14:51:53"
        }]
}

// write functions
function buildHtml(drinkData) {
  console.log(drinkData);
  var drinkHtml = '';
  // returns a string of HTML based on what you want to show
  if (drinkData.drinks !== null)
  {
    for (var i = 0; i < drinkData.drinks.length; i++) {
      var d = drinkData.drinks[i];
       drinkHtml += "<p class='drink-name'>" + d.strDrink + "</p>";
    }
  }
  return drinkHtml;
}

function getDrinkTypeData(ingredient) {
  // dataFromHttpRequest = based on the ingredient, get the data via http request (returns exactly what we're looking for)
  $.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ingredient, function (response) {
    console.log(response);
    var newHtml = buildHtml(response);
    $("#results div").append(newHtml);
    $("#results button[name=reset]").show();
  });
}

// make sure DOM is ready
$(document).ready(function() {
 
// someone submits form
$('form').on('submit', function(event) {

  // $("button").click(function() {
    event.preventDefault();
    var userInput = $(event.target).find("input");
    var inputValue = userInput.val();

    $("#forms").hide();

    if (userInput.attr("name") === "drink_type") {
      // function to build drink type html
    }
    else if (userInput.attr("name") === "ingredient") {
      // function to build drink type html
      getDrinkTypeData(inputValue);
    }
    else {
      console.log("input not recognized");
      // fail gracefully clear form
    }
  
   // $("input[name$='drink_type']").findDrink('drink_type');
 // }
    
    //$('input[name$="ingredient"]'). {
      // call a function
    //}

   $("#results button[name=reset]").on("click", function(event) { 
    $(this).hide();
    $("#results div").empty();
    $("#forms input[name=drink_type]").val("");
    $("#forms input[name=ingredient]").val("");
    $("#forms").show();
   }); 

  }) // end event handler
}) // end of document ready

// use replaceWith("stuff") or remove() or append() etc for output of selection


