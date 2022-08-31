const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  //  ruta absoluta
const absolutePath = path.join(__dirname,'..','pdfs')
   
    cb(null,absolutePath,'/imgs');
  },
  filename: (req, file, cb) => {
    //crea el nombre del archivo
 const fileName=  `${Math.floor(Math.random() * (100 - 1) + 12)}_cc.pdf`
    cb(null,fileName)
  },
});


//maneja los archivos del lado de los endpoints
const upload = multer({ storage });

module.exports = { upload };
