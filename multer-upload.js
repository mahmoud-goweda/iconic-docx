const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: 'uploaded-docx',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000 *10// 1000000 Bytes = 1 MB
  },

  fileFilter(req, file, cb) {

    // if (!file.originalname.match(/\.(png|jpg|jpeg|JPG|PNG|JPEG)$/)) {
    //    // upload only png and jpg format
    //    req.fileValidationError = "Forbidden extension";
    //    return cb(null, false, req.fileValidationError);
    //  }
   cb(null, true)
}
})

module.exports = imageUpload
