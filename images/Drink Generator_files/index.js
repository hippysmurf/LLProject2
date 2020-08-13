// returns matching drink list in HTML
function buildDrinksHtml(drinkData) {
  var drinksHtml = '';
  if (drinkData.drinks !== null)
  {
    for (var i = 0; i < drinkData.drinks.length; i++) {
      var d = drinkData.drinks[i];
       drinksHtml += "<p class='drink-name'>" + d.strDrink + "</p>";
    }
  }
  return drinksHtml;
}

// returns a list of ingredients based on drink type in HTML
function buildIngredientsHtml (drinkData) {
  //console.log(drinkData);
  var ingredientsHtml = '';
if (drinkData.drinks !== null) {
     for (var i = 0; i < drinkData.drinks.length; i++) {
      var d = drinkData.drinks[i];
      
      // for each drink the matches the type
      ingredientsHtml += "<h1 class='drink-name'>" + d.strDrink + "</h1>";
      
      // create a counter to loop through each ingredient until the list is empty
      var numIng = 1;
      var nextIngredient = d["strIngredient" + numIng]; 
      console.log(nextIngredient);
      while (nextIngredient !== null) {
        ingredientsHtml += "<p class='drink-name'>" + nextIngredient + "</p>";
        numIng++;
        nextIngredient = d["strIngredient" + numIng]; 
        console.log(nextIngredient);
      }
     }
  }
  return ingredientsHtml;
}

// gets the data based on user input
function getData(ingredient, isDrink) {
  // dataFromHttpRequest = based on the ingredient, get the data via http request (returns exactly what we're looking for)
  $.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ingredient, function (response) {
    console.log(response);
    if (isDrink) {
      var newHtml = buildDrinksHtml(response);
    }
    else {
      var newHtml = buildIngredientsHtml(response);
    }
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
      // function to build ingredient html
      getData(inputValue, false);
    }
    else if (userInput.attr("name") === "ingredient") {
      // function to build drink type html
      getData(inputValue, true);
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


