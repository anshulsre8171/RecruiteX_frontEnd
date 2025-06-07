import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { swalFire } from "../../Helpers/Swalfire";
import { IoSearch } from "react-icons/io5";


function SeekerApplyJobList(){
     const API_URL=import.meta.env.VITE_APP_API_URL
    const [dataId,setData]=useState()
    const [raw, setRaw] = useState([])
    const [search, setSearch] = useState("")
    const [jobData,setJobData]=useState([])
    useEffect(()=>{
        const temData=JSON.parse(localStorage.getItem("data"));
        setData(temData)
            getData()
         
    },[]) 

 
    const getData=async()=>{
       
     const response= await axios.get(`${API_URL}/api/seeker-joblist`,{
            headers:{
                "Content-Type":"application/json"
            }
          })
        if(response.data.code==200){
            setJobData(response.data.data)
            setRaw(response.data.data)


        }  

    }
const handleApply=async(element)=>{
     const companyId=element.companyId;
     const jobId=element._id;
     const userId=dataId._id;
     const payload={
        companyId:companyId,
        userId:userId,
        jobId:jobId
     }
   const response=await axios.post(`${API_URL}/api/seeker-apply`,payload,{
            headers:{
            "Content-Type":"application/json"   
            }
        })  
        if(response.data.code==200){
            // alert("Job Applied Successfully")
            swalFire("Apply", "Job Applied SuccessFull !.", "success")

        }
        else if(response.data.code==301){
            swalFire("Alert", "You have already applied for this role !.", "warning")
            // alert("You have already applied for this role");
        }

}

    useEffect(() => {
        if (search.length > 0) {
            let result = raw.filter((item) => {
                return item.category.toLowerCase().includes(search.toLowerCase())
            })
            if (result.length > 0) {
                setJobData(result)
            } else {
                 let category= "data not Match" 
                //console.log(aa,"hhhhhhhhh")
                setJobData([{category}])
            }
        } else {
            getData()
        }
    }, [search])

    return (<>
        <div className="container my-3">
                <div className="row p-0 m-0">
                    <div className="col-sm-6 mx-auto mb-2 mt-2">
                        <div className="input-group">
                            <span className="input-group-text"><IoSearch /></span>
                            <input type="search" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Here" className="form-control move" />

                        </div>
                    </div>

                </div>               
                <div className="row job_outer_box px-1 m-0 mx-5"> 

                {jobData.map((el) => { 
                    // console.log(el,"###########################################")
                    return ( 
                        <div className="card p-3 mb-3 postedjob_card">
                            <div className="row d-flex justify-content-center align-items-center">
                            {/* Logo Column */}
                            {/* <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <img src={`${API_URL}/upload/${el.logo}`} alt="Company Logo" className="img-fluid bg-dark" style={{ maxHeight: '100px' }} />
                            </div> */}

                            {/* Company Name, Job Title, and Job Type Column */}
                            <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                                <h5 className='postedjob_h'> {el.name}</h5>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobTitle}</span></div>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobType}</span></div>
                            </div>

                            {/* Job Category, Location, and Salary Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Category: <span className='postedjob_p1'> {el.category}</span></div>
                                <div className='postedjob_p2 mb-2'>Location: <span className='postedjob_p1'> {el.jobLocation}</span></div>
                                <div className='postedjob_p2 mb-2'>Salary: <span className='postedjob_p1'> {el.salary}</span></div>
                            </div>

                            {/* Apply Date and Vacancies Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Vacancies: <span className='postedjob_p1'> {el.vacancies}</span></div>
                                <div className='postedjob_p2 mb-2'>Apply By: <span className='postedjob_p1'> {el.applyDate}</span></div>
                                 <input className='form_button mt-3' onClick={()=>handleApply(el)} type='submit' value='APPLY NOW' style={{width:'150px', fontSize:"0.8em"}}/> 
                            </div>
                        </div>
                    </div>                                           

                     
                    )
                })}
            </div>
        </div>
     </>)
}

export default SeekerApplyJobList; 