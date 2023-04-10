import { useState } from "react";
import "./BuyProdcut.css";
import { getListProductBuy,getListInfoUser } from "../../scriptAll/getItemAddCard";
import { Link } from "react-router-dom";
function BuyProduct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkSubmit,setCheckSubmit] = useState(false)
  function isValidPhoneNumber(phoneNumber) {
    const regex = /^\d{10}$/; // regular expression kiểm tra định dạng số điện thoại, ví dụ 0901234567
    return regex.test(phoneNumber);
  }
  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePostCodeChange = (event) => {
    setPostCode(event.target.value);
  };
   //hàm tạo mã đơn hàng
   function generateOrderCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 8;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  //checkemail
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const handleSubmit = (event) => {
   
    if (
      name === "" ||
      email === "" ||
      contactNumber === "" ||
      address === "" ||
      postCode === ""
    ) {
      alert("Vui Lòng Nhập Đầy Đủ Thông Tin!");
      return;
    }
    if (!isValidPhoneNumber(contactNumber)) {
      alert("Số Điện Thoại Sai Đinh Dạng");
      return;
    }
    if (!checked) {
      alert("Vui Lòng Tích Vào Ô Xác Nhận Thông Tin Đã Đúng");
      return;
    }
    if(!isValidEmail(email)){
        alert("Nhập Sai Email Rồi!")
        return;
    }
    const saveInfo = {
      email: email,
      name: name,
      contactNumber: contactNumber,
      address: address,
      postCode: postCode,
    };
    getListInfoUser.push(saveInfo)
   if(getListInfoUser.length>0){
        setCheckSubmit(!checkSubmit);
   }
   
    // do something with the form data
  };
  

  return (
    <>
      <section className="buyProdcut">
        <div className="container">
        <div className="sectionOne__content col-12">
            <a href="#/" className="sectionOne__content--text col-12">
              <strong>Xin Lỗi Quý Khách</strong>: Hiện Giờ Bên Gnoud Chỉ Có Thể Thanh Toán Khi Nhận Hàng!!!
            </a>
          </div>
          {
           getListProductBuy.length>0 ? (<>
              <div className="boyProduct__Title">
                <h1>Enter Guest Information</h1>
              </div>
              <form onSubmit={handleSubmit} className="formSubit">
                <h4 className="formSubit__textHeader">Contact Details</h4>
                <label htmlFor="email" className="col-xl-12">
                  <strong>
                    Email<small style={{color:"#7f0019"}}>(*)</small>
                  </strong>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="formSubit__inputEmail col-xl-12"
                  placeholder="abzxyz@duongshp.xyz"
                />
                <label htmlFor="name" className="col-xl-12">
                  {" "}
                  <strong>
                    Name<small style={{color:"#7f0019"}}>(*)</small>
                  </strong>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="formSubit__inputName col-xl-6"
                />

                <label htmlFor="contactNumber" className="col-xl-12">
                  <strong>
                    Contact Number<small style={{color:"#7f0019"}}>(*)</small>
                  </strong>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                  className="formSubit__inputNumber col-xl-6"
                />

                <label htmlFor="address" className="col-xl-12">
                  <strong>
                    Address<small style={{color:"#7f0019"}}>(*)</small>
                  </strong>
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                  className="formSubit__inputAddress col-xl-12"
                />

                <label htmlFor="postCode" className="col-xl-12">
                  <strong>
                    Post Code<small style={{color:"#7f0019"}}>(*)</small>
                  </strong>
                </label>
                <input
                  type="text"
                  id="postCode"
                  value={postCode}
                  onChange={handlePostCodeChange}
                  className="formSubit__inputCode col-xl-12"
                  placeholder="05000"
                />
                <hr></hr>
                <h4>Confirm Information</h4>
                <label htmlFor="checkbox" className="col-xl-12 boxCheck">
                  <input
                    type="checkbox"
                    id="checkBox"
                    checked={checked}
                    onChange={handleCheck}
                  />
                  <strong> I Confirm That The Information Is Correct.</strong>
                </label>
              </form>
              <div className="buyProduct__boxSubmit">
                <p>
                  If There Are No Mistakes In The Above Information, Please
                  Agree To{" "}
                  <u style={{ cursor: "pointer" }}>The Guest Purchase Terms</u>{" "}
                  And Conditions And Proceed From The Button Below.
                </p> 
                    <Link to={ checkSubmit ? `complete/${generateOrderCode()}` : ''} onClick={handleSubmit}>
                        Submit
                    </Link>
    
              </div>
            </>) :(
            <>
                <h1 style={{textAlign:"center"}}>No Products Added To Cart</h1>
                <a href={"/"} style={{textAlign:"center",color:"black"}}><h2>Main Page</h2></a>
            </>)
          }
        </div>
      </section>
    </>
  );
}
export default BuyProduct;
