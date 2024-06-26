const express = require("express");
const { check } = require("express-validator");
const placesControllers = require("../controllers/places-controllers");
const { fileUploadB2, fileUpload } = require("../middleware/file-uploads");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
router.get("/:pid", placesControllers.getPlaceById);
router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.use(checkAuth);
router.post(
   "/",
   fileUpload.single("image"),
   [
      check("title").not().isEmpty(),
      check("description").isLength({ min: 5 }),
      check("address").not().isEmpty(),
   ],
   fileUploadB2,
   placesControllers.createPlace
);
router.patch(
   "/:pid",
   [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
   placesControllers.updatePlace
);
router.delete("/:pid", placesControllers.deletePlace);
module.exports = router;
