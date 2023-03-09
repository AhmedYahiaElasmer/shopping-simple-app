import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom/client";

class Product extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span>
            <Link to={`/products/${this.props.product.id}`}>
              {this.props.product.name}
            </Link>
          </span>
        </div>
        <div className="col mb-2">
          <span
            className={`badge bg-${
              this.props.product.count === 0 ? `warning` : `primary`
            } ms-2`}
          >
            {this.props.product.count}
          </span>
          <button
            className="btn btn-success ms-2 btn-sm"
            onClick={() => this.props.onIncrement(this.props.product)}
          >
            +
          </button>
          <button
            disabled={this.props.product.count === 0}
            className="btn btn-danger ms-2 btn-sm"
            onClick={() => this.props.onDecrement(this.props.product)}
          >
            -
          </button>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => this.props.onDelete(this.props.product)}
          >
            <i className="fa-solid fa-trash ms-2"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
