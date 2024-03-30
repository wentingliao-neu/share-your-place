const HttpError = require("../models/http-errors.js");
const { validationResult } = require("express-validator");
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getUsers(req, res, next) {
   let users;
   try {
      users = await User.find({}, "-password");
   } catch (err) {
      return next(
         new HttpError("Fetching users failed, please try again.", 500)
      );
   }

   res.status(201).json({
      users: users.map((u) => u.toObject({ getters: true })),
   });
}

async function signUp(req, res, next) {
   if (!validationResult(req).isEmpty()) {
      return next(
         new HttpError("Invalid input passed, please check your data.", 422)
      );
   }

   const { name, email, password, image } = req.body;
   let existingUser;
   try {
      existingUser = await User.findOne({ email: email });
   } catch (err) {
      return next(new HttpError("Signing up failed, please try again.", 500));
   }
   if (existingUser)
      return next(
         new HttpError("Could not create user, email already exist.", 422)
      );
   let hashedPassword;
   try {
      hashedPassword = await bcrypt.hash(password, 12);
   } catch (err) {
      return next(
         new HttpError("Could not create user, please try again.", 500)
      );
   }
   const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image,
      places: [],
   });

   try {
      await newUser.save();
   } catch (err) {
      return next(new HttpError("Signing up failed, please try again.", 500));
   }

   let token;
   try {
      token = jwt.sign(
         { userId: newUser.id, email: newUser.email },
         process.env.JWT_KEY,
         { expiresIn: "1h" }
      );
   } catch (err) {
      return next(new HttpError("Signing up failed, please try again.", 500));
   }
   res.status(201).json({
      userId: newUser.id,
      email: newUser.email,
      token: token,
   });
}
async function logIn(req, res, next) {
   const { email, password } = req.body;
   let existingUser;

   try {
      existingUser = await User.findOne({ email: email });
   } catch (err) {
      return next(new HttpError("Logging up failed, please try again.", 500));
   }

   if (!existingUser)
      return next(new HttpError("invalid email, could not log you in.", 403));

   let isValidPassword = false;
   try {
      isValidPassword = await bcrypt.compare(password, existingUser.password);
   } catch (err) {
      return next(
         new HttpError("fail to compare password, could not log you in.", 500)
      );
   }
   if (!isValidPassword) {
      return next(
         new HttpError("invalid password, could not log you in.", 401)
      );
   }

   let token;
   try {
      token = jwt.sign(
         { userId: existingUser.id, email: existingUser.email },
         process.env.JWT_KEY,
         { expiresIn: "1h" }
      );
   } catch (err) {
      return next(new HttpError("Logging in failed, please try again.", 500));
   }
   res.json({
      userId: existingUser.id,
      email: existingUser.email,
      token: token,
   });
}

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.logIn = logIn;
