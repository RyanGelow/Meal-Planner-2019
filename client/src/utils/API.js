import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // mealdb api
  getRandomMeal: function() {
    return axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
  },
  getMealOfType: function(type) {
    return axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood" + type);
  },
  getBaseCategories: function() {
    return axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
  },
  // nutritionix api
  
  
};
