
const router      = require('express').Router();
const authRoutes  = require('./authRoutes');
const calcRoutes = require('./calcRoutes');
const mealRoutes = require('./mealRoutes');

// const mealRoutes = require('./mealRoutes');

const passportService = require("./../../services/passport");

const authMiddleware = require("./../../middlewares/authMiddlewares");
// / api prepended to these routes

router.route("/test").get(authMiddleware.requireAuth, (req, res) => {
  res.send(req.user);
});

router.use("/auth", authRoutes);

// router.use('/todo', todoRoutes);
router.use('/meal', mealRoutes);

router.use("/calc", calcRoutes);

module.exports = router;
