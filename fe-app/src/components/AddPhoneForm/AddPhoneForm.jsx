import React, { useState } from "react";
import './AddPhoneform.css';

function AddPhoneForm(props) {
  const [name, SetName] = useState("");
  const [price, SetPrice] = useState(0);
  const [productImg, SetProductImg] = useState(
    "https://care.ntbprov.go.id/img/noimage.png"
  );

  const handleSubmit = () => {
    const newPhone = {
      name: name,
      price: price,
    };
    props.onAddUser(newPhone);
    SetName("");
    SetPrice(0);
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState == 2){
        SetProductImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
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
