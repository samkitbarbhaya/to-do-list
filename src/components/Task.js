
const task = (name,date) => {

    let dueDate = date

    const getFormattedDate = ()=>{
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`
    }
    
    return {
        get Name(){
            return name
        },
        set Name(taskName){
            name = taskName
        },
        get Date(){
            return dueDate
        },
        set Date(taskDueDate){
            dueDate = taskDueDate
        }
    }
}
 
export {task}