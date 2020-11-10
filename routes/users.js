var express = require('express');
var router = express.Router();
const passport = require("passport");

const userController = require("../controllers/user_controller");

// router.get("/wait", userController.wait);
// router.get("/info", userController.info);
// router.get("/add", userController.add);

// router.get("/sign-in", userController.signIn);
// router.get('/sign-up',userController.signUp);
// router.get("/sign-out", userController.destroySession);

router.post('/create', userController.create);

module.exports = router;

