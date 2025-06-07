import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

function FindJob() {

    const jobs_arr = [
        {
            img: "job-list1.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img: "job-list2.png",
            jobTitle: 'Software developer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '5 hours ago',
        },
        {
            img: "job-list3.png",
            jobTitle: 'Developer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '8 hours ago',
        },
        {
            img: "job-list4.png",
            jobTitle: 'Market Manager',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '6 hours ago',
        },
        {
            img: "job-list1.png",
            jobTitle: 'Digital creater',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '4 hours ago',
        },
        {
            img: "job-list2.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '1 hours ago',
        },
        {
            img: "job-list1.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img: "job-list2.png",
            jobTitle: 'Digital ',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '5 hours ago',
        },
        {
            img: "job-list3.png",
            jobTitle: 'Backend Developer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '8 hours ago',
        },
        {
            img: "job-list4.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '6 hours ago',
        },
        {
            img: "job-list1.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '4 hours ago',
        },
        {
            img: "job-list2.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '1 hours ago',
        }

    ]
    const [data, setData] = useState([])
    // console.log(data);

    const [raw, setRaw] = useState([])
    const [search, setSearch] = useState("")

    const fetchData = async () => {
        const response = 200
        if (response == 200) {
            setData(jobs_arr)
            setRaw(jobs_arr)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (search.length > 0) {
            let result = raw.filter((item) => {
                return item.jobTitle.toLowerCase().includes(search.toLowerCase())
            })
            if (result.length > 0) {
                setData(result)
            } else {
                 let jobTitle= "data not Match" 
                //console.log(aa,"hhhhhhhhh")
                setData([{jobTitle}])
            }
        } else {
            fetchData()
        }
    }, [search])

    return (
        <><div className="container-fluid p-0 m-0">

        
            <div className="findjob_header">

                <div className="row blur p-0 m-0 ">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="row mt-5 p-2">
                            <div className="h2 mb-4">Many jobs Available Here</div>
                            <div className="p mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil rerum sunt nemo at natus voluptates voluptatibus voluptatem similique deleniti?</div>
                            <h4>Select your Prefrenced Job</h4>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

            </div>
                <div className="row p-0 m-0">
                    <div className="col-sm-6 mx-auto mb-2 mt-2">
                        <div className="input-group">
                            <span className="input-group-text"><IoSearch /></span>
                            <input type="search" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Here" className="form-control move" />

                        </div>
                    </div>

                </div>
            <div className="row p-0 m-0">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 px-3">
                    <div className="row job_outer_box px-1 m-0">
                        {data.map((item, index) => {
                            return (
                                <div className="col-12  jobcard_category pb-2" key={index}>
                                    <div className="jobchild_div">
                                        <div className="row p-0 m-0 border border-1 p-2 ">
                                            <div className="col-12 col-sm-2 col-md-2 p-0  m-0 content_col text-center">
                                                <div className="jobs_icon p-0 m-0 pb-1 ">
                                                    <img src={item.img} alt={item.companyName} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-8 col-md-7 content_col">
                                                <div className="h3 jobs_title mt-3">
                                                    {item.jobTitle}
                                                </div>
                                                <div className="jobs_name me-5">{item.companyName}</div>
                                                <div className="jobs_location me-5">{item.location}</div>
                                                <div className="jobs_salary  me-5">{item.salary}</div>
                                            </div>
                                            <div className="col-12 col-sm-2 col-md-3 pt-3 content_col text-center">
                                                <div className="jobs_btn">{item.jobBtn}</div>
                                                <div className="jobs_time text-start ms-3 mt-2">{item.postedTime}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
            </div>
        </>
    )
}

export default FindJob