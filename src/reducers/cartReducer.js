import { ADD_BOOK_CART, GET_BOOK_CART } from "../actions/types";

const initialState = {
  cartAmount: 0,
  cartCost: 0,
  books: {
    think: {
      name: "Think!",
      price: 9.5,
      amount: 0,
      inCart: false,
    },
    blink: {
      name: "Blink",
      price: 6.5,
      amount: 0,
      inCart: false,
    },
    improve: {
      name: "Improve yourself",
      price: 11.5,
      amount: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_CART:
      let addOne = { ...state.books[action.payload] };
      addOne.amount += 1;
      addOne.inCart = true;
      return {
        ...state,
        cartAmount: state.cartAmount + 1,
        cartCost: state.cartCost + state.books[action.payload].price,
        inCart: true,
        books: {
          ...state.books,
          [action.payload]: addOne,
        },
      };
    case GET_BOOK_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
