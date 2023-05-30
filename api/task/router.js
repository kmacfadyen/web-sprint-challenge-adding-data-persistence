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
                task_completed: currentTask.task_completed? true:false
            })
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the tasks router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router