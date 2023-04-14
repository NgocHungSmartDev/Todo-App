import './Header.css';
import logoImg from "../../assets/images/image-removebg-preview.png";
import searchIcons from "../../assets/images/SearchOutline.svg";
import HomeIcon from "../../assets/images/house-solid.svg"
import productIcons from "../../assets/images/mobile-screen-button-solid.svg"
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="header">
      <div className="header-container">
        <figure className="logo">
          <img src={logoImg} alt="logo" />
        </figure>
        <div className="header-input-block">
          <img src={searchIcons} alt="search" />
          <input
            className="header-input"
            type="text"
            placeholder="search..."
          ></input>
        </div>
        <Link
          to="/"
          className="header-home"
          style={{ textDecoration: "none", color: "black" }}
        >
          <img src={HomeIcon} alt="search" />
          <p>Home</p>
        </Link>
        <Link
          to="/"
          className="header-product"
          style={{ textDecoration: "none", color: "black" }}
        >
          <img className="product-icon" src={productIcons} alt="search" />
          <p>Product</p>
        </Link>
      </div>
    </div>
  ); 
}

export default Header;