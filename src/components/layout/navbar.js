import React from "react";
import {
  Badge,
  Container,
  Form,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import { FaCartArrowDown, FaSistrix } from "react-icons/fa";
import "./navbar.css";
import { connect } from "react-redux";
import { getBooks } from "../../actions/getAction";
import { Link } from "react-router-dom";

function Nvbar(props) {
  return (
    <div className="navy">
      <Navbar expand="md">
        <Container>
          <Form inline>
            <InputGroup>
              <FormControl
                id="searchtool"
                type="text"
                placeholder="Search Product"
                aria-label="Input group example"
                aria-describedby="NvbarbtnGroupAddon"
              />
              <InputGroup.Append>
                <InputGroup.Text id="btnGroupAddon">
                  <FaSistrix />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <div className="sub">
            <Link to="/">
              <h1 className="home">BOOKSHOP</h1>
            </Link>
            <span className="sub">World of books</span>
          </div>
          <div className="carty">
            <span className="doll">${props.cartProps.cartCost}</span>
            <Badge style={{ fontSize: "20px" }} variant="secondary">
              {" "}
              {props.cartProps.cartAmount}
            </Badge>
            <Link to="/cart">
              <FaCartArrowDown className="cart" />
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getBooks })(Nvbar);
