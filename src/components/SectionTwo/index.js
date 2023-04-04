import "./SectionTwo.css"
import RequestProduct from './requestProduct'
import './SectionTwo.css'
import WOW from "wowjs"
import React, { useState, useEffect } from "react";
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
        fetch("https://josn-server-ban-hang.vercel.app/products")
        .then(data =>data.json())
        .then((getData)=>{
            setData(getData);
        })
},[]);
    return (
        <>
        <section className="sectionTwo" onLoad={LoadProcduct} >
            <div className="container">
                <div className="sectionTwo__boxText">
                    <h3 ><strong>Special Products</strong> <span class="fa fa-star checked"></span></h3>
                </div>
                <ul className="sectionTwoProduct">
                    <RequestProduct data ={data}/>
                </ul>
                <div className="sectionTwo__Btn wow bounceInDown "dataWowDelay="0.1s" style={styles}>
                    <a href=" " class="sectionTwo__Btn--btn btnAll">More</a>
                </div>
            </div>
           
        </section>
        </>
    )
}
export default SectionTwo