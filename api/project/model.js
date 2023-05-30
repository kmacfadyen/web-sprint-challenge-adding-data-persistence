// build your `Project` model here
const db = require('../../data/dbConfig')


async function getProjects () {
    const project1 = await db('projects')
    return project1.map(project => {
        return {
            ...project,
            project_completed: project.project_completed? true:false
        }
    })
}

async function postProject (project) {
    const [ project_id ] = await db('projects').insert(project)
    return db('projects').where({ project_id }).first()    
}

module.exports = { 
    getProjects,
    postProject
}