import { Link } from "react-router-dom";
import AddPhoneForm from "../../components/AddPhoneForm/AddPhoneForm";
import './Add.css';

function Home() {

  const handleAdd = (phone)=>{
    console.log(phone);
  }

  return (
    <div className="App">
      <div className="jumbotron text-center">
        <h1>Add Phone</h1>
      </div>
      <div className="container">
        <Link to="/" className="btn-add">
          View
        </Link>
        <div className="add-phone">
          <AddPhoneForm onAddUser={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default Home;
