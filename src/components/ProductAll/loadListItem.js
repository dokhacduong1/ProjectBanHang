import { Link } from "react-router-dom";
import icon1 from "./asset/img/1.svg";
import { getAddCartNew } from "../../scriptAll/getItemAddCard";
//hàm này vẽ ra các sản phẩm mà lúc đoạn category gọi vào đó nó sẽ lấy id /categoy/id lấy cái id đằng sau lưu zo cái 
//invoiceId và từ đó ta tìm dc các prodcut có chứa sản phẩm id đó thông qua hàm filter tiếp túc xuống dưới đi
function LoadListItem(props) {
  const { initialStateSave, invoiceId } = props;
  const loadProdcut = initialStateSave.dataProduct;
  const loadCategory = initialStateSave.dataCategory;
 
  const filtereProductArray = loadProdcut.filter(
    (item) => item.category === loadCategory[invoiceId]
  );
  const pushAddCart =(getData)=>{
    //hàm này khác với hàm kia một cái là cái cout khi người dùng ko nhập sản phẩm sẽ mặc định là 1 và gửi đi thế thôi xong hàm
    //giỏ hàng sẽ sử lý
    let coutCart = document.querySelector(".co-header__Count p");
    if(getAddCartNew.findIndex(obj => obj.id === getData.id) === -1){
        
        const newData = { ...getData, cout: 1 , price: getData.price*1 ,priceOriginal : getData.price};
        getAddCartNew.push(newData);
        coutCart.innerHTML = parseInt(coutCart.innerHTML)+1;
    }
   
    
}
  return (
    <>
      <div className="prodcutAll__Box--listItemText">
        <h1>{loadCategory[invoiceId]}</h1>
      </div>
      <div className="prodcutAll__Box--listItemBox">
        {filtereProductArray.map((getData, index) => (
          <>
            <div key={index} className="prodcutAll__listItembox col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
              {/* Đêns đây ta cũng truyền giữ liệu vào giao diện cho thằng showProductRouter sử lý khi người dùng muốn xem từng chi
              tiết sản phẩm nè nó truyền id rồi mục showwProdcut thực hiện phần còn lại tiếp đi xuống dưới */}
              <Link to={`/listProduct/${getData.id}`} className="prodcutAll__listItembox--image">

                <img src={getData.thumbnail} alt={getData.title}></img>
              </Link>
              <div className="prodcutAll__listItembox--text">
                <div className="prodcutAll__titleItem">
                  <h6>{getData.descriptionTitle}</h6>
                </div>
                <div className="prodcutAll__price">
                  <span>
                    Price: <strong>{getData.price}</strong>
                    <small>VND</small>
                  </span>
                </div>
                {        
                     parseInt(getData.discountPercentage)<20 && <>
                        <div className="prodcutAll__lowDiscount">
                            <span>Discount:<strong>{getData.discountPercentage}</strong></span>
                        </div>
                     </>
                }
                <div className="prodcutAll__addToCartFlex">
                  {/* Ta thấy thằng này nó có hàm thêm vào giỏ hàng là hàm pushAddCart ta xem nó là gì */}
                  <div className="prodcutAll__addToCart" onClick={()=>{pushAddCart(getData)}}>
                    <i className="co-icon co-icon--sm">
                      <svg
                        role="img"
                        width="25"
                        height="25"
                        aria-label="カート"
                      >
                        <svg id="icon_cart" viewBox="0 0 25 25">
                          <g>
                            <rect fill="none" width="25" height="25"></rect>
                            <path
                              fill="currentColor"
                              d="M18.23,17H8.41L7.9,14.81H19.16a.73.73,0,0,0,.73-.6l1.42-7.3a.74.74,0,0,0-.15-.62A.78.78,0,0,0,20.58,6H5.79L5.12,3.46A.74.74,0,0,0,4.4,2.9H2.08a.75.75,0,0,0,0,1.5H3.82L4.48,7h0l1.74,7.28h0l.7,2.91a2.31,2.31,0,1,0,3.21,2.13,2.16,2.16,0,0,0-.15-.81h6.09a2.38,2.38,0,0,0-.15.81A2.31,2.31,0,1,0,18.23,17ZM6.42,8.63,6.16,7.52H19.67l-1.13,5.79h-11Zm1.4,11.46a.81.81,0,1,1,.81-.81A.81.81,0,0,1,7.82,20.09Zm10.41,0a.81.81,0,0,1,0-1.62h0a.81.81,0,0,1,0,1.62Z"
                            ></path>
                          </g>
                        </svg>
                      </svg>
                    </i>
                    <h6>Add To Cart</h6>
                  </div>
                  <div className="prodcutAll__addToImage">
                        <img alt="ok" src={icon1}></img>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default LoadListItem;
