function About() {

    const about_arr = [
        {
            img: "job-list1.png",
            name: 'Arlene Mcoy',
            title: 'Frontend Devloper',
            location: 'New Yark, US',
            review: '$3500 - $4000',

        },
        {
            img: "job-list2.png",
            name: 'Floyed Milws',
            title: 'UI/UX designer',
            location: 'Athens, Greece',
            review: '$3500 - $4000',

        },
        {
            img: "job-list1.png",
            name: 'Devon Lane',
            title: 'Frontend Devloper',
            location: 'Chicago, US',
            review: '$3500 - $4000',

        },
        {
            img: "job-list2.png",
            name: 'Jerome Bell',
            title: 'Backend Devloper',
            location: 'Mumbai, India',
            review: '$3500 - $4000',

        }
    ]




    return (
        <>
            <div className="container-fluid">
                <div  className="about_header row"> 
                <div className="col-12 about_header_content text-center pt-5">
                    <h1>About Us</h1>
                    <h5>Get the latest jobs, updates, and tips</h5>
                </div>
                </div>

            <div className="row">
                <div className="col-0 col-sm-1"></div>
                <div className="col-12 col-sm-10 p-3">
                    <div className="row about_intro pt-4 text-md-start p-2">
                        <span style={{color: "#fc82a2" ,fontSize:"1rem",fontWeight:600}}>OUR COMPANY</span>
                        <h2><b>About Our Company</b></h2>
                        <p style={{ textAlign: 'justify' ,fontSize:".9rm" }}>
                            TalentHunt Job Portal is a specialized platform designed to connect job seekers with potential employers.
                            It serves as a bridge between professionals looking for new opportunities and companies searching for skilled talent.
                            TalentHunt streamlines the job search and recruitment process, making it easier for both sides to find the perfect match efficiently.
                        </p>
                        <br />
                        <div className="about_image text-center">
                            <img src="img-about1.png" alt="About Company" className="img-fluid " />
                        </div>
                    </div>
                    <div className="row pt-1 p-2">
                        <h2><b>What we can do?</b></h2>
                        <p style={{ textAlign: 'justify',fontSize:".9rm" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit,
                            assumenda laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
                        </p>
                        <p style={{ textAlign: 'justify' ,fontSize:".9rm"}}>
                            Doloremque quo sapiente accusantium, aut tempora, incidunt nulla iusto magni ex maiores qui nemo consectetur voluptate.
                        </p>
                        <p style={{ textAlign: 'justify' ,fontSize:".9rm" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit,
                            assumenda laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
                        </p>
                    </div>
                </div>
                <div className="col-0 col-sm-1"></div>
            </div>

            <br />

            <div className="row">
                <div className="col-0 col-sm-1"></div>
                <div className="col-12 col-sm-10 px-4 team_header">
                    <span style={{color: "#fc82a2" ,fontSize:"1rem",fontWeight:600}}>OUR COMPANY</span>
                    <h2><b>Meet Our Team</b></h2>
                    <p style={{ textAlign: 'justify',fontSize:".9rm" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit,
                        assumenda laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
                    </p>

                    <div className="row justify-content-center">
                        {about_arr.map((card) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3 my-2 team_card">
                                    <div className="teamchild_div text-center">
                                        <div className="team_icon">
                                            <img src={card.img} alt="Team Member" className="img-fluid" />
                                        </div>
                                        <div className="team_name">{card.name}</div>
                                        <div className="team_content">{card.title}</div>
                                        <div className="team_content">{card.location}</div>
                                        <div className="team_review">{card.review}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-0 col-sm-1"></div>
            </div>

            <div className="row p-2">
                <div className="col-0 col-sm-1"></div>
                <div className="col-12 col-sm-10 pt-3 ">
                    <h2>News and Blog</h2>
                    <p  className="pb-2 mb-3" >Get the latest news, updates, and blogs</p>
                    <div className="row blog_row mt-3 py-3 g-4">
                        <div className="col-12 col-md-6 px-2 py-1 h-100">
                            <div className="card p-2">
                        <div className="blog-image-wrapper">
                        <div className="date-badge1 w-25">
                           <span className="mt-2">24</span><br/>
                           <span>Now</span>
                           </div>
                            <img src="home-blog1.jpg" alt="Blog" className="img-fluid blog-img" />
                              </div>
                              <p className="blog-category mt-2">Break into the tech world with expert tips..</p>
                            <h6>Footprints in Time is the perfect House in Kurashiki</h6>
                            <button className="blog-btn mt-3" type="button">READ MORE</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-2 py-1 h-100">
                            <div className="card p-2">
                        <div className="blog-image-wrapper">
                        <div className="date-badge1 w-25">
                           <span className="mt-2">24</span><br/>
                           <span>Now</span>
                           </div>
                            <img src="home-blog2.jpg" alt="Blog" className="img-fluid blog-img" />
                            </div>
                            <p className="blog-category mt-2">Break into the tech world with expert tips..</p>
                           <h6>Footprints in Time is the perfect House in Kurashiki</h6>
                            <button className="blog-btn mt-3" type="button">READ MORE</button>
                        </div></div>
                    </div>
                </div>
                <div className="col-0 col-sm-1"></div>
            </div> 
        </div>

        </>
    )
}

export default About