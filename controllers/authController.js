const db = require("./../models");
const jwt = require("jwt-simple");
const config = require("./../config");

const tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  // Sub === subject, iat === issued at time
  // Its going to encode the whole 1st object and then add our secret to it
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};
module.exports = {
  signUp: async (req, res) => {
    console.log();
    const {
      email,
      password,
      first_name,
      last_name,
      age,
      gender,
      weight,
      height,
      activity_level
    } = req.body;
    if (!email || !password) {
      return res
        .status(422)
        .json({ error: "You must provide an email and password" });
    }
    try {
      // Check if theres existing user
      const existingUser = await db.User.findOne({ email });
      // if user exist, throw error
      if (existingUser) {
        return res.status(422).json({ error: "Email is in use" });
      }

      if (gender === "female") {
        const femaleBMR =
          655 +
          4.3 * parseInt(weight) +
          4.7 * parseInt(height) -
          4.7 * parseInt(age);

        if (parseInt(activity_level) === 1) {
          const calories = femaleBMR * 1.2;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else if (parseInt(activity_level) === 2) {
          const calories = femaleBMR * 1.375;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else if (parseInt(activity_level) === 3) {
          const calories = femaleBMR * 1.55;
          const Fat = parseInt(0.29 * (calories / 9));
          const Protein = parseInt(0.18 * (calories / 4));
          const Carb = parseInt(0.53 * (calories / 4));
          const Macros = { Fat, Protein, Carb };
          return res.json({ calories, Macros });
        } else if (parseInt(activity_level) === 4) {
          const calories = femaleBMR * 1.725;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else if (parseInt(activity_level) === 5) {
          const calories = femaleBMR * 1.9;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else {
          return error;
        }
      }
      if (gender === "male") {
        const maleBMR =
          66 +
          6.3 * parseInt(weight) +
          12.9 * parseInt(height) -
          6.8 * parseInt(age);
        if (parseInt(activity_level) === 1) {
          const calories = maleBMR * 1.2;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else if (parseInt(activity_level) === 2) {
          const calories = maleBMR * 1.375;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else if (parseInt(activity_level) === 3) {
          const calories = maleBMR * 1.55;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else if (parseInt(activity_level) === 4) {
          const calories = maleBMR * 1.725;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else if (parseInt(activity_level) === 5) {
          const calories = maleBMR * 1.9;
          const fat = parseInt(0.29 * (calories / 9));
          const protein = parseInt(0.18 * (calories / 4));
          const carb = parseInt(0.53 * (calories / 4));
          const user = new db.User({
            email,
            password,
            first_name,
            last_name,
            age,
            gender,
            weight,
            height,
            activity_level,
            fat,
            protein,
            carb,
            calories
          });
          await user.save();
          res.json({ token: tokenForUser(user) });
        } else {
          return error;
        }
      }
    } catch (e) {
      res.status(404).json({ e });
    }
  },
  signIn: (req, res) => {
    console.log("isaac was here");
    res.send({ token: tokenForUser(req.user) });
  }
};
