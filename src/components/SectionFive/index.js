import "./SectionFive.css"
import image1 from "./asset/img/1.png"
import image2 from "./asset/img/2.png"
import image3 from "./asset/img/3.png"

function SectionFive(){
    return(
        <>
            <section className ="sectionFive">
                <div className="container">
                    <div className="sectionFive__box">
                        <a className = "sectionFive__boxText" href =" ">

                            <span className ="sectionFive__boxText--content">
                                <span className ="sectionFive__content--boxtext">
                                    <h3><strong>DUONG ONLINE STORE</strong></h3>
                                </span>
                                <span className ="sectionFive__content--image ">
                                    <span className="sectionFive__boxImage  wow bounceInLeft center">
                                        <img alt="" src={image1}></img>
                                        <p>Free Delivery</p>
                                    </span>
                                    <span className="sectionFive__boxImage  wow bounceInUp sectionFive__editAima ">
                                        <img alt="" src={image2}></img>
                                        <p>Careful Packing</p>
                                    </span>
                                    <span className="sectionFive__boxImage wow bounceInUp sectionFive__editAima ">
                                        <img alt="" src={image3}></img>
                                        <p>Stable Warehouse</p>
                                    </span>
                                 
                                </span>
                            </span>

                        </a>

                     


                    </div>
                </div>
            </section>
        </>
    )
}
export default SectionFive