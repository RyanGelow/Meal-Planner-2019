import React, { Component } from "react";
import Container from "../../Partials/Container/Container";
import Navbar from "../../Partials/Navbar/Navbar";
import Row from "../../Partials/Row/Row";

class ShoppingList extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <h1>Shopping List/ Grocery List</h1>
          </Row>
        </Container>
        {/* grocery/ shopping list dump */}
        <Container />
        {/* grocery store/ delivery/ online shopping links */}
        <Container>links go here</Container>
      </div>
    );
  }
}

export default ShoppingList;
