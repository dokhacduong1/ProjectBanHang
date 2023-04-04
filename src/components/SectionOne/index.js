/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import './SectionOne.css'

function SectionOne(){

    const scrollHeader = ()=>{
        const currentScrollPos = window.pageYOffset;
        if(currentScrollPos !== 0){    
            if(document.querySelector(".HeaderNew") !== null){
              
                document.querySelector(".HeaderNew").classList.add("HeaderNewOne");
                document.querySelector(".wrapAroundBanner__block").classList.add("wrapAroundBanner__blockNewOne");
               
            }
       }
       else if(currentScrollPos === 0){
            if(document.querySelector(".HeaderNewOne") !== null){
                document.querySelector(".HeaderNew").classList.remove("HeaderNewOne");
                document.querySelector(".wrapAroundBanner__block").classList.remove("wrapAroundBanner__blockNewOne");
               
            }
       }
                
        
      
     }
     window.onscroll = () => {
        scrollHeader();
      };
    return (
        <>  
            <section className="sectionOne">
                <div className = "container">
                    <div className="sectionOne__content col-12">
                        <a href='#/' className="sectionOne__content--text"><strong>Chú Ý</strong>: Cửa Hàng Chỉ Mở Cửa Từ (6h-17h30)</a>
                    </div>
                    <div className='sectionOne__image'>
                       <h1>
                            <a>Begin Good Life, With "Good Products",<hr/>"Good Service"</a>
                       </h1>
                    </div>
                    <div className='sectionOne__content--description'>
                        <h4> <strong>Make Light Make New Door In House</strong></h4>
                        <span>Let Us To Be With You, As Well As Discover New World In Your House</span>     
                    </div>
                </div>
                
            </section>
           
        </>
    )
}
export default SectionOne;