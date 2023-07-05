import React, { createContext, useState } from "react";
// import { Currancycontextprovider } from "./currancycontext";

const usersidcontext = createContext();
// const currancycontext = createContext();

const Usercontextprovider = ({ children }) => {
  const [currancyvalue, setcurrancyvalue] = useState();
  const chagecurrancyvalue = (value) => {
    setcurrancyvalue(value);
    // console.log(value);
  };
  const [userid, setuserid] = useState();
  const chageuserid = (id) => {
    setuserid(id);
  };
  const [qty, setqty] = useState();
  const chageqty = (id) => {
    setqty(id);
  };
  const [prod, setprod] = useState();
  const chagprod = (id) => {
    setprod(id);
  };
  const [total, settotal] = useState();
  const chagtotal = (id) => {
    settotal(id);
  };
  return (
    <usersidcontext.Provider
      value={{
        currancyvalue,
        prod,
        chagprod,
        qty,
        chageqty,
        chagecurrancyvalue,
        userid,
        chageuserid,
        total,
        chagtotal,
      }}
    >
      {children}
      {/* <Currancycontextprovider extraProp={children} /> */}
      {/* {console.log({ children })} */}
    </usersidcontext.Provider>
  );
};

export { Usercontextprovider, usersidcontext };
