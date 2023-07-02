import React from "react";
import Cart from "./cart";
import Currancy from "../components/currancy";
const Menu = (props) => {
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
          <h1>Menu</h1>
        </div>
        <div className="d-flex">
          <h5 className="me-2">Currancy </h5> <Currancy />
        </div>
      </div>

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
              <tr key={product._id}>
                <td scope="row">{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Cart
                    product={product}
                    ProductOnChange={props.ProductOnChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Menu;
