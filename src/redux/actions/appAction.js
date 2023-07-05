import React from "react";
import { BASEURL, GETCURRANCY, GETUSERS } from "../types/type";
import axios from "axios";

export const getAllUsers = () => {
  return async (dispatch) => {
    const res = await axios.get(`${BASEURL}/getusers`);
    console.log(res);
    // dispatch({ type: GETUSERS, data: res });
  };
};
export const getCurrancy = (e) => {
  return { type: GETCURRANCY, data: e };
};
