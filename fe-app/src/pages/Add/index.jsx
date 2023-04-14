import { Link } from "react-router-dom";
import AddPhoneForm from "../../components/AddPhoneForm/AddPhoneForm";
import './Add.css';
import axios from "axios";

function Add() {

  const handleAdd = (phone)=>{
    axios.post(`http://localhost:8080/api/phone`, phone).then((res) => {
      console.log(res);
      console.log(res.data);
    });
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
          <AddPhoneForm onAddUser={handleAdd} isUpdate={false} />
        </div>
      </div>
    </div>
  );
}

export default Add;
