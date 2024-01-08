const axios = require("axios");
const HttpError = require("../models/http-errors.js");
async function getCoordsForAddress(address) {
   const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
         address
      )}&key=${process.env.GOOGLE_API_KEY}`
   );
   const data = response.data;
   if (!data || data.status === "ZERO_RESULTS") {
      throw new HttpError("Could find location for the address", 422);
   }
   return data.results[0].geometry.location;
}
module.exports = getCoordsForAddress;
