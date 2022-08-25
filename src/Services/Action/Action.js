import { Add_To_Cart, Remove_To_Cart } from "../Constants";

export const addtoCart = (data) => {
  return {
    type: Add_To_Cart,
    data: data,
  };
};

export const removetoCart = () => {
  return {
    type: Remove_To_Cart,
  };
};
