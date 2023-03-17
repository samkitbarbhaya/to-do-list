
const task = (name) => {
    this.dueDate = "No Date"
    this.name = name
    const getName = ()=> this.name
    const setName = (name)=> this.name = name
    const getDate = ()=> this.dueDate
    const setDate = (dueDate)=> this.dueDate = dueDate
    const getFormattedDate = ()=>{
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`
    }
    return {
        getName,
        setName,
        getDate,
        setDate,
        getFormattedDate
    }
}
 
export {task}