const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.list);
router.post('/add', studentController.save);




module.exports = router;