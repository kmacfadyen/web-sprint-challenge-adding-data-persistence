// build your `/api/tasks` router here
const express = require('express')

const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    // const currentTask = req.body
    Task.postTask(req.body)
        .then(currentTask => {
            res.status(201).json({
                ...currentTask,
                task_completed: currentTask.task_completed? true: false
            })
        })
        .catch(next)
})

module.exports = router