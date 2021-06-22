const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();

 const cors = require("cors");
  const fs = require('fs')
  const path = require('path');
const multerUpload = require('./multer-upload')

app.post('/upload-file',multerUpload.single('file_doc'),function (req, res) {
    res.send('req')
  })






  app.use('/uploads', express.static('uploaded-docx'));

  app.listen(3000, function () {
    console.log(`Express server listening on port ${3000}`)
  })


  