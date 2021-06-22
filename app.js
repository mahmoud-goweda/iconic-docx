const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();

 const cors = require("cors");
  const fs = require('fs')
  const path = require('path');
  app.use(cors())

const multerUpload = require('./multer-upload')

app.post('/upload-file',multerUpload.single('file_doc'),function (req, res) {
  console.log(req.file);
    res.json(req.file)
  })






  app.use('/uploads', express.static('uploaded-docx'));

  app.listen( process.env.PORT || 3000, function () {
    console.log(`Express server listening on port ${3000}`)
  })


  