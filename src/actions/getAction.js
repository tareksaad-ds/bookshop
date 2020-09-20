import { GET_BOOK_CART } from "./types";

export const getBooks = () => {
  return (dispatch) => {
    dispatch({
      type: GET_BOOK_CART,
    });
  };
};
