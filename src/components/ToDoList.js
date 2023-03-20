import { project } from "./Project";

const toDoList = ()=>{

    let projectList = [project('Inbox'),project('Today'),project('This Week')]

    const addProject = (projectName)=>{
        if(projectList.find((project)=> project.Name === projectName)) return
        projectList.push(project(projectName))
    }

    const removeProject = (projectName)=>{
        projectList = projectList.filter((projectEl)=>{
            return projectEl.Name!==projectName
        })
    }

    const getProject = (projectName)=> {
        return projectList.find((projectEl)=>{
            return projectEl.Name===projectName
        })
    }

    const contains = (projectName)=>{
        return projectList.find((project)=> project.Name===projectName)
    }

    const updateTodayProject = ()=>{
        getProject('Today').TaskList = []
        projectList.forEach((projectEl)=>{
            if(projectEl.Name==='This Week' || projectEl.Name==='Today') 
                return
            const todayTasks = projectEl.getTasksToday()
            todayTasks.forEach((taskEl)=>{
                const taskName = `${taskEl.Name} (${projectEl.Name})`
                getProject('Today').addTask(taskName,taskEl.Date)
            })
        })
    }

    const updateWeekProject = ()=>{
        getProject('This Week').TaskList = []

        projectList.forEach((projectEl)=>{
            if(projectEl.Name==='This Week' || projectEl.Name==='Today') 
                return
            const weekTasks = projectEl.getTasksWeek()
            weekTasks.forEach((taskEl)=>{
                const taskName = `${taskEl.Name} (${projectEl.Name})`
                getProject('This Week').addTask(taskName,taskEl.Date)
            })
        })
    }

    return {
        get ProjectList(){
            return projectList
        },
        addProject,
        removeProject,
        getProject,
        contains,
        updateTodayProject,
        updateWeekProject
    }
}

export {toDoList}