import {task} from './Task'
import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

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
            return taskEl.getName() !== taskName
        })
    }
    const getTaskList = ()=>{
        return taskList
    }
    const getTasksToday = ()=>{
        return this.taskList.filter((taskEl)=>{
            const taskDate = new Date(taskEl.getDate())
            return isToday(toDate(taskDate))
        })
    }
    const getTasksWeek = ()=>{
        return this.tasks.filter((taskEl) => {
            const taskDate = new Date(taskEl.getDate())
            return isThisWeek(subDays(toDate(taskDate), 1))
        })
    }
    return {
        getName,
        setName,
        addTask,
        removeTask,
        getTaskList,
        getTasksToday,
        getTasksWeek
    }
}

export {project}