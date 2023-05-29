// build your `Resource` model here
const db = require('../../data/dbConfig')


async function getResources () {
    return db('resources')
}

async function postResource (resource) {
    const [ resource_id ] = await db('resources').insert(resource)
    return db('resources').where({ resource_id }).first()    
}

module.exports = { 
    getResources,
    postResource
}