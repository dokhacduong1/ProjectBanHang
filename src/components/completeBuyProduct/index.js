import "./completeBuyProduct.css";
import { useParams } from "react-router-dom";
import imageFound from "../completeBuyProduct/asset/img/notFound.jpg"
import {
  getListProductBuy,
  getListInfoUser,
  getAddCartNew
} from "../../scriptAll/getItemAddCard";
function CompleteBuyProduct() {
    const loadProductBuy = getListProductBuy.slice();
    const loadInfoUser = getListInfoUser.slice();
    let coutCart = document.querySelector(".co-header__Count p");
    if(coutCart!== null){
        coutCart.innerHTML = 0;
    }
  
    getAddCartNew.splice(0,getAddCartNew.length);
    getListProductBuy.splice(0, getListProductBuy.length);
    getListInfoUser.splice(0, getListInfoUser.length);

    console.log(getListProductBuy)
  const { invoiceId } = useParams();
  var sumProduct = 0;
  loadProductBuy.map((getData) => {
    sumProduct += getData.price;
  });
  
  return (
    <>
      <section className="completeBuyProduct">
        <div className="container">
          {loadProductBuy.length > 0 && loadInfoUser.length > 0 ? (
            <>
              <div className="completeBuyProduct__contai">
                <div className="completeBuyProduct__box col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <p><strong>Contact Details</strong></p>
                  <p>Name:<strong> {loadInfoUser[0].name}</strong></p>
                  <p>Code Orders: <strong>{invoiceId}</strong></p>
                  <p>Email: <strong>{loadInfoUser[0].email}</strong></p>
                  <p>Address: <strong>{loadInfoUser[0].address}</strong></p>
                </div>
                
                <div className="completeBuyProduct__product col-xl-6 col-lg-6  col-md-6 col-sm-6 col-12">
                  <p><strong>Products Bought</strong></p>
                  {loadProductBuy.map((getData) => (
                    <>
                      <p>
                        {getData.title}:<strong>x{getData.cout}</strong>
                      </p>
                    </>
                  ))}
                  <p>Total Money:<strong>{sumProduct}</strong><small>VND</small> </p>
                </div>
                <div className="thankYou col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p><i>Cảm ơn bạn đã lựa chọn mua hàng tại cửa hàng của chúng tôi! Chúng tôi xin chân thành cảm ơn sự tin tưởng và ủng hộ của bạn.</i></p>
                </div>
               
              </div>
              <br></br>
             
            </>
          ) : (
            <>
              <div className="notFound">
                    <h1>NOT FOUND</h1>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default CompleteBuyProduct;
