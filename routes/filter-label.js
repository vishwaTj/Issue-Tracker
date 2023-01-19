const express = require('express');
const router = express.Router();

const Filtercontroller = require('../controller/project_controller');

router.post('/:id',Filtercontroller.Labelfilter);


module.exports = router;