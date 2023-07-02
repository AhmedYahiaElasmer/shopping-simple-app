import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

function AddUser(props) {
  const [users, setusers] = useState(props.users);
  // const Axios = async () => {
  //   const res = await axios.get("http://13.49.173.228/shopify/getusers");

  //   setusers(res.data);
  // };
  // useEffect(() => {
  //   Axios();
  // }, []);
  // const params = useParams();
  // const history = useNavigate();
  // // Get Data From BackEnd
  // // useEffect(() => {
  // //   if (params.id !== "new") {
  // //     const pro = {
  // //       ...props.products.filter((e) => e.id === parseInt(params.id))[0],
  // //     };
  // //     setState(pro);
  // //   }
  // //     const data = axios.get("http://localhost:3000/products");
  // //     async function getData() {
  // //       // get data from server
  // //       if (params.id !== "new") {
  // //         const { data } = await axios.get(
  // //           `http://localhost:3000/products/${params.id}`
  // //         );
  // //         // clone
  // //         const newState = { ...state };
  // //         // edit
  // //         newState.name = data.name;
  // //         newState.price = data.price;
  // //         newState.id = data.id;
  // //         // setstate
  // //         setState(newState);
  // //       }
  // //     }
  // //     getData();
  // // }, []);

  // // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { username: e.target.username.value };
    await axios
      .post("http://13.49.173.228/shopify/newuser", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    window.location.reload();
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
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <input
            name="username"
            id="name"
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

export default AddUser;
