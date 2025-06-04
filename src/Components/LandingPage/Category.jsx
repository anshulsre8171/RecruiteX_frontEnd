import { FaUserSecret } from "react-icons/fa";
 import { TbDeviceDesktopStar } from "react-icons/tb";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { GiCircuitry } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";


function Category(){

    const category_arr=[
        {
            img:<FaUserSecret/>,
            title:"Design & Creative",
            count:"(653)"
        },
        {
            img:<TbDeviceDesktopStar/>,
            title:"Design & Devlopment",
            count:"(658)"
        },
        {
            img:<BsFillFileEarmarkBarGraphFill/>,
            title:"Sales & Marketing",
            count:"(658)"
        },
        {
            img:<TbDeviceMobileCog/>,
            title:"Mobile Application",
            count:"(658)"
        },
        {
            img:<GrUserWorker/>,
            title:"Construction",
            count:"(658)"
        },
        {
            img:<GiCircuitry/>,
            title:"Information Technology",
            count:"(658)"
        },
        {
            img:<BsFillBuildingsFill/>,
            title:"Real Estate",
            count:"(658)"
        },
        {
            img:<MdOutlineLibraryBooks/>,
            title:"Content Writing",
            count:"(658)"
        }
    ]
 return(<>
<div className="row category_outer mb-0 ">
  <div className="col-12 ">
    <div className="row child_row pt-5">

      <h4 className="category_feature mb-3 text-center">FEATURED TOUR PACKAGES</h4>
      <h3 className="h1 category_h1 text-center">Browse Top Categories</h3>

      <div className="category_outer_box px-3 text-center">
        <div className="row g-4 p-3 justify-content-center">
          {category_arr.map((Category) => (
            <div
              key={Category.title}
              className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 text-center card_category"
            >
              <div className="child_div p-3 h-100 border rounded shadow-sm">
                <div className="category_icon mt-2">{Category.img}</div>
                <div className="category_content mt-2 fw-bold">{Category.title}</div>
                <div className="category_num mt-2 text-muted">{Category.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</div>


 </>)
}

export default Category;