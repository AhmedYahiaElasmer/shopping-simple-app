import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { usersidcontext } from "./usecontext";
import { toast } from "react-toastify";

function Orders() {
  //
  useEffect(() => {
    // var confirmed = confirm("Are you sure you want to delete this item?");
  }, []);
  const { userid } = useContext(usersidcontext);
  const { currancyvalue } = useContext(usersidcontext);
  const { qty } = useContext(usersidcontext);
  const { prod } = useContext(usersidcontext);
  const { total } = useContext(usersidcontext);
  // console.log(qty);
  const [orders, setorders] = useState({
    prodid: {},

    date: "",

    qty: 0,

    total: 0,

    rate: 0,

    sessiontime: 0,

    channel: "",

    location: "",

    device: "",

    traffic: "",

    currancy: "",

    userid: "",
  });
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log(e);
    await axios
      .post("http://13.49.173.228/shopify/neworder", e)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    // window.location.reload();
  };
  const onsubmith = (e) => {
    e.preventDefault();

    //clone//edite
    const order = {
      ...orders,
      date: e.target[0].value,
      channel: e.target[1].value,
      location: e.target[2].value,
      rate: e.target[6].value,
      traffic: e.target[3].value,
      device: e.target[4].value,
      sessiontime: e.target[5].value,
      userid: userid,
      currancy: currancyvalue,
      qty: qty,
      prodid: prod,
      total: total,
    };

    handleSubmit(order);
    console.log(order);
    toast.success("Order added successfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <Container fluid>
        <Form
          onSubmit={onsubmith}
          className="d-flex"
          style={{
            flexDirection: "column",
            flexWrap: " wrap",
            alignContent: "stretch",
            justifyContent: " space-around",
            alignItems: "stretch",
            margin: " 20px",
            padding: "10px",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div
              className="d-flex"
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "nowrap",
                margin: " 2px",
                padding: "1px",
                flexDirection: "row",
                width: "20vw",
              }}
            >
              <Form.Control name="date" type="date" placeholder="Due date" />
            </div>

            <div
              className="d-flex"
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "nowrap",
                flexDirection: "row",
                margin: " 2px",
                padding: "1px",
              }}
            >
              <Form.Label>
                <h3>Channels</h3>
              </Form.Label>
              <Form.Select
                name="channel"
                style={{
                  width: "30%",
                }}
                aria-label="Default select example"
              >
                <option value="channel-1">channel-1</option>
                <option value="channel-2">channel-2</option>
                <option value="channel-3">channel-3</option>
                <option value="channel-4">channel-4</option>
              </Form.Select>
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "nowrap",
                flexDirection: "row",
                margin: " 2px",
                padding: "1px",
              }}
            >
              <Form.Label>
                <h3>Locations</h3>
              </Form.Label>
              <Form.Select
                style={{
                  width: "30%",
                }}
                aria-label="Default select example"
              >
                <option value="location-1">location-1</option>
                <option value="location-2">location-2</option>
                <option value="location-3">location-3</option>
                <option value="location-4">location-4</option>
              </Form.Select>
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "nowrap",
                margin: " 2px",
                padding: "1px",
                flexDirection: "row",
              }}
            >
              <Form.Label>
                <h3>Traffics</h3>
              </Form.Label>
              <Form.Select
                style={{
                  width: "30%",
                }}
                aria-label="Default select example"
              >
                <option value="traffic-1">traffic-1</option>
                <option value="traffic-2">traffic-2</option>
                <option value="traffic-3">traffic-3</option>
                <option value="traffic-4">traffic-4</option>
              </Form.Select>
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "nowrap",
                margin: " 2px",
                padding: "1px",
                flexDirection: "row",
              }}
            >
              <Form.Label>
                <h3> Device </h3>
              </Form.Label>
              <Form.Select
                style={{
                  width: "30%",
                }}
                aria-label="Default select example"
              >
                <option value="android">android</option>
                <option value="iphone">iphone</option>
                <option value=">windows">windows</option>
                <option value="mac">mac</option>
              </Form.Select>
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "nowrap",
                margin: " 2px",
                padding: "1px",
                flexDirection: "row",
              }}
            >
              <Form.Label>
                <h3> sessiontime </h3>
              </Form.Label>
              <Form.Select
                style={{
                  width: "30%",
                }}
                aria-label="Default select example"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </Form.Select>
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "nowrap",
                margin: " 2px",
                padding: "1px",
                flexDirection: "row",
              }}
            >
              <Form.Label>
                <h3> Rate </h3>
              </Form.Label>
              <Form.Select
                style={{
                  width: "30%",
                }}
                aria-label="Default select example"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Orders;
