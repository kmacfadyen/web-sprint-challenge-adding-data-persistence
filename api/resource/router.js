// build your `/api/resources` router here
const express = require('express')

const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    // const currentResource = req.body
    Resource.postResource(req.body)
        .then(currentResource => {
            res.status(201).json(currentResource)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the resources router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router