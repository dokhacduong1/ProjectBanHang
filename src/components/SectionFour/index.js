/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import "./SectionFour.css"
import image1 from "./asset/img/1.jpg"
import image2 from "./asset/img/2.jpg"
import image3 from "./asset/img/3.jpg"
import image4 from "./asset/img/4.jpg"
function SectionFour(){
    const style ={
        animationDelay: "0.5s"
    }
    return(
        <>
            <section className ="sectionFour">
                <div className ="container">
                    <div className="sectionFour__boxText">
                        <h3 ><strong>Featured Description</strong></h3>
                    </div>
                    <div className="sectionFour__boxImage">
                        <ul className="sectionFour__boxImage--list">

                            <li className="sectionFour__listItem  wow bounceInUp center" styles ={style}>
                                <span className="sectionFour__listItem--boxText">
                                    <span className="sectionFour__listItem--text">
                                        <h7>MEN CLOTHES</h7>
                                    </span>
                                    <span className="sectionFour__listItem--image">
                                        <img alt ="" src ={image1}></img>
                                    </span>
                                </span>
                                <ul className ="sectionFour__listItem--description">
                                    <li className = "sectionFour__Description">
                                        <p><i>With a variety of styles, materials and colors, men's clothing meets the needs of many different audiences, from office wear to stylish and modern fashion.</i></p>
                                    </li>
                                </ul>
                            </li>

                            <li className="sectionFour__listItem  wow bounceInUp center"  styles ={style}>
                                <span className="sectionFour__listItem--boxText">
                                    <span className="sectionFour__listItem--text">
                                        <h7>WOMEN CLOTHING</h7>
                                    </span>
                                    <span className="sectionFour__listItem--image">
                                        <img alt ="" src ={image2}></img>
                                    </span>
                                </span>
                                <ul className ="sectionFour__listItem--description">
                                    <li className = "sectionFour__Description">
                                        <p><i>Women's clothing today has a variety of styles, materials and colors, from office wear to stylish and dynamic clothes for outings or sports.</i></p>
                                    </li>
                                </ul>
                            </li>

                            <li className="sectionFour__listItem  wow bounceInUp center"  styles ={style}>
                                <span className="sectionFour__listItem--boxText">
                                    <span className="sectionFour__listItem--text">
                                        <h7>CHILDREN'S WEAR</h7>
                                    </span>
                                    <span className="sectionFour__listItem--image">
                                        <img alt ="" src ={image3}></img>
                                    </span>
                                </span>
                                <ul className ="sectionFour__listItem--description">
                                    <li className = "sectionFour__Description">
                                        <p><i>Children's clothes today are diverse in designs, materials and colors, suitable for many ages and styles, from simple clothes for children to play to polite clothes for children to go to school or party.</i></p>
                                    </li>
                                </ul>
                            </li>

                            <li className="sectionFour__listItem  wow bounceInUp center"  styles ={style}>
                                <span className="sectionFour__listItem--boxText">
                                    <span className="sectionFour__listItem--text">
                                        <h7>PYJAMA</h7>
                                    </span>
                                    <span className="sectionFour__listItem--image">
                                        <img alt ="" src ={image4}></img>
                                    </span>
                                </span>
                                <ul className ="sectionFour__listItem--description">
                                    <li className = "sectionFour__Description">
                                        <p><i>
Nightwear is designed in a variety of styles, materials and colors like men's and women's clothes, which can meet the needs of many different objects when going to sleep.</i></p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SectionFour