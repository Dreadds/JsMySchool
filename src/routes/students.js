const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.list);
router.post('/add', studentController.save);
router.get('/delete/:id', studentController.delete);
router.get('/update/:id', studentController.edit);
router.post('/update/:id', studentController.update);



module.exports = router;