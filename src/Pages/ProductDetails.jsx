import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import queryString from "query-string";
const ProductDetails = (props) => {
  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  const locaiton = useLocation();
  // console.log(locaiton);
  // const parsed = queryString.parse(locaiton.search);
  // console.log(parsed);

  // const product = props.products.filter((e) => e.id === parseInt(params.id))[0];
  // console.log(product.id);
  const prodct = props.products.filter((p) => p.id === parseInt(params.id))[0];

  console.log("{props.prodct}", prodct);

  const handleSave = () => {
    navigate("/cart", { replace: true });
  };
  return (
    <React.Fragment>
      <h2>Product No.{prodct.id}</h2>
      <h2>{prodct.name}</h2>
      <h2>Count in Shopping Cart: {prodct.count}</h2>
      <button className="btn btn-primary btn-sm m-2" onClick={handleSave}>
        Save
      </button>
    </React.Fragment>
  );
};

export default ProductDetails;
