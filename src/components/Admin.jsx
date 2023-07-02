import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Currancy from "./currancy";

const Admin = (props) => {
  const history = useNavigate();
  return (
    <React.Fragment>
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
          <h1>Admin</h1>
        </div>
        <div className="d-flex">
          <h5 className="me-2">Currancy </h5> <Currancy />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          history("../productEdit/new");
        }}
      >
        Add
      </button>
      <hr />
      <div className="table-responsive">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col" className="col-md-2">
                Name
              </th>
              <th colSpan={3} className="col-md-2">
                price
              </th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product) => (
              <tr key={product.id}>
                <td scope="row">{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      history(`../productEdit/${product.id}`);
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => props.DeleteHandler(product)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Admin;
