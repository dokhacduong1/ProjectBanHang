import './SectionOne.css'

function SectionOne(){

    const scrollOk = document.querySelector(".HeaderNew");
    const scrollHeader = ()=>{
        const currentScrollPos = window.pageYOffset;
        // currentScrollPos === 0 ? scrollOk.classList.remove("HeaderNewOne"):
        // scrollOk.classList.add("HeaderNewOne");
     }
     window.onscroll = () => {
        scrollHeader();
      };
    return (
        <>  
            <section className="sectionOne">
                <div className = "container">
                    <div className="sectionOne__content col-12">
                        <a className="sectionOne__content--text"><strong>Chú Ý</strong>: Cửa Hàng Chỉ Mở Cửa Từ (6h-17h30)</a>
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