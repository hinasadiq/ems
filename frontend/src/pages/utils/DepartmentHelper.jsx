 export const columns = [
    {
        name :"S No",
        selector:(row)=>row.sno
    },
    {
        name : "Department Name",
        selector:(row)=>row.dep_name
    },
    {
        name : "Description",
        selector:(row)=>row.description
    },
    {
        name : "Action",
        selector:(row)=>row.action
    },
]
  export const DepartmentButton = () => {
    return(
        <div>
            <button>Edit</button>
            <button>Delete</button>
            </div>

    )
 }