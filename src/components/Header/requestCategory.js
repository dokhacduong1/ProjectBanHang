/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import { memo} from "react";
import { convertToSlug } from "../../scriptAll/convertTextLowUp";
import { Link } from "react-router-dom";

function RequestAPI(props){
    const  {data ,clickCategory}=props;
    const handeleClick=()=>{
       clickCategory();        
    }
    return(
        <div className='category'>
            <ul>
                {data.map((item,index) => (
                    //  Như đã thấy đoạn này ta cũng truyền indexx cho nó để nó đến từng cái catergory một tiếp tục
                    //ta vào hàm ProdcutAll để xem cái hàm category này gọi đến nhé
                    <li onClick={handeleClick} key={index} className='col-4'><Link to={`productAll/${index}`}>{convertToSlug(item)}</Link></li>

                ))}
            </ul>
        </div>           
    )
}

export default memo(RequestAPI);