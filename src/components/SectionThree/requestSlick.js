import Slider from "react-slick";

function RequestSlick(props){
   
  
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <button type="button" className="slick-prev"><i class="fa-solid fa-angle-left"></i></button>,
        nextArrow: <button type="button" className="slick-next"><i class="fa-solid fa-angle-right"></i></button>
      };
      var checkCategory = "";
      if(props.index === 0){
        checkCategory = "T-Shirt";
      }else if(props.index === 1){
        checkCategory = "Box";
      }
      const newArray = [...props.data.filter(getDataa => getDataa.category === checkCategory)];
    return(
        <>
            <Slider className="sectionThree__bodyOk" {...settings}>
                {
                    newArray.map((getdata,index)=>(
                        <li>
                        <a key={index} className="sectionThree__bodyOK-index">
                            <span className="sectionThree__bodyOK-img">
                                <img src ={getdata.thumbnail}></img>
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