import { Link } from "react-router-dom";
import Card from "../../components/Card";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [phoneTest, SetPhoneTests] = useState([]);
  const [brands,setBrand] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/phone`,{
        params: {
          brand:"",
        },
      })
      .then((response) => {
        const phones = response.data;
        SetPhoneTests(phones);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/phone/brands`)
      .then((response) => {
        const data = response.data;
        setBrand(data);
      });
  }, []);

  const handleClickBrand = (value) => {
    axios
      .get(`http://localhost:8080/api/phone`, {
        params: {
          brand: value,
        },
      })
      .then((response) => {
        const phones = response.data;
        SetPhoneTests(phones);
      });
  }

  return (
    <div className="home-display">
      <div className="brand">
        <p className="brand-item" onClick={()=>{handleClickBrand("")}}>All</p>
        {
          brands.map((brand,index)=>{
            return (
              <p
                key={index} className="brand-item"
                onClick={() => {
                  handleClickBrand(brand.value);
                }}
              >
                {brand.value}
              </p>
            );
          })
        }
      </div>
      <div className="container">
        <Link to="/add-phone" className="btn-add">
          Add Phone
        </Link>
        <div className="list-card">
          {phoneTest.map((phone) => {
            const path = phone.image
              ? "data:image/png;base64," + phone.image
              : "https://care.ntbprov.go.id/img/noimage.png";
            return (
              <Card
                key={phone.id}
                name={phone.name}
                price={phone.price}
                id={phone.id}
                brand={phone.brand}
                path={path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
