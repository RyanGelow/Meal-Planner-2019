const router = require('express').Router();
const calcController = require("./../../controllers/calcControllers");

const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');


// /api/calc

router.route('/')
.get(authMiddleware.requireAuth, calcController.getBMR)

module.exports = router;