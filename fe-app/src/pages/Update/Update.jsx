import { Link, useNavigate, useParams } from "react-router-dom";
import AddPhoneForm from "../../components/AddPhoneForm/AddPhoneForm";
import axios from "axios";
import { useEffect, useState } from "react";

function Update() {
  const [phone, setPhone] = useState({});
  const navigate = useNavigate();
  const [id,setId] = useState();

  useEffect(()=>{
    
  },[])
  const params = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/phone/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setPhone(response.data);
      });
  }, [params.id]);
  
  const handleUpdate = async (phone) => {
     await axios
       .put(`http://localhost:8080/api/phone/${params.id}`, phone)
       .then((res) => {
         console.log(res);
         console.log(res.data);
       });
       navigate(`/product/${params.id}`)
  }
  
  return (
    <div className="App">
      <div className="container">
        <Link to="/" className="btn-add">
          View
        </Link>
        <div className="add-phone">
          <AddPhoneForm phone={phone} onUpdate={handleUpdate} isUpdate={true}/>
        </div>
      </div>
    </div>
  );
}

export default Update;
