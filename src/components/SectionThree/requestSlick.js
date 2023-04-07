/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import { Link } from "react-router-dom";
import Slider from "react-slick";

function RequestSlick(props){
   
 
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <button type="button" currentslide="true" ><i className="fa-solid fa-angle-left"></i></button>,
        nextArrow: <button type="button" slidecount ="true"><i className="fa-solid fa-angle-right"></i></button>,
        responsive: [
            {
              breakpoint: 412.9,
              settings: {
                slidesToShow: 1,
                centerPadding:'80px',
                centerMode:true,
                arrows:false
              }
            }
          ]
      };
      var checkCategory = "";
      if(props.index === 0){
        checkCategory = "Box";
      }else if(props.index === 1){
        checkCategory = "Sandals";
      }
      const newArray = [...props.data.filter(getDataa => getDataa.category === checkCategory)];
    return(
        <>
            <Slider className="sectionThree__bodyOk" {...settings}>
                {
                    newArray.slice(0,6).map((getdata,index)=>(
                        <li key={index} >
                          <Link  to={`listProduct/${getdata.id}`} key={index} className="sectionThree__bodyOK-index">
                              <span className="sectionThree__bodyOK-img">
                                  <img alt="" src ={getdata.thumbnail}></img>
                              </span>
                              <span className="sectionThree__bodyOK-text">
                                  <p>{getdata.descriptionTitle}</p>
                              </span>
                            </Link>
                        </li>
                    ))
               
                }
            </Slider>
           
        </>
    )
}
export default RequestSlick