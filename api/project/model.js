// build your `Project` model here
const db = require('../../data/dbConfig')


async function getProjects () {
    return db('projects')
}

async function postProject (project) {
    const [ project_id ] = await db('projects').insert(project)
    return db('projects').where({ project_id }).first()    
}

module.exports = { 
    getProjects,
    postProject
}