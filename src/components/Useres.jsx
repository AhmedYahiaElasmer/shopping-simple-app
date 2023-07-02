import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddUser from "../Pages/AddUser";

function Useres() {
  const [users, setusers] = useState();
  const Axios = async () => {
    const res = await axios.get("http://13.49.173.228/shopify/getusers");

    setusers(res.data);
  };
  useEffect(() => {
    Axios();
  }, []);
  const handleSubmit = (e) => {};
  const handleChange = (e) => {
    // clone
  };
  const Deleteuser = async (item) => {
    // state
    // Clone, Edit
    // const usernew = users.filter((p) => p._id !== item._id);
    // // Set State
    // setusers({ users });
    // BackEnd delete
    // try {
    // call B
    await axios.delete(`http://13.49.173.228/shopify/deleteusers/${item._id}`);
    // setusers({ users });
    window.location.reload();

    // } catch (error) {
    //   toast.error("Cant Delete");
    //   setusers({ users: users });
    // }
  };
  const adduser = () => {};

  return (
    <React.Fragment>
      <h1>users</h1>
      <button className="btn btn-primary" onClick={adduser}>
        Add
      </button>
      <hr />
      <div className="table-responsive">
        <table className="table table-sm">
          <thead>
            <th scope="col" className="col-md">
              Name
            </th>
          </thead>
          <tbody>
            {users &&
              users.map((item) => (
                <tr key={item._id}>
                  <td scope="row">
                    <Button>{item.username}</Button>
                  </td>

                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      // onClick={() => {
                      //   history(`../productEdit/${product.id}`);
                      // }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => {
                        Deleteuser(item);
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Useres;
