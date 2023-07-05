import React, { createContext, useState } from "react";

const currancycontext = createContext();

const Currancycontextprovider = ({ children }) => {
  const [currancyvalue, setcurrancyvalue] = useState();
  const chagecurrancyvalue = (value) => {
    setcurrancyvalue(value);
  };
  return (
    <currancycontext.Provider value={{ currancyvalue, chagecurrancyvalue }}>
      {children}
      {/* {console.log({ extraProp })} */}
    </currancycontext.Provider>
  );
};

export { Currancycontextprovider, currancycontext };
