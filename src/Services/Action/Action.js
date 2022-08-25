import { AddToNumber, RemoveToNumber } from "../Constants";

export const addData = (number) => {
  return {
    type: AddToNumber,
    data: number,
  };
};

export const prevData = (number) => {
  return {
    type: RemoveToNumber,
    data: number,
  };
};
