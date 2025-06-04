



function BlogSection() {
  return (
    <>
      <div className="container blog-container p-3">
        <div className="row text-center">
          <p className="blog-subheading">OUR LATEST BLOG</p>
          <h1 className="blog-heading">Our recent news</h1>
        </div>
        <div className="row blog-row mx-auto px-3 px-md-5">
          <div className="col-sm-12 col-md-5 blog-card">
            <div className="blog-image-wrapper">
              <div className="date-badge1 w-25">
                <span className="mt-2">24</span><br/>
                <span>Now</span>
              </div>
              <img src="/home-blog1.jpg" alt="Blog 1" className="blog-img" />
            </div>
            <p className="blog-category mt-2">Break into the tech world with expert tips..</p>
            <h6 className="">
              Footprints in Time is perfect House in Kurashiki....
            </h6>
            <button className="blog-btn">READ MORE</button>
          </div>
          <div className="col-sm-12 col-md-5 blog-card">
            <div className="blog-image-wrapper">
              <div className="date-badge1 w-25">
                <span className="mt-2">24</span><br/>
                <span>Now</span>
              </div>
              <img src="home-blog2.jpg" alt="Blog 2" className="blog-img" />
            </div>
            <p className="blog-category mt-2"> Stay updated on the latest jobs, tools, and industry.</p>
            <h6 className="">
              Looking for your dream job? Explore top career tips...
            </h6>
            <button className="blog-btn">READ MORE</button>
          </div>
        </div>
      </div>



    </>
  )
}

export default BlogSection