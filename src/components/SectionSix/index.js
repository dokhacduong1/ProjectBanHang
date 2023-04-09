import { Link } from "react-router-dom";
import "./SectionSix.css";
function SectionSix() {
  return (
    <>
      <footer className="sectionSix">
        <div className="sectionBox">
          <div className="sectionSix__logoIcon">
                <div className="sectionSix__LogoIcon--logo">
                    <h1>GNOUD</h1>
                    <h6>Choose Your Like, Gnoud Ensures Its Quality</h6>
                </div>
                <ul className="sectionSix__LogoIcon--icon">
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
          </div>
          <div className="sectionSix__Descrip">
                <h5>Information</h5>
                <a href=" ">About Us</a>
                <a href=" ">News And Events</a>
                <a href=" ">FAQs</a>
                <a href=" ">Customer Support</a>
          </div>
          <div className="sectionSix__Contact">
                <h5>Contact Us</h5>
                <p>Job Contact Details</p>
                <p>Phone: (+84) 879 279 678</p>
                <p>Email: Dokhacduong3@gmail.com</p>
                <p>Thank You Everyone!</p>
          </div>
        </div>
        <div className="sectionBoxEnd">
            <div className="sectionBoxEnd__info">
                <a href=" ">Viet Nam</a>
                <a href=" ">Site Map</a>
                <a href=" ">Handling Personal Information</a>
                <a href=" ">Commercial Law</a>
            </div>
            <div className="sectionBoxEnd__Copy">
                <p><i class="fa-regular fa-copyright"></i> COPYRIGHT 2025 DUONGSHOP DESIGN: KUSHINHP</p>

            </div>
        </div>
      </footer>
    </>
  );
}
export default SectionSix;
