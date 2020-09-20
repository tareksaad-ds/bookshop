import React from "react";
import { Button, Card, Col, Container, Row, Carousel } from "react-bootstrap";
import "./main.css";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import { FaCartArrowDown } from "react-icons/fa";
import { connect } from "react-redux";
import { addBooks } from "../../actions/selectAction";

function Main(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block overlay w-100"
            src={book1}
            alt="First slide"
          />
          <Carousel.Caption>
            <Button id="bt">Go and Shopping</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={book2} alt="Third slide" />

          <Carousel.Caption>
            <Button id="bt">Go and Shopping</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="list" fluid="md">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img id="imge" variant="top" src={b1} />
              <Card.Body>
                <Card.Title>Think!</Card.Title>
                <Card.Text>
                  Think before it's too late - Edward De Bono
                </Card.Text>

                <Button onClick={() => props.addBooks("think")} id="bttun">
                  $9.5 {"  "}
                  <FaCartArrowDown />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img id="imge" variant="top" src={b2} />
              <Card.Body>
                <Card.Title>Blink</Card.Title>
                <Card.Text>
                  The power of thinking without thinking - Malcolm Gladwell
                </Card.Text>

                <Button onClick={() => props.addBooks("blink")} id="bttun">
                  $6.5 {"  "}
                  <FaCartArrowDown />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img id="imge" variant="top" src={b3} />
              <Card.Body>
                <Card.Title>Improve yourself</Card.Title>
                <Card.Text>
                  Build yourself by your passion - Tarek Saad
                </Card.Text>

                <Button onClick={() => props.addBooks("improve")} id="bttun">
                  $11.5{"  "}
                  <FaCartArrowDown />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img id="imge" variant="top" src={b1} />
              <Card.Body>
                <Card.Title>Think!</Card.Title>
                <Card.Text>
                  Think before it's too late - Edward De Bono
                </Card.Text>

                <Button onClick={() => props.addBooks("think")} id="bttun">
                  $9.5{"  "}
                  <FaCartArrowDown />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img id="imge" variant="top" src={b2} />
              <Card.Body>
                <Card.Title>Blink</Card.Title>
                <Card.Text>
                  The power of thinking without thinking - Malcolm Gladwell
                </Card.Text>

                <Button onClick={() => props.addBooks("blink")} id="bttun">
                  $6.5 {"  "}
                  <FaCartArrowDown />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img id="imge" variant="top" src={b3} />
              <Card.Body>
                <Card.Title>Improve yourself</Card.Title>
                <Card.Text>
                  Build yourself by your passion - Tarek Saad
                </Card.Text>

                <Button onClick={() => props.addBooks("improve")} id="bttun">
                  $11.5{"  "}
                  <FaCartArrowDown />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>Motivational Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Everything negative - pressure, challenges - is all an
                    opportunity for me to rise.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    American Basketball Player{" "}
                    <cite title="Source Title">Kobe Bryant </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Motivational Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    If you even dream of beating me you'd better wake up and
                    apologize.
                  </p>
                  <footer className="blockquote-footer">
                    American Boxer{" "}
                    <cite title="Source Title">Muhammed Ali</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect(null, { addBooks })(Main);
