/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect,useState } from 'react';
import "./SectionThree.css"
import RequestSlick from './requestSlick';
import { RequestApiProdcut } from '../../scriptAll/requestAPI';

function SectionThree(){
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(-1);
    const clickProduct =  useEffect(()=>{
        async function fetchData() {    
            const getData = await RequestApiProdcut();
            setData(getData);
            setIndex(0);
        }
          fetchData();      
    },[]);
    const checkActive = document.querySelector(".sectionThree__indexTab--btn--active");
    const clickIndexLi = (e)=>{
        const indexValue = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        setIndex(indexValue);
        checkActive.classList.remove("sectionThree__indexTab--btn--active");
        e.target.classList.add("sectionThree__indexTab--btn--active");
       
    }
      return (
        <>
          <div className='sectionThree' onLoad={clickProduct}>
            <div className='container'>
                <div className="sectionThree__boxText">
                    <h3 ><strong>Featured Products</strong></h3>
                </div>
                <div className='sectionThree__tab'>
                    <ul className='sectionThree__tab--list' onClick={clickIndexLi}>
                        <li className='sectionThree__indexTab'>
                            <button className='sectionThree__indexTab--btn sectionThree__indexTab--btn--active'>Household Items</button>
                        </li>
                        <li className='sectionThree__indexTab'>
                            <button className='sectionThree__indexTab--btn'>Handmade Sandals</button>
                        </li>
                    </ul>
                </div>
                <div className='sectionThree__tab__body'>
                    <RequestSlick data = {data} index ={index} key={index}/>
                </div>
            </div>
           
          </div>
       
        </>
        
      );
}
export default SectionThree