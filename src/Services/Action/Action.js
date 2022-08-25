import { Add_To_Cart } from "../Constants";

export const addtoCart = (data) => {
  // console.log("action-data", data);
  return {
    type: Add_To_Cart,
    data: data,
  };
};
