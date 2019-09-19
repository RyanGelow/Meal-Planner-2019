import React from "react";
import Card from "../Card/Card";
import Column from "../Column/Column";
import Container from "../Container/Container";
import Row from "../Row/Row";
import { Link } from "react-router-dom";

const ShoppingLinks = props => {
  return (
    <Container mb={"mb-5"}>
      <Row>
        {/* link 1 */}
        <Column small={12} medium={4}>
          {/* Amazon Fresh */}
          <Card>
            <a
              class="btn btn-warning"
              href="https://shop.safeway.com/home.html?r=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
            >
              Safeway Delivery
            </a>
          </Card>
        </Column>
        {/* link 2 */}
        <Column small={12} medium={4}>
          <Card>
            <a
              class="btn btn-warning"
              href="https://www.costco.com/my-life-costco-grocery-online-delivery.html"
              target="_blank"
            >
              Costco Delivery
            </a>
          </Card>
        </Column>
        <Column small={12} medium={4}>
          <Card>
            <a
              class="btn btn-warning"
              href="https://www.amazon.com/AmazonFresh-Grocery/b?ie=UTF8&node=11825099011"
              target="_blank"
            >
              Amazon Fresh
            </a>
          </Card>
        </Column>
      </Row>
    </Container>
  );
};

export default ShoppingLinks;
