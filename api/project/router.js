// build your `/api/projects` router here
const express = require('express')

const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const currentProject = req.body
    Project.postProject(currentProject)
        .then(projects => {
            res.status(201).json({
                ...projects,
                project_completed: projects.project_completed? true:false
            })
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router