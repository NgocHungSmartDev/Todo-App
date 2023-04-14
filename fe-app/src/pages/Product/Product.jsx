import { Link } from 'react-router-dom';
import './Product.css'
function Product(){
  return (
    <div className="detail">
      <div className="jumbotron text-center">
        <h1>Detail Phone</h1>
      </div>
      <div className="container">
        <Link to="/" className="btn-add">
          View
        </Link>
        <div className="detail-product">
          <figure className="img">
            <img
              src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Pro-Max-Deep-Purple-frontimage"
              alt="product"
            />
          </figure>
          <div className="infomation">
            <p className="detail-name">Name</p>
            <p className="detail-price">60000</p>
            <div className="detail-btn">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
              <button type="button" className="btn btn-warning">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;