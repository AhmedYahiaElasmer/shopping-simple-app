import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { usersidcontext } from "../components/usecontext";
import Currancy from "../components/currancy";

function Addproduct() {
  const { currancyvalue } = useContext(usersidcontext);
  const { userid } = useContext(usersidcontext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.username.value,
      price: e.target.prise.value,
      userid: userid,
      currancy: currancyvalue,
    };
    await axios
      .post("http://13.49.173.228/shopify/newproduct", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // window.location.reload();
    console.log(obj);
  };
  // const handleChange = async (e) => {
  //   // clone
  //   const newstate = { ...users };
  //   // edit
  //   newstate[e.target.username] = e.target.value;

  //   setusers({ uesrs: newstate });
  //   // set state
  // };
  return (
    <React.Fragment>
      <h2>
        {/* {params.id === "new" ? `Add Product` : `Edit Product ${params.id}`} */}
        <div
          className="d-flex"
          style={{
            flexWrap: "nowrap",
            alignContent: "space-around",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Add Product</h1>
          </div>
          <div className="d-flex">
            <h5 className="me-2">Currancy </h5> <Currancy />
          </div>
        </div>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="username"
            id="name"
            type="text"
            className="form-control"
            // value={state.name}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prise">Prise</label>
          <input
            name="prise"
            id="prise"
            type="text"
            className="form-control"
            // value={state.name}
            // onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Add
          {/* {params.id === "new" ? `Add` : `Edit`} */}
        </button>
      </form>
    </React.Fragment>
  );
}

export default Addproduct;
