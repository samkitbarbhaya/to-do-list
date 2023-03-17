import {task} from './Task'

const project = (name) => {
    this.name = name
    let taskList = []
    
    const getName = ()=> this.name
    const setName = (name)=> this.name = name
    const addTask = (taskName)=>{
        let taskEl = task(taskName)
        taskList.append(taskEl)
    }
    const removeTask = (taskName)=>{
        this.taskList = this.taskList.filter((taskEl)=>{
            return taskEl.getName() != taskName
        })
    }   
    return {
        getName,
        setName,
        addTask,
        removeTask
    }
}

export {project}