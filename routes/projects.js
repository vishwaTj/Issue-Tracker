const express = require('express');
const router = express.Router();

const Projectcontroller = require('../controller/project_controller');

router.post('/create',Projectcontroller.CreateProject);
router.get('/:id',Projectcontroller.ProjectDetails);

router.post('/Issues/create/:id',Projectcontroller.CreateIssue);
router.post('/:id',Projectcontroller.Filter);

module.exports = router;