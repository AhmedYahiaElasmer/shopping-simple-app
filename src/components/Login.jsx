import React, { useState } from "react";
import Joi from "joi-browser";
const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    errors: {},
  });

  const schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    // call Backend
  };
  const handleChange = (e) => {
    // clone
    let newstate = { ...state };
    // edit
    newstate[e.target.name] = e.target.value;
    // set state
    setState(newstate);
  };
  const validate = () => {
    const errors = {};
    const newstate = state;
    // delete newstate.errors;
    const res = Joi.validate(newstate, schema, { abortEarly: false });
    // if (res.error === null) return null;
    // for (const error of res.error.details) {
    //   errors[error.path] = error.message;
    // }
    // console.log(res);
  };
  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={state.username}
            onChange={handleChange}
            id="username"
            type="text"
            className="form-control"
          />
          {/* {state.errors.username && (
            <div className="alert alert-danger">{}</div>
          )} */}
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            name="password"
            value={state.password}
            onChange={handleChange}
            id="pass"
            type="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Login;
