/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import Slider from "react-slick";

function RequestSlick(props){
   
  
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <button type="button" className="slick-prev"><i class="fa-solid fa-angle-left"></i></button>,
        nextArrow: <button type="button" className="slick-next"><i class="fa-solid fa-angle-right"></i></button>,
        responsive: [
            {
              breakpoint: 368.9,
              settings: {
                slidesToShow: 1,
                centerPadding:'70px',
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
                    newArray.map((getdata,index)=>(
                        <li>
                        <a href="#/" key={index} className="sectionThree__bodyOK-index">
                            <span className="sectionThree__bodyOK-img">
                                <img alt="" src ={getdata.thumbnail}></img>
                            </span>
                            <span className="sectionThree__bodyOK-text">
                                <p>{getdata.descriptionTitle}</p>
                            </span>
                            </a>
                    </li>
                    ))
               
                }
            </Slider>
           
        </>
    )
}
export default RequestSlick