import React from "react";
import Container from "../../Partials/Container/Container";
import Row from "../../Partials/Row/Row";
import Column from "../../Partials/Column/Column";
import Jumbotron from "../../Partials/Jumbotron/Jumbotron";
import FeaturedMealSelect from "../../Partials/MealCarousel/SlideComponent/FeaturedMealSelect";
import Card from "../../Partials/Card/Card";

const Main = () => {
  return (
    <Container mb="mb-5">
      <Jumbotron />
      <Row>
        <Column small={12}>
          <h1>Featured Meals</h1>
        </Column>
      </Row>
      <FeaturedMealSelect />
      <Row>
        <Column small={12} medium={4}>
          <Card title1="Easy">
            <h3>Eliminates the hassle of frequent grocery shopping</h3>
          </Card>
        </Column>
        <Column small={12} medium={4}>
          <Card title1="Healthy">
            <h3>
              Adding variety to your diet has been proven to increase health
            </h3>
          </Card>
        </Column>
        <Column small={12} medium={4}>
          <Card title1="Exciting">
            <h3>Try new and exciting dishes without worrying about health</h3>
          </Card>
        </Column>
      </Row>
      <br/><br/>
      <Container>
        <h2 className="text-dark text-center">Don't put off your health. Meal into it!</h2>
      </Container>
    </Container>
  );
};

export default Main;
