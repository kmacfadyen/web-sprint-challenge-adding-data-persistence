// build your `/api/tasks` router here
const db = require('../../data/dbConfig')

async function getTasks () {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 
        't.task_completed', 'p.project_name', 'p.project_description')
}

async function postTask (resource) {
    const [ resource_id ] = await db('resources').insert(resource)
    return db('resources').where({ resource_id }).first()    
}

module.exports = { 
    getTasks,
    postTask
}