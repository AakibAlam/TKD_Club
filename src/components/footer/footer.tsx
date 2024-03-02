import { FaInstagram, FaFacebook, FaEnvelope, FaHeart } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="icon-container">
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaEnvelope />
        </a>
      </div>
      <div style={{ color: "white", fontSize: "25px" }}>
        with <FaHeart style={{ color: "red" }} /> from taekwondo club
      </div>
    </div>
  );
}

export default Footer;
