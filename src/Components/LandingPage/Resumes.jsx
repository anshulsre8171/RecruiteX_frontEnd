import { Link } from "react-router-dom";

function Resumes()
{
    return(
        <>
        <div className="row resume_image">
    <div className="blur">
        <div className="row p-2 pt-4">
            {/* Use responsive column classes */}
            <div className="col-12 col-sm-3"></div>
            <div className="col-12 col-sm-6 text-center">
                <div className="mt-5 text-light fs-4">Featured Tour Package</div>
                <div className="h1 mt-2 text-light">Make A Different Online Resume</div>
                <button className="btn upload_resume mt-5">                 
                    <Link className="nav-link " aria-current="page" to="/seeker/login">
                    Upload Your CV
                    </Link>                    
                    </button>
            </div>
            <div className="col-12 col-sm-3"></div>
        </div>
    </div>
</div>
        </>
    )
}
export default Resumes;