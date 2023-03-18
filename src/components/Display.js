import { compareAsc } from "date-fns"
import { project } from "./Project"
import { task } from "./Task"
import { toDoList } from "./ToDoList"

const Display = ()=>{

    const toDoListObj = toDoList()
    const t1 = task("T1")
    const t2 = task("T2")

    const p1 = project("P1")
    toDoListObj.addProject(p1.Name)

    toDoListObj.getProject(p1.Name).addTask(t1.Name)
    toDoListObj.getProject(p1.Name).addTask(t2.Name)

    const loadHomePage = ()=> {
        loadProjects()
        initProjectButtons()
        openProject('Inbox',document.querySelector('#inbox-button'))
    }

    //Fetch Projects from the Storage and render them into the Nav Bar
    const loadProjects = ()=> {
        //Fetch Projects from the Storage
        toDoListObj.ProjectList.forEach((projectEl)=>{
            if(projectEl.Name === 'Inbox' || projectEl.Name === 'Today' || projectEl.Name === 'This Week') return
            createProject(projectEl.Name)
        })
    }

    const openProject = (projectName, buttonElement)=>{

        //Fetch All Nav Buttons and remove active class from them
        const defaultButtons = document.querySelectorAll('.nav-default-button')
        const userButtons = document.querySelectorAll('.nav-user-button')
        const allButtons = [...defaultButtons, ...userButtons]
        allButtons.forEach((button)=> button.classList.remove('active'))
        buttonElement.classList.add('active')

        //Fetch Project with name 'projectName' from the Storage
        const project = toDoListObj.ProjectList.find((projectEl)=>{
            return projectEl.Name === projectName
        })

        //Reset the Task List Before Rendering new List Items
        var projectTasks = document.querySelector(".task-list")
        projectTasks.innerHTML = ""

        var projectTitle = document.querySelector("#project-title")
        projectTitle.textContent = projectName

        project.TaskList.forEach((taskEl)=>{
            createTask(taskEl.Name,taskEl.Date)
        })
    }


    //Event Listeners

    const initProjectButtons = ()=>{

        const inboxButton = document.querySelector("#inbox-button")
        const todayButton = document.querySelector("#today-button")
        const weekButton =  document.querySelector("#this-week-button")
        const projectButtons = document.querySelectorAll(".nav-user-button")
        const addProjectButton = document.querySelector("#button-add-project")

        inboxButton.addEventListener("click",(e)=>{
            openProject('Inbox',e.target)
            document.querySelector('.button-add-task').classList.remove("invisible")
        })

        todayButton.addEventListener("click",(e)=>{
            openProject('Today',e.target)
            document.querySelector('.button-add-task').classList.add("invisible")
        })

        weekButton.addEventListener("click",(e)=>{
            openProject('This Week',e.target)
            document.querySelector('.button-add-task').classList.add("invisible")
        })

        projectButtons.forEach((projectButton)=>{
            projectButton.addEventListener("click",(e)=>{
                openProject(e.target.id,e.target)
                document.querySelector('.button-add-task').classList.remove("invisible")
            })
        })

        addProjectButton.addEventListener("click",()=>{
            document.querySelector('.button-add-project').classList.add('invisible')
            document.querySelector('.add-project-popup').classList.add('active')
        })
    }

    //Creating Content HTML Files

    const createProject = (projectName)=>{
        var user_projects = document.querySelector(".projects-list")
        user_projects.innerHTML += `
            <button class="nav-user-button active" id=${projectName}>
                <div class="left-task-panel">
                    <i class="fa fa-list-check"></i>
                    <p>${projectName}</p>
                </div>
                <div class="right-task-panel">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </div>
            </button>
        `
    }

    const createTask = (taskName, taskDate)=>{
        var project_tasks = document.querySelector(".task-list")
        project_tasks.innerHTML+=`
            <button class="button-task">
            <div class="left-task-panel">
                <i class="far fa-circle" aria-hidden="true"></i>
                <p class="task-content">${taskName}</p>
                <input type="text" class="input-task-name">
            </div>
            <div class="right-task-panel">
                <p class="due-date">${taskDate}</p>
                <input type="date" class="input-due-date">
                <i class="fas fa-times" aria-hidden="true"></i>
            </div>
            </button>
        `
    }

    return{
        loadHomePage
    }
}

export {Display}