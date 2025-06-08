import { useEffect, useState } from "react"
import { swalFire } from '../../Helpers/Swalfire';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import axios from "axios"
const AdminRecruiter=({ setLoading })=> {
    const API_URL = import.meta.env.VITE_APP_API_URL
    const [recruiter, setrecruiter] = useState([])
    const [localLoading, setLocalLoading] = useState(true);
    const fetchData = async () => {
        try {
            if (setLoading){
                //console.log("Seeker setLoading(true)");
                 setLoading(true);
            };
            setLocalLoading(true);
            const response = await axios.get(`${API_URL}/api/admin-recruiterlist`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.data.code == 200) {
                setrecruiter(response.data.data)
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLocalLoading(false); 
            if (setLoading) setLoading(false);
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
    const handleDelete = async (_id) => {
        const token = JSON.parse(localStorage.getItem("token"))
        console.log(token,"jjjj");
        
        const result = await axios.delete(`${API_URL}/api/deleterec/${_id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
        console.log(result);
        if (result) {
            toast.success(result.data.message)
        }
        fetchData()
    }

    const handleEdit = async (item) => {
        console.log(item);

        swalFire("Success", "Data Edit Succesfull", "success")
    }
    
    useEffect(() => {
        fetchData()
    },[])

    if (localLoading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading Recruiter Lists...</p>
            </div>
        );
    }
    return (
        <>
            <div className="container">
                <ToastContainer
                    //stacked
                    position="top-right"
                    autoClose={4000}

                    // hideProgressBar={false}
                    newestOnTop={false}
                    //  closeOnClick={false}
                    //  rtl={false}
                    pauseOnFocusLoss
                    draggableDirection="y"
                    // pauseOnHover
                    theme="colored"
                // transition="Bounce"
                />
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
                                            <button className="btn btn-sm btn-danger mx-1" onClick={() => handleDelete(item._id)}>
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
