import React, { useEffect ,useState,memo, useCallback } from "react";

function RequestAPI(props){
    function convertToSlug(text) {
        return text.toUpperCase().replace(/ /g, '-');
    }
    return(
        <div className='category'>
            <ul>
                {props.data.map((item,index) => (
                    <li key={index} className='col-4'>{convertToSlug(item)}</li>

                ))}
            </ul>
        </div>           
    )
}

export default memo(RequestAPI);