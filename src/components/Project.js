import {task} from './Task'
import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

const project = (name) => {

    let taskList = []

    const addTask = (taskName)=>{
        if(taskList.find((taskEl)=>{ taskEl.Name === taskName})) return
        let taskEl = task(taskName)
        taskList.push(taskEl)
    }

    const removeTask = (taskName)=>{
        taskList = taskList.filter((taskEl)=>{
            return taskEl.Name !== taskName
        })
    }

    const contains = (taskName)=>{
        return taskList.find((task)=> task.Name === taskName)
    }

    const getTask = (taskName)=>{
        return taskList.find((task)=> task.Name === taskName)
    }

    const getTasksToday = ()=>{
        return taskList.filter((taskEl)=>{
            const taskDate = new Date(taskEl.Date)
            return isToday(toDate(taskDate))
        })
    }
    
    const getTasksWeek = ()=>{
        return taskList.filter((taskEl) => {
            const taskDate = new Date(taskEl.Date)
            return isThisWeek(subDays(toDate(taskDate), 1))
        })
    }

    return {
        get Name(){
            return name
        },
        set Name(projectName){
            name = projectName
        },
        get TaskList(){
            return taskList
        },
        set TaskList(projectTaskList){
            taskList = projectTaskList
        },
        addTask,
        removeTask,
        contains,
        getTask,
        getTasksToday,
        getTasksWeek,    
    }
}

export {project}