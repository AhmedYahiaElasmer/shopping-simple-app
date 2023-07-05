import React, { createContext, useContext, useState } from "react";

// Create the first context
const usersidcontext = createContext();

// Create the second context
const currancycontext = createContext();

// Create a component that uses the first context
function ComponentOne(props) {
  const [userid, setuserid] = useState();
  const chageuserid = (id) => {
    setuserid(id);
  };

  return (
    <usersidcontext.Provider value={{ userid, chageuserid }}>
      {props.children}
    </usersidcontext.Provider>
  );
}

// Create a component that uses the second context
function ComponentTwo(props) {
  const [currancyvalue, setcurrancyvalue] = useState();
  const chagecurrancyvalue = (value) => {
    setcurrancyvalue(value);
  };

  return (
    <currancycontext.Provider value={{ currancyvalue, chagecurrancyvalue }}>
      {props.children}
    </currancycontext.Provider>
  );
}

// // Create a parent component that provides both contexts
// function App(props) {
//   const firstContextValue = "First Context Value";
//   const secondContextValue = "Second Context Value";

//   return (
//     <usersidcontext.Provider value={{ userid, chageuserid }}>
//       <currancycontext.Provider value={{ currancyvalue, chagecurrancyvalue }}>
//         <div>
//           <ComponentOne />
//           <ComponentTwo />
//         </div>
//       </currancycontext.Provider>
//     </usersidcontext.Provider>
//   );
// }

// export default App;
