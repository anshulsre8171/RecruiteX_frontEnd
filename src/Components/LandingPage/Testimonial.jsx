import Testimonials from 'react-testimonials';
function Testimonial() {

    const img1 = 'testimonial-founder.png'; // Put the Image URLs
    const img2 = 'home-blog2.jpg'; // Put the Image URLs
    const img3 = 'home-blog1.jpg'; // Put the Image URLs
    const img4 = 'testimonial-founder.png'; // Put the Image URLs
    const img5 = 'home-blog2.jpg'; // Put the Image URLs
    

    const review1=[img1, "Margare Lason", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! . Eat clean it will care for you and workout hard."];
    const review2=[img2, "Michael Olivia", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you."];
    const review3=[img3, "Lawson William", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! .Eat clean it will care for you and workout hard."];
    const review4=[img4, "James Margaret", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you."];
    const review5=[img5, "William Lawon", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! Eat clean it will care for you and workout hard."];

  const items=[review1,review2,review3,review4,review5,review3,review2,review4]
    return (<>
        <div className="row testimonial_outer mt-4" >
           
            <div className="col-sm-10 mx-auto">
                <div className="row main_testimonial p-0">
                <Testimonials items={items} />
                </div>
            </div>
        
        </div>
    </>)
}

export default Testimonial;