import React, { Component, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
//
import NavBar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import NoPagesFound from "./Pages/NoPagesFound";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./components/Login";
import Admin from "./components/Admin";
import ProductEdit from "./Pages/ProductEdit";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Burger",
        price: "50",
        count: 0,
        isInCart: false,
      },
      {
        id: 2,
        name: "Fries",
        price: "30",
        count: 0,
        isInCart: false,
      },
      {
        id: 3,
        name: "water",
        price: "5",
        count: 0,
        isInCart: false,
      },
    ],
  };
  // Call BackEnd Server
  // async componentDidMount() {
  // Calling BackEnd with Fetch then
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // const promise = fetch("https://jsonplaceholder.typicode.com/posts");
  // const res = promise.then((res) => res.json());
  // res.then((data) => console.log(data));
  //
  // Calling BackEnd with Axios
  //const { data } = await axios.get("http://localhost:3000/products");
  // set state
  //this.setState({ products: data });
  //}
  // Call BackEnd Server with useEffect
  // useEffect (async ()=> {
  //   const { data} = await axios.get("http://localhost:3000/products");
  // });

  // Edit State When admin Edit
  AdminEditHandler = (pro) => {
    if (pro.id <= this.state.products.length) {
      const products = [...this.state.products];
      this.setState({ products });
    } else {
      // clone
      const products = [...this.state.products, pro];
      this.setState({ products });
    }
  };
  // Increment Handler
  IncrementHandler = (pro) => {
    // clone+
    const products = [...this.state.products];
    const index = products.indexOf(pro);
    products[index] = { ...products[index] };
    // edit
    products[index].count++;
    // set State
    this.setState({ products });
  };

  // Decrement Handler
  DecrementHandler = (pro) => {
    // clone
    const products = [...this.state.products];
    const index = products.indexOf(pro);
    // edit
    products[index] = {
      ...products[index],
      count: products[index].count - 1,
    };
    // set state
    this.setState({ products });
  };

  // Delete Handler (item)
  AdminDeleteHandler = async (pro) => {
    const oldState = [...this.state.products];
    // state
    // Clone, Edit
    const newProducts = this.state.products.filter((p) => p.id !== pro.id);
    // Set State
    this.setState({ products: newProducts });
    // BackEnd delete
    // try {
    //   // call B
    //   await axios.delete(`http://localhost:3000/products/${pro.id}`);
    // } catch (error) {
    //   toast.error("Cant Delete");
    //   this.setState({ products: oldState });
    // }
  };
  // Delete Handler (in cart only)
  DeleteHandler = (pro) => {
    // Clone, Edit
    const products = [...this.state.products];
    const index = products.indexOf(pro);
    products[index] = {
      ...products[index],
      isInCart: !products[index].isInCart,
    };
    // Set State
    this.setState({ products });
  };
  // Reset Handler
  ResetHandler = () => {
    // clone
    let products = [...this.state.products];
    // edit
    products = products.map((e) => {
      e.count = 0;
      return e;
    });
    this.setState({ products });
  };
  // ProductOnChange
  ProductOnChange = (pro) => {
    // clone
    const products = [...this.state.products];
    const index = products.indexOf(pro);
    products[index] = {
      ...products[index],
      isInCart: !products[index].isInCart,
    };
    // set state
    this.setState({ products });
    // console.log(products);
  };
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          productsCount={
            this.state.products.filter((e) => e.isInCart === true).length
          }
        />
        <main className="container">
          <Routes>
            <Route
              path="admin"
              element={
                // <h2>lol</h2>
                <Admin
                  products={this.state.products}
                  DeleteHandler={this.AdminDeleteHandler}
                />
              }
            />
            <Route
              path="productEdit/:id"
              element={
                <ProductEdit
                  products={this.state.products}
                  AdminEditHandler={this.AdminEditHandler}
                />
              }
            />
            {/* Product Details Route */}
            <Route
              path="/products/:id"
              element={<ProductDetails products={this.state.products} />}
            />
            {/* Cart Route */}
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  products={this.state.products}
                  onIncrementHandler={this.IncrementHandler}
                  onDecrementHandler={this.DecrementHandler}
                  onDeleteHandler={this.DeleteHandler}
                  onResetHandler={this.ResetHandler}
                />
              }
            />
            <Route path="about" element={<About />}>
              <Route path="team" element={<h2>Our Team</h2>} />
              <Route path="company" element={<h2>Our company</h2>} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route
              path="/"
              exact
              element={
                <Menu
                  products={this.state.products}
                  ProductOnChange={this.ProductOnChange}
                />
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPagesFound />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
