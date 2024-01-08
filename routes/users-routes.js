const express = require("express");
const usersControllers = require("../controllers/users-controllers");
const router = express.Router();
const { check } = require("express-validator");
const fileUpload = require("../middleware/file-uploads");
router.get("/", usersControllers.getUsers);
router.post(
   "/signup",
   fileUpload.single("image"),
   [
      check("name").not().isEmpty(),
      check("email").normalizeEmail().isEmail(),
      check("password").isLength({ min: 8 }),
   ],
   usersControllers.signUp
);
router.post("/login", usersControllers.logIn);
module.exports = router;
