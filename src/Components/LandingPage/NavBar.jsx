import { useEffect, useState,useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useLocation
import { FaHome,FaBriefcase, FaCheckCircle, FaInfoCircle, FaPhoneAlt,  FaUserShield, FaUserTie, FaUser,FaUserPlus, FaUserAlt, FaUsers,  FaSignOutAlt } from "react-icons/fa";

function NavBar() {

  const navRef = useRef();
  // Close navbar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse?.classList.contains('show')) {
          collapse.classList.remove('show');
        }}
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const [data, setData] = useState("");
  const [userType, setUserType] = useState("");
  const nav = useNavigate();    
   const API_URL=import.meta.env.VITE_APP_API_URL
   //const API="http://localhost:9000"


  useEffect(() => {
    const temData = JSON.parse(localStorage.getItem("data"));
    setData(temData);
    const temUserType = JSON.parse(localStorage.getItem("userType"));
    setUserType(temUserType);
  }, [location.pathname]); 

  const adminLogout = () => {
     localStorage.removeItem("data");
     localStorage.removeItem("userType");
    nav("/admin/login"); 
  };

  const seekerLogout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("userType");
   nav("/seeker/login"); 
 };
 const recruiterLogout = () => {
  localStorage.removeItem("data");
  localStorage.removeItem("userType");
 nav("/recruiter/login"); 
};

if (userType === "admin") {
  return (
    <>
      <div className="container-fluid navbar_main_row mb-1 px-0 sticky-top" ref={navRef}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 px-3">
              <Link className="navbar-brand" to="/">
                <img className='nav_bar_logo' src={`${API_URL}/upload/${data.img}`} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/admin">
                    <FaHome className="menu-icon" />&nbsp;Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/admin/seekerlist">
                    <FaUsers className="menu-icon" />&nbsp;Seeker List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/admin/recruiterlist">
                    <FaUserTie className="menu-icon" />&nbsp;Recruiter List
                    </Link>
                  </li> 
                  <li className="nav-item" onClick={adminLogout}>
                    <Link className="nav-link nav_font d-flex align-items-center gap-1" aria-current="page">
                    <FaSignOutAlt className="menu-icon" />&nbsp;LogOut
                    </Link>
                  </li>
                </ul>
              </div>
          </nav>
      </div>
    </>
  );
} else if (userType === "seeker") {
  return (
    <>
      <div className="container-fluid navbar_main_row mb-1 px-0 sticky-top" ref={navRef}> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 px-3">
              <Link className="navbar-brand" to="/">
              <img className='nav_bar_logo' src={`${API_URL}/upload/${data.img}`} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/seeker">
                    <FaHome className="menu-icon" />&nbsp;Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/seeker/jobapply">
                    <FaBriefcase className="menu-icon" />&nbsp;Apply&nbsp;Job
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/seeker/appliedjob">
                    <FaCheckCircle className="menu-icon" />&nbsp;Applied&nbsp;Job
                    </Link>
                  </li> 
                  <li className="nav-item" onClick={seekerLogout}>
                    <Link className="nav-link nav_font d-flex align-items-center gap-1" aria-current="page">
                    <FaSignOutAlt className="menu-icon" />&nbsp;LogOut
                    </Link>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
    </>
  );
} else if (userType === "recruiter") {
  return (
    <>
      <div className="container-fluid navbar_main_row mb-1 px-0 sticky-top" ref={navRef}>
          <nav className="navbar navbar-expand-lg navbar-light  bg-light p-0 px-3">
              <Link className="navbar-brand" to="/">
              <img className='nav_bar_logo' src={`${API_URL}/upload/${data.img}`} />
            
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/recruiter">
                    <FaHome className="menu-icon" />&nbsp;Dashboard
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/recruiter/PostJob">
                    <FaBriefcase />&nbsp;Job&nbsp;Post
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/recruiter/postedjob">
                    <FaUser className="menu-icon" />&nbsp;PostedJobs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page" to="/recruiter/appliedjob">
                    <FaCheckCircle className="menu-icon" />&nbsp;Applied&nbsp;Job
                    </Link>
                  </li>
                  
                  <li className="nav-item" onClick={recruiterLogout}>
                    <Link className="nav-link n nav_font d-flex align-items-center gap-1" aria-current="page">
                    <FaSignOutAlt className="menu-icon" />&nbsp;LogOut
                    </Link>
                  </li>
                </ul>
              </div>          
          </nav>
        </div>
    </>
  );
} else {
  return (
    <>
      <div className="container-fluid navbar_main_row sticky-top px-0" ref={navRef}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 px-3">
              <Link className="navbar-brand pe-4" to="/">
                <img src="/logo.png" alt="logo" height={"45px"} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav_font overflow-hidden">
                  <li className="nav-item">
                    <Link className="nav-link n ms-4 me-4 d-flex align-items-center gap-1" aria-current="page" to="/">
                    <FaHome />&nbsp;Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n me-4 d-flex align-items-center gap-1" to="/findjob">
                    <FaBriefcase />&nbsp;Find&nbsp;a&nbsp;Job
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n me-4 d-flex align-items-center gap-1" to="/about">
                    <FaInfoCircle />&nbsp;About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link n me-4 d-flex align-items-center gap-1" to="/contact">
                    <FaPhoneAlt />&nbsp;Contact
                    </Link>
                  </li>
                </ul>
                <div className="dropdown ms-auto me-2 mb-1">
                  <button
                    className="btn btn-outline-primary dropdown-toggle custom-btn p-1"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Registration</b>
                  </button>
                  <ul className="dropdown-menu custom-dropdown p-0" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="recruiter/register">
                      <FaUserPlus />&nbsp;Recruiter
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/seeker/register">
                      <FaUserAlt />&nbsp;Job&nbsp;Seeker
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2 mb-1">
                  <button
                    className="btn btn-outline-primary dropdown-toggle custom-btn px-3 py-1"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Login</b>
                  </button>
                  <ul className="dropdown-menu custom-dropdown dropdown-menu-lg-end p-0" aria-labelledby="dropdownMenuButton2">
                    <li>
                      <Link className="dropdown-item" to="/admin/login">
                      <FaUserShield />&nbsp;Admin&nbsp;Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/recruiter/login">
                      <FaUserTie />&nbsp;Recruiter&nbsp;Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/seeker/login">
                      <FaUser />&nbsp; Seeker&nbsp;Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>        
          </nav>       
      </div>
    </>
  );
}

}

export default NavBar;