import { GETCURRANCY, GETUSERS } from "../types/type";

const Initial = {
  users: [],
  currancy: "",
  products: {
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
  },
};
export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case GETUSERS:
      return { ...state, users: action.data };
    case GETCURRANCY:
      return { ...state, currancy: action.data };

    default:
      return { ...state };
  }
};
