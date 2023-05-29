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
        .then(currentProject => {
            res.status(201).json({
                ...currentProject,
                project_completed: currentProject.project_completed? true: false
            })
        })
        .catch(next)
})

module.exports = router