import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import "./showProductRouter.css"
import Slider from "react-slick";

import { convertToSlug } from "../../scriptAll/convertTextLowUp";
import { getAddCartNew } from "../../scriptAll/getItemAddCard";
//Hàm này sẽ có công việc lấy cái props ta vừa truyền vào kia và vẽ ra giao diện theo đúng mục từng sản phẩm
//Kiểu như người dùng ấn vào một sản phẩm nó phải hiện một tab để hiện thông tin chi tiết sản phẩm ấy
//Tiếp nhé ta sẽ xuống đoạn onClick của cái Thẻ có chữ Add To Card
 function ShowProductRouter(props) {
    const [cout,setCout] = useState(1);

    const { invoiceId } = useParams(); // Lấy ra invoiceId từ URL
    const { loadProductData } = props;

    const [dataAllProduct, setDataAllProduct] = useState(null);
   

      const settings = { 
        arrows: false,
        responsive: [
            {         
              breakpoint: 412.9,
                settings: {
                    arrows: true,
                    prevArrow: <button type="button" currentslide="true" ><i className="fa-solid fa-angle-left"></i></button>,
                    nextArrow: <button type="button" slidecount ="true"><i className="fa-solid fa-angle-right"></i></button>,
                }
            }
          ]
      };

    useEffect(() => {
      async function fetchData() {
        const getData = await loadProductData();
        setDataAllProduct(getData);
      }
      fetchData();
    }, [loadProductData]);

    let invoiceItem = undefined
    if(dataAllProduct != null){
       invoiceItem= dataAllProduct.find(data => data.id.toString() === invoiceId.toString())
    }

    const handClickAdd = ()=>{
        setCout(cout+1);
    }

    const handClickSub = ()=>{
        if(cout>1){
            setCout(cout-1);
        }
    }

    const handleClick = (e)=>{
        const checkActive = document.querySelector(".sectionProductRouter__boxBtnActive");
        const checkActiveSpan = document.querySelector(".sectionProductRouter__activeSpan")
        checkActive.classList.remove("sectionProductRouter__boxBtnActive");
        e.target.classList.add("sectionProductRouter__boxBtnActive")
        const indexValue = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        const sectionProductRouterspanA = document.querySelector(".sectionProductRouter__spanA");
        const sectionProductRouterspanB = document.querySelector(".sectionProductRouter__spanB");
        checkActiveSpan.classList.remove("sectionProductRouter__activeSpan")
        switch (indexValue) {
            case 0:
                sectionProductRouterspanA.classList.add("sectionProductRouter__activeSpan");
                break;
            case 1:
                sectionProductRouterspanB.classList.add("sectionProductRouter__activeSpan");
                break;
            default:
                break;
        }
    }
    //Đến đây rồi ta thấy nó lấy ra cái thẻ có class là ".co-header__Cout p" để khi check dc điều kiện
    //sản phẩm không nằm trong giỏ hàng thì sẽ add cái sản phẩm đó vào tiếp đến biến newData
    //Ta sẽ lưu một object mới có dữ liệu của data truyền vào ta sẽ thêm cái cout mà người dụng
    //chọn số lượng sản phẩm ấy kiểu khi người dùng click cái button + hay - nó sẽ có số lượng sản phẩm đó
    //Tiếp ta thay cái price cho nó bằng price*cout ta sẽ ra dc số tiền và thêm một biến priceOrriginal
    // = chính cái price  cũ để tý thao tác trên price mình vẫn hiện giá gốc lên web được không bị thay đổi
    //Tiếp ta dùng cái biến getAdddCarrtNew ta push dữ liệu newData vào cho nó để bên giỏ hàng dùng được
    //Nếu muốn biết getAdddCarrtNew ở đâu ta tìm chính thư mục này tìm file getItemAddCard.js là thấy
    //Tiếp tục ta lấy cái coutCart ta cộng cái phần tử bên trong lên 1 rồi ok đến đây ta vào thư mục
    //yourCart nhé chứa dữ liệu của giỏ hàng
    const pushAddCart =(getData)=>{
        let coutCart = document.querySelector(".co-header__Count p");
        if(getAddCartNew.findIndex(obj => obj.id === getData.id) === -1){
            const newData = { ...getData, cout: cout , price: getData.price*cout ,priceOriginal : getData.price};
            getAddCartNew.push(newData);
            coutCart.innerHTML = parseInt(coutCart.innerHTML)+1;
        }
       
        
    }
   
    return (
      <>
       {
        invoiceItem !== undefined &&(
            <>
                <section className="sectionProductRouter">
                    <div className="container">
                        <div className="sectionProductRouter__box">
                            <div className="sectionProductRouter__flex">
                                <div className="sectionProductRouter__flex--image">
                                    <Slider className="sectionProductRouter__imageMain" {...settings}>
                                        {
                                            invoiceItem.images.map((image,index)=>(             
                                                <img key={index}  src={image} alt ={invoiceItem.title}></img>
                                               
                                            ))
                                        }
                                    </Slider>
                                    <div className="sectionProductRouter__imageList">
                                        {
                                            invoiceItem.images.map((image,index)=>(
                                                <div key={index} className="sectionProductRouter__imageList--item" key ={index}>
                                                     <img  src={image} alt ={invoiceItem.title}></img>
                                                </div>
                                               
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="sectionProductRouter__flex--text">
                                    <div className="sectionProductRouter__boxText">
                                        <h1>{convertToSlug(invoiceItem.title)}</h1>
                                        <p>Brand:{convertToSlug(invoiceItem.brand)}</p>
                                        <p>Price: <strong >{invoiceItem.price}</strong>$</p>
                                        
                                    </div>
                                    <div className="sectionProductRouter__boxBtn">
                                        <ul className="sectionProductRouter__boxBtn--btn" >
                                            <li >
                                                <button className="sectionProductRouter__boxBtnA sectionProductRouter__boxBtnActive" onClick={handleClick}>Description</button>
                                            </li>
                                            <li >
                                                <button className="sectionProductRouter__boxBtnA" onClick={handleClick}>Reviews</button>
                                            </li>
                                            
                                        </ul>
                                        <div className="sectionProductRouter__boxBtn--text">
                                            <span className="sectionProductRouter__spanA sectionProductRouter__activeSpan">{invoiceItem.description}</span>
                                            <span className="sectionProductRouter__spanB ">{invoiceItem.description} 5 <i className="fa-solid fa-star"></i></span>
                                        </div>

                                        <div className="sectionProductRouter__boxBtn--count">
                                            <div className="sectionProductRouter__count--text">
                                                <h3><span>Count</span></h3>
                                            </div>
                                            <div className="sectionProductRouter__count--icon">
                                                <div className="sectionProductRouter__count" onClick={handClickSub}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                                <div className="sectionProductRouter__count--input">
                                                        <input type="number" className="ant-input-number-input" autocomplete="off" max="50" min="1" step="1" value={cout}/>
                                                </div>
                                                <div className="sectionProductRouter__count"  onClick={handClickAdd}>     
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                            <div className="sectionProductRouter__count--btn">
                                                {/* Đến đây nó có nhiệm vụ khi click vào thẻ button này sẽ nhảy vào hàm pushAddCart tiếp đi đến hàm PushAddCarrt nhé */}
                                            <button className="sectionProductRouter__cout__btn" onClick={()=>{pushAddCart(invoiceItem)}}>ADD TO CART</button>
                                               
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
       }
      </>
    );
  }
  
  export default ShowProductRouter;