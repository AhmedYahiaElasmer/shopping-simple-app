import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

function AddUser(props) {
  const [users, setusers] = useState(props.users);

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

  return (
    <React.Fragment>
      <h2></h2>
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
