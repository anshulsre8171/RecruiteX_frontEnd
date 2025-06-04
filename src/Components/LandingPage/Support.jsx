import { Link } from 'react-router-dom';
function Support(){
    return (
        <>
   <div className="container-fluid support_container">
    <div className="row px-4">
        {/* Left content section */}
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-5 m-0 p-0 me-2">
            <div className="mt-5 supportcontent_section" style={{color: "#fc82a2", fontWeight:"500",fontSize:"18px" }}>
                WHAT WE ARE DOING
            </div>
            <div className="h3 mt-4  supportcontent_section" style={{ color: "#28395a",fontSize:"18px" }}>
                24k Talented people are getting jobs
            </div>
            <div className="supportcontent_section mt-4 p-2">
                <b>
                    Mollit anim laborum duis au dolor in voluptate velit 
                    ess cillum dolore eu lore dsu quality mollit anim
                    laborumuis au dolor in voluptate velit cillum. Mollit anim laborum duis au dolor in voluptate velit 
                    ess cillum dolore eu lore dsu quality mollit anim
                    laborumuis au dolor in voluptate velit cillum.
                </b>
            </div>
            <div className="supportcontent_section mt-4 p-2">
                Mollit anim laborum. Duis aute irufo dhjkolohr in re voluptate 
                velit esscillumlore eu quife nrulla parihatur. Excghcepteur 
                signjnt occa cupidatat non inulpadeserunt mollit aboru.
                temnthp incididunt ut labore mollit anim laborum suis aute 
                velit esscillumlore eu quife nrulla parihatur.
                temnthp incididunt ut labore mollit anim laborum suis aute 
                velit esscillumlore eu quife nrulla parihatur.
            </div>
            <button className="btn_support mt-5" type="button">              
            <Link className="nav-link " aria-current="page" to="/recruiter/login">
             Post a job
            </Link>  
            </button>
        </div>

        {/* Right image section */}
        <div className="col-12 col-md-5 supportImage_section text-center mt-4">
            <div className="supportImage_sectionContent p-3">
                <p className="m-0 p-0">Since</p>
                <p className="support_sinceSection m-0 p-0">2024</p>
            </div>
        </div>
        <div className="col-12 col-md-1"></div>

    </div>
</div>

        </>
    )
}

export default Support