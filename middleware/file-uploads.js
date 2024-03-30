const multer = require("multer");
const b2 = require("backblaze-b2");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const MIME_TYPE_MAP = {
   "image/png": "png",
   "image/jpeg": "jpeg",
   "image/jpg": "jpg",
};

const fileUploadB2 = async (req, res, next) => {
   const b2_apis = new b2({
      applicationKeyId: process.env.B2_API_KEY_ID,
      applicationKey: process.env.B2_API_KEY,
   });
   await b2_apis.authorize();
   const response = await b2_apis.getUploadUrl({
      bucketId: process.env.B2_BUCKET_ID,
   });

   const { authorizationToken, uploadUrl } = response.data;
   const fileName = `yourPlace/${uuidv4()}${path.extname(
      req.file.originalname
   )}`;
   const params = {
      uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName: fileName,
      data: req.file.buffer,
   };

   const fileInfo = await b2_apis.uploadFile(params);
   if (!fileInfo) {
      return next(new HttpError("Image upload failed", 422));
   }
   req.body.image = process.env.B2_Link + fileName;
   next();
};

const fileUpload = multer({
   limits: 500000,
   storage: multer.memoryStorage(),
});

module.exports = { fileUploadB2, fileUpload };
