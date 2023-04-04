/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import { memo} from "react";

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