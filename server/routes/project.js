var express = require('express');
var router = express.Router();

const {Project} = require('../models/Project');

router.get('/', async (req, res) => {
    let allProjects = await Project.query();
    res.send(allProjects).end();
});

router.post('/', async (req, res) => {
    let insertProject = await Project.insertProject(req.body);
    res.send(insertProject).end();
});

router.post('/:id', async (req, res) => {
    let updateProfile = await Project.findById(req.params.id);
    await updateProfile.$query().update(req.body);
    res.send(updateProfile).end();
});

router.delete('/:id', async (req, res) => {
    let deleteProject = await Project.findById(req.params.id);
    await deleteProject.$query().delete();
    res.send(deleteProject).end();
});

module.exports = router;