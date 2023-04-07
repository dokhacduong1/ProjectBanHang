/* eslint-disable react-hooks/exhaustive-deps */

import "./SectionTwo.css"
import RequestProduct from './requestProduct'
import './SectionTwo.css'
import WOW from "wowjs"
import React, { useState, useEffect } from "react";
import { RequestApiProdcut } from "../../scriptAll/requestAPI";
function SectionTwo(){
    const styles = {
        visibility : "visible",
        animationDelay:"0.1s",
        animationName: "bounceInUp"
      }
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    const [data, setData] = useState([]);

    const LoadProcduct =  useEffect(()=>{
        async function fetchData() {    
            const getData = await RequestApiProdcut();
            setData(getData);
        }
          fetchData();     
    },[]);
    return (
        <>
        <section className="sectionTwo" onLoad={LoadProcduct} >
            <div className="container">
                <div className="sectionTwo__boxText col-12">
                    <h3 ><strong>Special Products</strong> <span className="fa fa-star checked"></span></h3>
                </div>
                <ul className="sectionTwoProduct col-12">
                    <RequestProduct data ={data}/>
                </ul>
                <div className="sectionTwo__Btn wow bounceInDown col-12" style={styles}>
                    <a href=" " className="sectionTwo__Btn--btn btnAll">More</a>
                </div>
            </div>
           
        </section>
        </>
    )
}
export default SectionTwo