import { Link, useNavigate, useParams } from "react-router-dom";
import "./Product.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const params = useParams();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
     axios
      .get(`http://localhost:8080/api/phone/${id}`)
      .then((response) => {
        setPhone(response.data);
      });
  },[]);

  const handleDelete = () => {
      axios.delete(`http://localhost:8080/api/phone/${id}`).then((response) => {
          navigate("/");
      });
  }

  const path = (phone?.image) ? "data:image/png;base64," + phone?.image : "https://care.ntbprov.go.id/img/noimage.png";
  return (
    <div className="detail">
      <div className="jumbotron text-center">
        <h1>Detail Phone</h1>
      </div>
      <div className="container">
        <Link to={`/`} className="btn-add">
          View
        </Link>
        <div className="detail-product">
          <figure className="img">
            <img src={path} alt="product" />
          </figure>
          <div className="infomation">
            <p className="detail-name">{phone?.name}</p>
            <p>{phone?.brand}</p>
            <p className="detail-price">{phone?.price}</p>
            <div className="detail-btn">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {navigate(`/update-product/${id}`)}}
              >
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
