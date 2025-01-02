//  import { useNavigate } from "react-router-dom"
//  export const columns = [
//     {
//         name :"S No",
//         selector:(row)=>row.sno
//     },
//     {
//         name : "Department Name",
//         selector:(row)=>row.dep_name
//     },
//     {
//         name : "Description",
//         selector:(row)=>row.description
//     },
//     {
//         name : "Action",
//         selector:(row)=>row.action
//     },
// ]
//   export const DepartmentButton = ({_id}) => {
//     return(
//         <div className="flex space-x-3">
//             <button className="px-3 py-1 bg-teal-600 text-white" onClick={()=>Navigate(`/admin-dashboard/department/${_id}`)}>Edit</button>
//             <button className="px-3 py-1 bg-red-600 text-white">Delete</button>
//             </div>

//     )
//  }
// import { useNavigate } from "react-router-dom";

// export const columns = [
//     {
//         name: "S No",
//         selector: (row) => row.sno,
//     },
//     {
//         name: "Department Name",
//         selector: (row) => row.dep_name,
//     },
//     {
//         name: "Description",
//         selector: (row) => row.description,
//     },
//     {
//         name: "Action",
//         selector: (row) => row.action,
//     },
// ];

// export const DepartmentButton = ({ id}) => {
//     const navigate = useNavigate(); // Correctly use the hook for navigation
// //  alert(
// //     _id);
// const handleDelete =async(Id) =>{
//     try {
//         const response = await axios.delete(`http://localhost:5000/api/department/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//         });
//         console.log("response");

//         if (response.data.success) {
//             onDepartmentDelete(id)
//         }
//     } catch (error) {
//         if (error.response) {
//             alert(error.response.data.error);
//         }

// }
//     return (
//         <div className="flex space-x-3">
//             <button
//                 className="px-3 py-1 bg-teal-600 text-white"
//                 onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
//             >
//                 Edit
//             </button>
//             <button className="px-3 py-1 bg-red-600 text-white" onClick={()=>handleDelete(Id)}>
//                 Delete
//             </button>
//         </div>
//     );

// }
// }
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno,
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name,
    },
    {
        name: "Description",
        selector: (row) => row.description,
    },
    {
        name: "Action",
        selector: (row) => row.action,
    },
];

export const DepartmentButton = ({ _id, onDepartmentDelete }) => { // Ensure onDepartmentDelete is passed as a prop
    const navigate = useNavigate();

    // const handleDelete = async (id) => {
    //     const confirm = window.confirm("Do you want to delete");
    //     if (confirm){
    //     try {
    //         const response = await axios.delete(`http://localhost:5000/api/department/${_id}`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             },
    //         });

    //         if (response.data.success) {
    //             onDepartmentDelete(_id);
    //            // navigate("/admin-dashboard/department");
    //         }
    //     } catch (error) {
    //         if (error.response) {
    //             alert(error.response.data.error);
    //         }
    //     }
    // }
    // };
    const handleDelete = async (id) => {
        console.log("Delete button clicked");
        const confirm = window.confirm("Do you want to delete");
        if (confirm) {
            try {
                console.log("Sending delete request for id:", id);
                const response = await axios.delete(`http://localhost:5000/api/department/${_id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                console.log("Response received:", response);
    
                if (response.data.success) {
                    onDepartmentDelete(_id);
                    console.log("Department deleted successfully");
                }
            } catch (error) {
                console.error("Error occurred:", error);
                if (error.response) {
                    alert(error.response.data.error);
                }
            }
        }
    };
    
    return (
        <div className="flex space-x-3">
            <button
                className="px-3 py-1 bg-teal-600 text-white"
                onClick={() => navigate(`/admin-dashboard/department/${_id}`)} // Use id instead of _id
            >
                Edit
            </button>
            <button className="px-3 py-1 bg-red-600 text-white" onClick={(_id) => handleDelete(_id)}> 
                Delete
            </button>
        </div>
    );
};