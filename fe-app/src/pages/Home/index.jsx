import { Link } from "react-router-dom";
import Card from "../../components/Card";
import './Home.css';
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  const [phoneTest,SetPhoneTests] = useState([]);

  useEffect(()=>{
     axios.get(`http://localhost:8080/api/phone`).then((response) => {
       const phones = response.data;
       console.log(phones);
       SetPhoneTests(phones);
      });
    },[])
    
    return (
      <div className="App">
      <div className="container">
        <Link to='/add-phone' className="btn-add">
          Add Phone
        </Link>
        <div className="list-card">
          {phoneTest.map((phone) => {
            const path = (phone.image) ? "data:image/png;base64," + phone.image : "https://care.ntbprov.go.id/img/noimage.png";
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