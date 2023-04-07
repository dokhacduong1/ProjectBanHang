/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import { memo} from "react";
import { convertToSlug } from "../../scriptAll/convertTextLowUp";

function RequestAPI(props){
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