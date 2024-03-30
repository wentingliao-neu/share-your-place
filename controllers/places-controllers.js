const HttpError = require("../models/http-errors.js");
const User = require("../models/user.js");
const getCoordsForAddress = require("../util/location.js");
const Place = require("../models/place.js");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const fs = require("fs");

async function getPlaceById(req, res, next) {
   const placeid = req.params.pid;
   let place;
   try {
      place = await Place.findById(placeid);
   } catch (err) {
      return next(
         new HttpError("Something went wrong, could not find a place.", 500)
      );
   }

   if (!place) {
      return next(
         new HttpError("Could not find a place for the place id.", 404)
      );
   }
   res.json({ place: place.toObject({ getters: true }) });
}

async function getPlacesByUserId(req, res, next) {
   const uid = req.params.uid;

   let userWithPlaces;
   try {
      userWithPlaces = await User.findById(uid).populate("places");
   } catch (err) {
      return next(
         new HttpError("Fetching places failed, please try again.", 500)
      );
   }

   if (!userWithPlaces || userWithPlaces.places.length === 0) {
      return next(new HttpError("Could not find places for the user id."));
   }
   res.json({
      places: userWithPlaces.places.map((p) => p.toObject({ getters: true })),
   });
}

async function createPlace(req, res, next) {
   if (!validationResult(req).isEmpty()) {
      return next(
         new HttpError("Invalid input passed, please check your data.", 422)
      );
   }

   const { title, description, address, image } = req.body;

   let coordinates;
   try {
      coordinates = await getCoordsForAddress(address);
   } catch (error) {
      return next(error);
   }

   const createdPlace = new Place({
      title,
      description,
      address,
      location: coordinates,
      image,
      creator: req.userData.userId,
   });
   let user;
   try {
      user = await User.findById(req.userData.userId);
   } catch (err) {
      return next(
         new HttpError("Getting creator failed, please try again.", 500)
      );
   }
   if (!user)
      return next(new HttpError("Could not find user for proviede id", 404));
   try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdPlace.save({ session: sess });

      user.places.push(createdPlace);
      await user.save({ session: sess });
      await sess.commitTransaction();
   } catch (err) {
      return next(
         new HttpError("Creating place failed, please try again.", 500)
      );
   }
   res.status(201).json({ place: createdPlace });
}

async function updatePlace(req, res, next) {
   if (!validationResult(req).isEmpty())
      return next(
         new HttpError("Invalid input passed, please check your data.", 422)
      );
   const { title, description } = req.body;
   const placeId = req.params.pid;
   let place;
   try {
      place = await Place.findById(placeId);
   } catch (err) {
      return next(
         new HttpError("Something went wrong, could not update the place.", 500)
      );
   }
   if (place.creator.toString() !== req.userData.userId)
      return next(new HttpError("You are not allowed to edit the place.", 401));

   place.title = title;
   place.description = description;
   try {
      await place.save();
   } catch (err) {
      return next(
         new HttpError("Updating place failed, please try again.", 500)
      );
   }
   res.status(200).json({ place: place.toObject({ getters: true }) });
}

async function deletePlace(req, res, next) {
   const placeId = req.params.pid;
   let place;
   try {
      place = await Place.findById(placeId).populate("creator");
   } catch (err) {
      return next(
         new HttpError("Something went wrong, could not find the place.", 500)
      );
   }
   if (!place)
      return next(
         new HttpError("Could not find a place for the place id.", 404)
      );

   if (place.creator.id !== req.userData.userId)
      return next(
         new HttpError("You are not allowed to delete the place.", 401)
      );

   const imagePath = place.image;
   try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await Place.findByIdAndDelete(placeId).session(sess);
      // await place.remove({ session: sess });

      place.creator.places.pull(place);
      await place.creator.save({ session: sess });
      await sess.commitTransaction();
   } catch (err) {
      return next(
         new HttpError("Something went wrong, could not delete the place.", 500)
      );
   }
   fs.unlink(imagePath, (err) => {
      console.log(err);
   });
   res.status(200).json({ message: "delete successful." });
}

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
