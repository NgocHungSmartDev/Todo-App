import { Link } from "react-router-dom";
import Card from "../../components/Card";
import './Home.css'

function Home() {

  const phoneTest = [
    { id: 1, name: "iphone", price: 500 },
    { id: 2, name: "samsung", price: 600 },
    { id: 3, name: "oppo", price: 700 },
    { id: 3, name: "oppo", price: 700 },
  ];

  return (
    <div className="App">
      <div className="jumbotron text-center">
        <h1>Manage Phone</h1>
      </div>
      <div className="container">
        <Link to='/add-phone' className="btn-add">
          Add Phone
        </Link>
        <div className="list-card">
          {phoneTest.map((phone) => {
            return (
              <Card
                key={phone.id}
                name={phone.name}
                price={phone.price}
                id={phone.id}
                path={
                  "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;