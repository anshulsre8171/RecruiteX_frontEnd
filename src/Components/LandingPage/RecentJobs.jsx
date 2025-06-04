

function RecentJobs(){

    const jobs_arr=[
        {
            img:"job-list1.png",
            jobTitle: 'Developer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list2.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '5 hours ago',
        },
        {
            img:"job-list3.png",
            jobTitle: 'Manager',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '4 hours ago',
        },
        {
            img:"job-list4.png",
            jobTitle: 'Digital Teacher',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$1500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '8 hours ago',
        }
    ]


    return (
        <>
       <div className="row jobs_outer p-2">
    <div className="col-12 col-sm-1"></div>
    <div className="col-12 col-sm-10">
        <div className="row jobchild_row pt-3">
            <span className="jobs_feature mt-4 mb-3 h5">RECENT JOB</span>
            <h1 className="jobs_h1 mb-3">Featured Jobs</h1>
            <div className="row job_outer_box px-2 m-0">
                {jobs_arr.map((item,index) => {
                    return (
                        <div className="col-12  jobcard_category pb-2" key={index}>
                            <div className="jobchild_div">
                                <div className="row p-0 m-0 border border-1 p-2 ">
                                    <div className="col-12 col-sm-2 col-md-2 p-0  m-0 content_col text-center">
                                        <div className="jobs_icon p-0 m-0 pb-1 ">
                                            <img src={item.img} alt={item.jobTitle} />
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
    </div>
    <div className="col-12 col-sm-1"></div>
</div>

        </>
    )
}

export default RecentJobs
