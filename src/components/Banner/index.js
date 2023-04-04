import "./Banner.css"
import React, { useEffect } from "react";
import WOW from 'wowjs'
function Banner(){
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
     const  styles ={
        visibility: 'visible',
        animationDelay: '0.1s'
      }
    return (
        
        <>
            <div className = "wrapAroundBanner">
                <div className ="wrapAroundBanner__block">
                    <a className="wrapAroundBanner__link " href ="">
                        <span>
                            <small className="wrapAroundBanner__link--color">Hello</small>
                        </span>
                        <span className="wow lightSpeedIn center" style={styles}>
                            <small>Welcome To The World Duong</small>
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Banner