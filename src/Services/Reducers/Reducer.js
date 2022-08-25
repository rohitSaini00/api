import { Add_To_Cart, Remove_To_Cart } from "../Constants";

export default function cardItem(state = [], action) {
  switch (action.type) {
    case Add_To_Cart:
      return [...state, { cardData: action.data }];
    case Remove_To_Cart:
      state.pop();
      return [...state];
    default:
      return state;
  }
}
