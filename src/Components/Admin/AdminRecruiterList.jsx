import { useEffect, useState } from "react"
import { swalFire } from '../../Helpers/Swalfire';

import axios from "axios"
function AdminRecruiter() {
    const API_URL = import.meta.env.VITE_APP_API_URL
    const [recruiter, setrecruiter] = useState([])
    useEffect(() => {
        fetchData()

    }, [])

    const fetchData = async () => {
        const response = await axios.get(`${API_URL}/api//admin-recruiterlist`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.data.code == 200) {
            setrecruiter(response.data.data)
        }
    }

    const handleBlock = async (item) => {
        const payload = {
            status: item.isBlock ? false : true
        }
        const response = await axios.put(`${API_URL}/api/admin-recruiterblock/${item._id}`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.data.code == 200) {
            fetchData()
            // alert("Status Updaetd Successfully..")
            swalFire("Action", "Action Updated successfully", "success")

        }
    }
   const handleDelete=async(item)=>{
    console.log(item);
    
    swalFire("Alert","Data Delete Succesfull", "success")
   }
   const handleEdit=async(item)=>{
    console.log(item);
    
    swalFire("Success","Data Edit Succesfull", "success")
   }
    return (
        <>
<div className="container">
    <h4 className="text-center my-4">Recruiter List</h4>
    <div className="table-responsive">
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    recruiter.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{item.location}</td>
                            <td>
                              <button className="btn btn-sm btn-warning mx-1" onClick={() => handleBlock(item)}>
                                    {item.isBlock ? "UnBlock" : "Block"}
                                </button>
                                <button className="btn btn-sm btn-danger mx-1" onClick={() => handleDelete(item)}>
                                Delete
                                </button>
                                <button className="btn btn-sm btn-info mx-1" onClick={() => handleEdit(item)}>
                                Update
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
</div>

        </>
    )
}

export default AdminRecruiter
