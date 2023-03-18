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
        initAddProjectButtons()
    }

    //Fetch Projects from the Storage and render them into the Nav Bar
    const loadProjects = ()=> {
        //Fetch Projects from the Storage
        toDoListObj.ProjectList.forEach((projectEl)=>{
            if(projectEl.Name === 'Inbox' || projectEl.Name === 'Today' || projectEl.Name === 'This Week') return
            createProject(projectEl.Name)
        })
    }


    // Highlights the project tab and Displays the relevant task items
    
    const openProject = (projectName, buttonElement)=>{

        console.log("Opening",projectName)
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

        inboxButton.addEventListener("click",(e)=>{
            openProject('Inbox',e.target)
            makeAddTaskButtonVisible()
        })

        todayButton.addEventListener("click",(e)=>{
            openProject('Today',e.target)
            makeAddTaskButtonInvisible()
        })

        weekButton.addEventListener("click",(e)=>{
            openProject('This Week',e.target)
            makeAddTaskButtonInvisible()
        })

        projectButtons.forEach((projectButton)=>{
            projectButton.addEventListener("click",(e)=>{
                if(e.target !== e.currentTarget) return
                openProject(e.target.id,e.target)
                makeAddTaskButtonVisible()
            })
        })

    }

    const initAddProjectButtons = ()=>{

        const addProjectButton = document.querySelector("#button-add-project")
        const addProjectAddButton = document.querySelector(".add-project-popup-add-button")
        const addProjectCancelButton = document.querySelector(".add-project-popup-cancel-button")

        addProjectButton.addEventListener("click",()=>{
            makeAddProjectButtonInvisible()
            makeAddProjectPopupVisible()
        })

        addProjectAddButton.addEventListener("click",addProject)

        addProjectCancelButton.addEventListener("click",()=>{
            makeAddProjectButtonVisible()
            makeAddProjectPopupInvisible()
        })
    }

    // Toggling Button Visibility

    const makeAddTaskButtonVisible = ()=>{
        document.querySelector('.button-add-task').classList.remove("invisible")
    }

    const makeAddTaskButtonInvisible = ()=>{
        document.querySelector('.button-add-task').classList.add("invisible")
    }

    const makeAddProjectButtonVisible = ()=>{
        document.querySelector('.button-add-project').classList.remove('invisible')
    }

    const makeAddProjectButtonInvisible = ()=>{
        document.querySelector('.button-add-project').classList.add('invisible')
    }

    const makeAddProjectPopupVisible = ()=>{
        document.querySelector('.add-project-input').value = ""
        document.querySelector('.add-project-popup').classList.add('active')
    }

    const makeAddProjectPopupInvisible = ()=>{
        document.querySelector('.add-project-popup').classList.remove('active')
    }

    //Creating Content HTML Files

    const createProject = (projectName)=>{
        console.log("creating",projectName)
        var user_projects = document.querySelector(".projects-list")
        user_projects.innerHTML += `
            <button class="nav-user-button" id=${projectName}>
                <div class="left-task-panel">
                    <i class="fa fa-list-check" aria-hidden="true"></i>
                    <p aria-hidden="true">${projectName}</p>
                </div>
                <div class="right-task-panel">
                    <i class="fas fa-times"></i>
                </div>
            </button>
        `
        initProjectButtons()
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

    // Creating Objects

    const addProject = ()=>{

        const projectName = document.querySelector('.add-project-input').value

        if(projectName === ""){
            alert("Project Name cannot be Empty!")
            return
        }

        if(toDoListObj.contains(projectName)){
            alert("Project Name already taken!")
            return
        }

        toDoListObj.addProject(projectName)
        createProject(projectName)
        makeAddProjectButtonVisible()
        makeAddProjectPopupInvisible()
    }

    return{
        loadHomePage
    }
}

export {Display}