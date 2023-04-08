import { useState } from "react";
import { getAddCartNew } from "../showProductRouter/getItemAddCard";
import "./yourCart.css";
import { Link } from "react-router-dom";

function YourCart() {
  const loadMyCart = getAddCartNew;

  const [coutValue, setCoutValue] = useState(loadMyCart);
  const checkPriceAll = () => {
    let sumAll = 0;
    // eslint-disable-next-line array-callback-return
    coutValue.map((data) => {
      sumAll += data.price;
    });
    return sumAll;
  };

  const checkTotalProduc = () => {
    let sumAll = 0;
    // eslint-disable-next-line array-callback-return
    coutValue.map((data) => {
      sumAll += data.cout;
    });
    return sumAll;
  };

  const deleteProduct = (id) => {
    let coutCart = document.querySelector(".co-header__Count p");
    const checkIdArray = coutValue.filter((data) => data.id === id);
    const checkIdCoutValue = coutValue.filter((data) => data.id !== id);
    getAddCartNew.splice(checkIdArray, 1);
    coutCart.innerHTML = parseInt(coutCart.innerHTML) - 1;
    setCoutValue(checkIdCoutValue);
  };

  //Đoạn này là hàm khi ấn button sẽ cập nhật lại số lượng
  const updateCoutValue = (id, newValue, check = "") => {
    const currentItemUpdate = loadMyCart.find((item) => item.id === id);
    const updatedLoadMyCart = coutValue.map((item) => {
      if (item.id === id) {
        const checkSum =
          check === "in"
            ? item.price + currentItemUpdate.priceOriginal
            : item.price - currentItemUpdate.priceOriginal;
        return {
          ...item,
          cout: newValue,
          price: checkSum,
        };
      }
      return item;
    });
    setCoutValue(updatedLoadMyCart);
  };

  const decrementCout = (id) => {
    const currentItem = coutValue.find((item) => item.id === id);
    if (currentItem.cout > 1) {
      const updatedCoutValue = currentItem.cout - 1;
      updateCoutValue(id, updatedCoutValue, "dec");
    }
  };

  const increasingCout = (id) => {
    const currentItem = coutValue.find((item) => item.id === id);
    if (currentItem.cout >= 1 && currentItem.cout < 20) {
      const updatedCoutValue = currentItem.cout + 1;
      updateCoutValue(id, updatedCoutValue, "in");
    }
  };
  console.log(coutValue);
  //Đến đây là hết

  return (
    <>
      <section className="myCart">
        <div className="container">
          <div className="myCart__All">
            <div className="myCart__All--list">
              <div className="myCart__boxText">
                <h1>YOUR CART</h1>
                <hr></hr>
                <h4>Dear Valued Client!</h4>
              </div>
              {coutValue.length > 0 ? (
                <>
                  <div className="myCart__coutCart">
                    <h5>Number Of Products Available: {loadMyCart.length}</h5>
                  </div>
                  <hr></hr>
                  {coutValue.map((getLoadData) => (
                    <>
                      <div key={getLoadData.id} className="myCart__listItem">
                        <div className="myCart__listItem-list">
                          <div className="myList">
                            <div className="myList__row">
                              <div className="myList__image">
                                <img
                                  src={getLoadData.thumbnail}
                                  alt={getLoadData.title}
                                ></img>
                              </div>

                              <div className="myList__boxText">
                                <div className="myList__boxText-text">
                                  <h5>{getLoadData.title}</h5>
                                  <h6>Brand {getLoadData.brand}</h6>
                                  <p>Price: {getLoadData.priceOriginal}VND</p>

                                  <div className="sectionProductRouter__boxBtn--count myList__boxText-textBtn">
                                    <div className="sectionProductRouter__count--text"></div>
                                    <div className="sectionProductRouter__count--icon">
                                      <div
                                        className="sectionProductRouter__count myList__boxText--cout"
                                        onClick={() =>
                                          decrementCout(getLoadData.id)
                                        }
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </div>
                                      <div className="sectionProductRouter__count--input myList__boxText--cout">
                                        <input
                                          type="number"
                                          className="ant-input-number-input"
                                          autocomplete="off"
                                          max="50"
                                          min="1"
                                          step="1"
                                          value={getLoadData.cout}
                                          onChange={(e) =>
                                            updateCoutValue(
                                              getLoadData.id,
                                              parseInt(e.target.value)
                                            )
                                          }
                                        />
                                      </div>
                                      <div
                                        className="sectionProductRouter__count myList__boxText--cout"
                                        onClick={() => {
                                          increasingCout(getLoadData.id);
                                        }}
                                      >
                                        <i className="fa-solid fa-plus"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="myList__boxText-btn"></div>
                              </div>
                            </div>
                            <div className="totalAndDelete">
                              <p className="totalNumber">
                                Total:<strong> {getLoadData.price}</strong>
                                <span style={{ fontSize: "10px" }}>VND</span>
                              </p>
                              <span
                                className="sectionProductRouter__count--deleteProdcut"
                                onClick={() => {
                                  deleteProduct(getLoadData.id);
                                }}
                              >
                                Delete{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <div>
                    <h2 className="NoProcduct">
                      No Product In Your Shopping Cart
                    </h2>
                  </div>
                </>
              )}
            </div>
            <div className="myCart__All--Buy">
              <div className="myCart__buyBox">
                <div className="myCart__buyBox--text">
                  <h2>Amount To Pay</h2>
                  <div className="myCart__buyBox--total">
                    <p>Total Products {checkTotalProduc()} </p>
                    <p>Price All {checkPriceAll()} VND</p>
                  </div>
                  <p>We Hope You Are Always Happy</p>
                </div>
                <div className="myCart__buyBox--btn">
                  <button className="myCart__btn">
                    <strong>BUY</strong>
                  </button>
                  <p>Will You Continue To Shop For Our Products?</p>
                  <Link to={"/"} className="continuMyCart">
                    Click Here To Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="myMailBox">
        <div className="container">
          <div className="myMailBox__box">
            <h5 className="myMailBox__box--text1">Chào Anh Chị</h5>
            <p className="myMailBox__box--text2">
              Tôi muốn gửi lời chúc sức khỏe và lời cảm ơn chân thành đến
              anh/chị. Việc mua sắm của anh/chị không chỉ đóng góp vào sự phát
              triển của cửa hàng chúng tôi mà còn giúp chúng tôi có thêm động
              lực để cải tiến sản phẩm và dịch vụ của mình.
            </p>
            <p className="myMailBox__box--text3">
              Chào anh/chị, Tôi muốn gửi lời chúc sức khỏe và lời cảm ơn chân
              thành đến anh/chị. Việc mua sắm của anh/chị không chỉ đóng góp vào
              sự phát triển của cửa hàng chúng tôi mà còn giúp chúng tôi có thêm
              động lực để cải tiến sản phẩm và dịch vụ của mình. Trong thời gian
              này, chúng ta cùng đối mặt với nhiều thử thách và khó khăn. Tuy
              nhiên, bằng sự đoàn kết và chung tay hỗ trợ, chúng ta sẽ vượt qua
              mọi rào cản và vươn tới những thành công mới.
            </p>

            <p className="myMailBox__box--text4">
              Một lần nữa, xin cảm ơn anh/chị đã tin tưởng và lựa chọn sản phẩm
              của DuongShop. Chúc anh/chị sức khỏe dồi dào, hạnh phúc và thành
              công trong mọi lĩnh vực.
            </p>
            <p className="myMailBox__box--text5">Trân Trọng Và Cám Ơn!!!</p>
            <p className="myMailBox__box--text6">DuongShop</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default YourCart;
