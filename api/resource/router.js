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

module.exports = router