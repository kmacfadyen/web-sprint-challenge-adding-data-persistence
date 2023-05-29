// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks () {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 
        't.task_completed', 'p.project_name', 'p.project_description')
}

async function postTask (task) {
    const [ task_id ] = await db('tasks').insert(task)
    return db('tasks').where({ task_id }).first()    
}

module.exports = { 
    getTasks,
    postTask
}