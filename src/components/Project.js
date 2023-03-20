import {task} from './Task'
import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

const project = (name) => {

    let taskList = []

    const addTask = (taskName, taskDate)=>{
        if(taskList.find((taskEl)=>{ taskEl.Name === taskName})) return
        let taskEl = task(taskName, taskDate)
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

    const renameTask = (newTaskName, oldTaskName) =>{
        taskList.map((taskEl)=>{
            if(taskEl.Name === oldTaskName){
                taskEl.Name = newTaskName
                return taskEl
            }else{
                return taskEl
            }
        })
    }

    const getTasksToday = ()=>{
        return taskList.filter((taskEl)=>{
            if(taskEl.Date==undefined) return false
            const year = taskEl.Date.split('-')[0]
            const month = taskEl.Date.split('-')[1]
            const day = taskEl.Date.split('-')[2]
            const taskDate = new Date(year,month-1,day)
            return isToday(toDate(taskDate))
        })
    }
    
    const getTasksWeek = ()=>{
        return taskList.filter((taskEl) => {
            if(taskEl.Date==undefined) return false
            const year = taskEl.Date.split('-')[0]
            const month = taskEl.Date.split('-')[1]
            const day = taskEl.Date.split('-')[2]
            const taskDate = new Date(year,month-1,day)
            return isThisWeek(toDate(taskDate))
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
        renameTask,
        getTasksToday,
        getTasksWeek,    
    }
}

export {project}