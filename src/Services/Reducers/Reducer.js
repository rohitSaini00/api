import { Add_To_Cart } from "../Constants";

export default function cardItem(state = [], action) {
  switch (action.type) {
    case Add_To_Cart:
      return [...state, { cardData: action.data }];
    default:
      return state;
  }
}
