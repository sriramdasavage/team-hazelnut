const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const config = require("../config");

aws.config.update({
  secretAccessKey: config.AWS.SECRET_ACCESS,
  accessKeyId: config.AWS.ACCESS_KEY,
  region: "us-west-2"
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  console.log("file", file);
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG and PNG"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "loving-sitter",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

module.exports = upload;
