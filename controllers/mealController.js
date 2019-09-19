//const db = require('../models');
const { nutritionixAppId, nutitionixAppKey } = require('../config');
const { app_id, app_key } = require('../config');
const axios = require('axios');

module.exports = {
  /*
  GET 
  params
  /meal/afjakdsfjksad meal/:mealselected
  querystring
  ?mealselected=adsfsadfasd req.query

  POST
  body

  */
  getMeals: async (req, res) => {
    const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
    //  user will choose this but putting beef for test purposes
    let type = req.query.type;
    try {
      const data = await axios({
        url: URL + type,
        method: "GET",
      });

      return res.json(data.data);
    } catch (e) {
      return res.json(e);
    }
  },

  getMealData: async (req, res) => {
    const URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    // const URL = "https://api.edamam.com/api/nutrition-details?app_id=" + app_id + "&app_key=" + app_key + "&title=" + query;
    mealSelected = req.query.meal;
    console.log(mealSelected)
    try {
      const data = await axios({
        url: URL,
        method: "POST",
        headers: {
          "x-app-id": nutritionixAppId,
          "x-app-key": nutitionixAppKey
          // "Content-Type": "application/json"

        },
        // from what they select above in the meals db get meal of type, we run the name through this query
        data: { query: mealSelected }
      });
      return res.json(data.data);
      // add total calories per ingredients found
      // for(let i = 0; i < data.data.foods.length; i++) {
      //   let calories = 0;
      //   calories + data.data.foods[i].nf_calories;
      //   console.log(calories);
      // }
      // console.log(data.data.foods[0].nf_calories);
    } catch (err) {
      console.error(err);
      return res.json(err);
    }
  },

}



  //   createTodo: async (req, res) => {
  //     const { description } = req.body;
  //     try {
  //       const newTodo = new db.Todo({description});
  //       await newTodo.save();
  //       console.log(newTodo);
  //       const user = await db.User.findById(req.user._id);
  //       user.todos.push(newTodo);
  //       await user.save();
  //       res.json({ success: true });
  //     } catch(e) {
  //       res.status(403).json(e);
  //     }
  //   }


  // **** extras to add ****
  // simpleGet = async () => {
  //   const allowCORS = 'https://cors-anywhere.herokuapp.com/'
  //   const URL = 'https://trackapi.nutritionix.com/v2/search/instant?query=grilled cheese'

  //   try{
  //     const data = await axios.get(allowCORS + URL, {headers : {          "x-app-id": nutritionixAppId,
  // "x-app-key": nutitionixAppKey'}})
  //     console.log(data)
  //     console.log(data.foods)
  //   }catch(err) {
  //     console.error(err)
  //   }
  // }

//   nutritionGet = async () => {
//     const allowCORS = 'https://cors-anywhere.herokuapp.com/'
//     const URL = 'https://trackapi.nutritionix.com/v2/search/item?nix_item_id=5c66693b886783da3b0e8811'

//     try{
//       const data = await axios.get(allowCORS + URL, {headers : {          "x-app-id": nutritionixAppId,
//   "x-app-key": nutitionixAppKey}})
//       console.log(data)
//     }catch(err) {
//       console.error(err)
//     }
//   }
