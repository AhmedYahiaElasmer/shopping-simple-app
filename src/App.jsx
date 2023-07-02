import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

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
import Useres from "./components/Useres";
import AddUser from "./Pages/AddUser";

function App() {
  const [users, setusers] = useState();
  const [state, setstate] = useState({
    products: [],
  });

  const Axios = async () => {
    const res = await axios.get("http://13.49.173.228/shopify/getusers");
    const users = res.data;
    setusers(users);
  };

  useEffect(() => {
    Axios();
  }, []);
  const componentDidMount = async () => {
    const products = await axios.get(
      `http://13.49.173.228/shopify/getallproducts/AED/${users[0]._id}`
    );

    setstate({ products: products.data });
  };
  console.log(users[0]._id);
  useEffect(() => {
    componentDidMount();
  }, []);
  console.log(users);

  // Call BackEnd Server
  //  componentDidMount() {
  // Calling BackEnd with Fetch then
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // const promise = fetch("https://jsonplaceholder.typicode.com/posts");
  // const res = promise.then((res) => res.json());
  // res.then((data) => console.log(data));
  //
  // Calling BackEnd with Axios
  // const products = await axios.get(
  //   `http://13.49.173.228/shopify/getallproducts/AED/64a05e4f234f4b27fcdac43f`
  // );
  // set state
  // this.setState({ products });

  // Call BackEnd Server with useEffect
  // useEffect(()=>{

  // });

  // Edit State When admin Edit

  const AdminEditHandler = (pro) => {
    if (pro.id <= state.products.length) {
      const products = [...state.products];
      setstate({ products });
    } else {
      // clone
      const products = [...state.products, pro];
      setstate({ products });
    }
  };
  // Increment Handler
  const IncrementHandler = (pro) => {
    // clone+
    const products = [...state.products];
    const index = products.indexOf(pro);
    products[index] = { ...products[index] };
    // edit
    products[index].count++;
    // set State
    setstate({ products });
  };

  // Decrement Handler
  const DecrementHandler = (pro) => {
    // clone
    const products = [...state.products];
    const index = products.indexOf(pro);
    // edit
    products[index] = {
      ...products[index],
      count: products[index].count - 1,
    };
    // set state
    setstate({ products });
  };

  // Delete Handler (item)
  const AdminDeleteHandler = async (pro) => {
    const oldState = [...state.products];
    // state
    // Clone, Edit
    const newProducts = state.products.filter((p) => p.id !== pro.id);
    // Set State
    setstate({ products: newProducts });
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
  const DeleteHandler = (pro) => {
    // Clone, Edit
    const products = [...state.products];
    const index = products.indexOf(pro);
    products[index] = {
      ...products[index],
      isInCart: !products[index].isInCart,
    };
    // Set State
    setstate({ products });
  };
  // Reset Handler
  const ResetHandler = () => {
    // clone
    let products = [...state.products];
    // edit
    products = products.map((e) => {
      e.count = 0;
      return e;
    });
    setstate({ products });
  };
  // ProductOnChange
  const ProductOnChange = (pro) => {
    // clone
    const products = [...state.products];
    const index = products.indexOf(pro);
    products[index] = {
      ...products[index],
      isInCart: !products[index].isInCart,
    };
    // set state
    setstate({ products });
    // console.log(products);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar
        users={users}
        productsCount={state.products.filter((e) => e.isInCart === true).length}
      />
      <main className="container">
        <Routes>
          <Route
            path="admin"
            element={
              // <h2>lol</h2>
              <Admin
                products={state.products}
                DeleteHandler={AdminDeleteHandler}
              />
            }
          />
          <Route
            path="productEdit/:id"
            element={
              <ProductEdit
                products={state.products}
                AdminEditHandler={AdminEditHandler}
              />
            }
          />
          {/* Product Details Route */}
          <Route
            path="/products/:id"
            element={<ProductDetails products={state.products} />}
          />
          {/* Cart Route */}
          <Route
            path="/cart"
            element={
              <ShoppingCart
                products={state.products}
                onIncrementHandler={IncrementHandler}
                onDecrementHandler={DecrementHandler}
                onDeleteHandler={DeleteHandler}
                onResetHandler={ResetHandler}
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
                products={state.products}
                ProductOnChange={ProductOnChange}
              />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="useres" element={<Useres />} />

          <Route path="/adduser" element={<AddUser users={users} />} />

          <Route path="*" element={<NoPagesFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
