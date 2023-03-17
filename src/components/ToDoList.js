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

    const updateTodayProject = ()=>{
        getProject('Today').TaskList = []

        projectList.forEach((projectEl)=>{
            if(projectEl.getName()==='This Week' || projectEl.getName()==='Today') 
                return
            const todayTasks = project.getTasksToday()
            todayTasks.forEach((taskEl)=>{
                const taskName = `${taskEl.getName()} (${projectEl.getName()})`
                getProject('Today').addTask(taskName,taskEl.getDate())
            })
        })
    }

    const updateWeekProject = ()=>{
        getProject('This Week').TaskList = []

        projectList.forEach((projectEl)=>{
            if(projectEl.getName()==='This Week' || projectEl.getName()==='Today') 
                return
            const weekTasks = project.getTasksWeek()
            weekTasks.forEach((taskEl)=>{
                const taskName = `${taskEl.getName()} (${projectEl.getName()})`
                getProject('This Week').addTask(taskName,taskEl.getDate())
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
        updateTodayProject,
        updateWeekProject
    }
}

export {toDoList}