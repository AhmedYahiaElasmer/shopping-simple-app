import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const ProductEdit = (props) => {
  const [state, setState] = useState({
    id: "",
    name: "",
    price: "",
    count: 0,
    isInCart: false,
  });
  const params = useParams();
  const history = useNavigate();
  // Get Data From BackEnd
  useEffect(() => {
    if (params.id !== "new") {
      const pro = {
        ...props.products.filter((e) => e.id === parseInt(params.id))[0],
      };
      setState(pro);
    }
    //   // const data = axios.get("http://localhost:3000/products");
    //   // const { res } = await axios.get("http://localhost:3000/products");
    //   async function getData() {
    //     // get data from server
    //     if (params.id !== "new") {
    //       const { data } = await axios.get(
    //         `http://localhost:3000/products/${params.id}`
    //       );
    //       // clone
    //       const newState = { ...state };
    //       // edit
    //       newState.name = data.name;
    //       newState.price = data.price;
    //       newState.id = data.id;
    //       // setstate
    //       setState(newState);
    //     }
    //   }
    //   getData();
  }, []);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add
    if (params.id === "new") {
      // clone
      const newstate = { ...state };
      // edit
      newstate.id = props.products.length + 1;
      props.AdminEditHandler(newstate);
      // if i have backend server
      // const obj = { ...state, count: 0, isInCart: false };
      // // Post Data To DataBase
      // await axios.post("http://localhost:3000/products", obj);
    } else {
      const editstate = { ...state };
      if (params.id <= props.products.length) {
        const pro = props.products.filter(
          (e) => e.id === parseInt(params.id)
        )[0];
        pro.name = editstate.name;
        pro.price = editstate.price;
        props.AdminEditHandler(pro);
      }
      // if i have backend server
      // Edit
      // const obj = { ...state, count: 0, isInCart: false };
      // // delete id
      // delete obj.id;
      // await axios.put(`http://localhost:3000/products/${state.id}`, obj);
    }
    history("/admin", { replace: true });
  };
  const handleChange = (e) => {
    // clone
    const newstate = { ...state };
    // edit
    newstate[e.target.name] = e.target.value;
    // set state
    setState(newstate);
  };
  return (
    <React.Fragment>
      <h2>
        {params.id === "new" ? `Add Product` : `Edit Product ${params.id}`}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="form-control"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            name="price"
            id="price"
            type="number"
            className="form-control"
            value={state.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          {params.id === "new" ? `Add` : `Edit`}
        </button>
      </form>
    </React.Fragment>
  );
};

export default ProductEdit;
