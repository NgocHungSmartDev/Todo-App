import React, { useEffect, useState } from "react";
import './AddPhoneform.css';

function AddPhoneForm(props) {
  const [name, SetName] = useState('');
  const [price, SetPrice] = useState(0);
  const [brand,Setbrand] = useState('');
  const [productImg, SetProductImg] = useState(
    "https://care.ntbprov.go.id/img/noimage.png"
  );

  useEffect(()=>{
    SetName(props.phone?.name);
    SetPrice(props.phone?.price);
    Setbrand(props.phone?.brand);
     const path = props.phone?.image
       ? "data:image/png;base64," + props.phone.image
       : "https://care.ntbprov.go.id/img/noimage.png";
       SetProductImg(path)
  },[props.phone])
  
  const [image,SetImage]=useState();
  
  const handleSubmit = () => {
    const newPhone = {
      name: name,
      price: price,
      brand: brand,
      image: image
    };
      props.isUpdate ? props.onUpdate(newPhone) : props.onAddUser(newPhone);
    SetName("");
    SetPrice(0);
    Setbrand("");
  };

  const imageHandler = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState == 2){
        SetProductImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
    const byteFile = [].slice.call((await getAsByteArray(e.target.files[0])));
    SetImage(byteFile);
  }

  async function getAsByteArray(file) {
    return new Uint8Array(await readFile(file));
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      // Create file reader
      let reader = new FileReader();

      // Register event listeners
      reader.addEventListener("loadend", (e) => resolve(e.target.result));
      reader.addEventListener("error", reject);

      // Read file
      reader.readAsArrayBuffer(file);
    });
  }


  return (
    <>
      <h5>Chọn ảnh</h5>
      <input
        className="custom-file-input"
        type="file"
        style={{ marginBottom: 20 }}
        accept="image/*"
        onChange={imageHandler}
      />
      <img src={productImg} className="img-product" alt="" />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            SetName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name="brand"
          className="form-control"
          placeholder="Enter Brand"
          value={brand}
          onChange={(e) => {
            Setbrand(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          className="form-control"
          placeholder="Enter price"
          value={price}
          onChange={(e) => {
            SetPrice(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Save
      </button>
    </>
  );
}

export default AddPhoneForm;
