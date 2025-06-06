import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import necessary icons

function Footer() {
    return (
        <>
            <div className="container-fluid px-1 py-3 m-0 top_footer-container">
                <div className="container" style={{ paddingTop: "75px" }}>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 pe-4 topFooter_content mb-4">
                            <div className="h4 text-light">ABOUT US</div>
                            <p className="mt-4">Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 pe-4 topFooter_content mb-4">
                            <div className="h4 text-light">CONTACT INFO</div>
                            <p className="mt-4">Address: Lucknow, <br /> Uttar Pradesh, 226022. <br /> <br /> Phone:+91 xxxxxxxxxx <br />Email: an***@gmail.com</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 pe-4 topFooter_content mb-4">
                            <div className="h4 text-light">IMPORTANT LINK</div>
                            <p className="mt-4">View Project <br /> Contact us <br /> Testimonial <br /> Properties <br /> Support</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 pe-4 topFooter_content mb-4">
                            <div className="h4 text-light">NEWSLETTER</div>
                            <p className="mt-4">Heaven frucvitful doesn't cover lesser in  days appear creeping.</p>
                            <div className="input-group flex-nowrap">
                                <input
                                    type="email" disabled
                                    className="form-control"
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                    aria-describedby="addon-wrapping"
                                />
                                <span className="footer_btn" id="addon-wrapping">
                                    <BsFillSendFill />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row text-start mt-1 mb-2 p-2"> 
                        <div className="col-12 col-sm-6 col-md-3">
                            <img src="logo.png" alt="Logo" className="rounded-2 bg-light mb-2 navbar-brand" height={"20px"}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 foot_content">
                            <div className="h6 text-light">5000+ <span style={{ color: "#eeeeee", fontSize:".91rem", fontWeight: 300 }}>Visitors</span></div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 foot_content">
                            <div className="h6 text-light">451+ <span style={{ color: "#eeeeee", fontSize: ".91rem", fontWeight: 300 }}>Developers</span></div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 foot_content">
                            <div className="h6 text-light">568+ <span style={{ color: "#eeeeee", fontSize: ".91rem", fontWeight: 300 }}>Team members</span></div>
                        </div>
                    </div>
                </div>

                <hr className="mt-4" style={{ color: "gray" }} />
                <div className="row text-secondary mx-0">
                    <div className="col-sm-6 text-center ps-4 "style={{fontSize:12}}>Copyright &copy; 2024 RecruiterX | This is developed by Anshul Sharma...</div>
                    <div className="col-sm-6 pe-sm-5 mt-3 m-sm-0 text-center text-sm-end">
                        <a href="https://www.facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" className="me-3" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" className="me-3" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Footer