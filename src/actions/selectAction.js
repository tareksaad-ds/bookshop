import { ADD_BOOK_CART } from "./types";

export const addBooks = (book) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BOOK_CART,
      payload: book,
    });
  };
};
