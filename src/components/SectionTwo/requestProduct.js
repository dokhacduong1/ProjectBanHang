import image1 from './asset/img/1.jpg'
import React, { useEffect } from "react";

function RequestProduct(props){
    
      
    return (
        <>
        {
            props.data.slice(0, 6).map((product) => (
                <li className="sectionTwoProduct__item col-4 span3 ">
                    <span>
                        <a href='#' className="sectionTwoProduct__itemTmb">
                            <span className='sectionTwoProduct__itemTmb--image'>
                                <img src={product.thumbnail}></img>
                            </span>
                            <div className='sectionTwoProduct__itemTmb--description'>
                                <span className='sectionTwoProduct__itemTmb--txt'>
                                    {product.descriptionTitle}
                                </span>
                            </div> 
                        </a>
                    </span>
                </li>
            ))
        }
        </>
    )
}
export default RequestProduct