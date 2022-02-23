const express = require('express');
const router = express.Router();
const multer = require('multer');
const Formcollection = require('../models/formModel');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/dbimages');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
  });
  var upload = multer({ storage: storage })


router.get('/form', (req, res) => {
    res.render('form');
})

//post route WITHOUT multer
// router.post('/form', (req, res) => {
//     const form = new Formcollection(req.body)
//     form.save()
//     console.log(req.body);
// })

//post route WITH multer
router.post('/form', upload.single('profilepic'), async (req, res) => {
   
    try{    
      const form = new Formcollection(req.body);
      form.profilepic = req.file.path;
      console.log(form);
      form.save();       
    } catch(err) {
      res.status(400).send('Data not sent to database!')
      console.log(err);
    }    
    res.redirect('/success')
  });

module.exports = router;