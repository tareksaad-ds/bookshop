import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import think from "../../assets/b1.jpg";
import blink from "../../assets/b2.jpg";
import improve from "../../assets/b3.jpg";

function Cart({ cartProps }) {
  let booksCart = [];
  Object.keys(cartProps.books).forEach(function (item) {
    console.log(item);
    console.log(cartProps.books[item].inCart);
    if (cartProps.books[item].inCart) {
      booksCart.push(cartProps.books[item]);
    }
  });
  const productImages = [think, blink, improve];
  booksCart = booksCart.map((book, index) => {
    return (
      <Fragment>
        <div className="product">
          <img src={productImages[index]} alt="1" />
          <span className="sm-hide">{book.name}</span>
        </div>
        <div className="price sm-hide">${book.price}</div>{" "}
        <div className="quantity">
          <span>{book.amount}</span>
        </div>
        <div className="total">${book.amount * book.price}</div>
      </Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h4 className="product-title">PRODUCT</h4>
        <h4 className="price sm-hide">PRICE</h4>
        <h4 className="qunatity">QUANTITY</h4>
        <h4 className="total">TOTAL</h4>
      </div>
      <div className="products">{booksCart}</div>
      <div className="basketTotalContainer">
        <h3 className="basketTotalTitle">CART TOTAL</h3>
        <h3 className="basketTotal">${cartProps.cartCost}</h3>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps)(Cart);
