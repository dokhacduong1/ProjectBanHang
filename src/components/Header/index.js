/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import { Link } from "react-router-dom";
import icon1 from "./asset/img/1.svg";
import icon2 from "./asset/img/2.svg";
import icon3 from "./asset/img/3.svg";
import icon4 from "./asset/img/4.svg";
import bar from "./asset/img/bars-solid.svg";
import "./Header.css";
import RequestAPI from "./requestCategory";
import React, { useState, useCallback, useEffect } from "react";
import { RequestApiCategory } from "../../scriptAll/requestAPI";
import { getListItemCategory} from "../showProductRouter/getItemAddCard"

function Header() {
 
  const [isCategory, setIsCategory] = useState(false);
  const [data, setData] = useState([]);
  const getIcon = document.querySelector(".fa-caret-down");

  const clickCategory = () => {
   
    setIsCategory(!isCategory);
    isCategory === true
      ? getIcon.classList.remove("fa-caret-up")
      : getIcon.classList.add("fa-caret-up");
  };
  const clickCategory2 = useCallback(async () => {
        const  getData = await RequestApiCategory();
       
        setData(getData);
  }, []);

  return (
    <>
      <nav className="co-header" onLoad={clickCategory2}>
        <div className="co-header__toolHidenBar">
          <img src={bar} alt=""></img>
        </div>
        <div className="container co-header__box">
          <div className="co-heade__conatair">
            <div className="co-header_logo wow swing">
              <Link to="/" className="co-header_logoText col-2 col-xl-5 col-md-2 col-lg-4">
                GNOUD
              </Link>
            </div>
            <div className="co-headerDropMenu " onClick={clickCategory}>
              <ul className="co-headerDropMenu__list__item">
                <button className="tabButton" type="button">
                  Danh Sách Sản Phẩm
                </button>
                <i className="fa-solid fa-caret-down"></i>
              </ul>
            </div>
            <div className="co-headerSerach ">
              <input
                className="searchInputLayout"
                placeholder="Tìm Kiếm Sản Phẩm"
              />
            </div>
            <div className="co-header__tools">
              <div className="co-header__tool">
                <div className="lIcon">
                  <div className="co-header__toolBtn">
                    <span className="co-header__toolTmb">
                      <img src={icon1} alt="" />
                    </span>
                    <span className="co-header__toolTxt">
                      <a>Đăng Nhập</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="co-header__tool ">
                <div className="lIcon">
                  <div className="co-header__toolBtn">
                    <span className="co-header__toolTmb">
                      <img src={icon2} alt=""></img>
                    </span>
                    <span className="co-header__toolTxt">
                      <a>Yêu Thích</a>
                    </span>
                  </div>
                </div>
              </div>
              {/* Hedẻ ta chú ý đoạn này ta gọi đến cái Link giỏ hàng và đi đến giỏ hàng nhé tiếp chú ý file trong thư mục này là 
              requestCategory ta vào đó nhé */}
              <Link to ={'yourcart'} style={{textDecoration:"none"}} className="co-header__tool">
                <div className="lIcon">
                  <div className="co-header__toolBtn">
                    <span className="co-header__Count">
                      <p style={{color:" rgb(92 84 84)"}}>0</p>
                    </span>
                    <span className="co-header__toolTmb">
                      <img src={icon3} alt=""></img>
                    </span>
                    <span className="co-header__toolTxt">
                      <a >Giỏ Hàng</a>
                    </span>
                  </div>
                </div>
              </Link>
              <div className="co-header__tool co-header__toolEnd">
                <div className="lIcon">
                  <div className="co-header__toolBtn">
                    <span className="co-header__toolTmb">
                      <img src={icon4} alt=""></img>
                    </span>
                    <span className="co-header__toolTxt">
                      <a>Ủng Hộ</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isCategory && <RequestAPI data={data} clickCategory ={clickCategory} />}
      </nav>
    </>
  );
}
export default Header;
