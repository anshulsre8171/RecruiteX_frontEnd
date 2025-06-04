import { GoArchive } from "react-icons/go";
import { FaRegIdCard } from "react-icons/fa";
import { SiSimplelogin } from "react-icons/si";
function Apply() {
    const work=[
                                    {
                                        icon: <FaRegIdCard />,
                                        title: "1. Register",
                                        description: "Sign up to create your profile and unlock access to job applications.Find new job and update your resume."
                                    },
                                    {
                                        icon: <GoArchive />,
                                        title: "2. Login",
                                        description: "Log into your account to track your application and update details.Connect with Tech professionl and HR."
                                    },
                                    {
                                        icon: <SiSimplelogin />,
                                        title: "3. Search And Apply",
                                        description: "Browse job listings, filter by category, and submit your application easily.Gain new achivment and share your Feedback."
                                    },
                                ]
    return (
        <>
            <div className="row apply_image text-center pt-2">
                <div className="col-12">
                    <div className="row">
                        <div className="text_color mt-4 h5">Apply Process</div>
                        <div className="fs-1 text-light">How It Works</div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        {/* Use responsive column classes */}
                        <div className="col-12 col-md-10">
                            <div className="row justify-content-center px-3">
                                {/* Adjust each step's column size for better responsiveness */}
                                {
                                    work.map((step,idx)=>{
                                        return(<>
                                         <div key={idx} className="col-12 col-sm-6 col-md-6 col-xl-4 px-3 ">
                                        <div className="box_border h-100">
                                            <div className="job_search text-center p-3">
                                                <h1 className="child_div_apply_ic">{step.icon}</h1>
                                                <div className="h5 child_div_apply mt-3 ">{step.title}</div>
                                                <div className="tex px-3 mt-2" >{step.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                        </>)              
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}
export default Apply;
