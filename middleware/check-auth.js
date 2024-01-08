const HttpError = require("../models/http-errors");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
   if (req.method === "OPTIONS") return next();
   try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
         return next(new HttpError("Authencation failed.", 403));
      }
      const decodedToken = jwt.verify(token, process.env.JWT_KEY);
      req.userData = { userId: decodedToken.userId };
      next();
   } catch (err) {
      return next(new HttpError("Authencation failed.", 403));
   }
};
