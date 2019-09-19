import React, { Component } from 'react';
import Axios from 'axios';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import BreakfastMealSelect from './BreakfastMealSelect';
import EntreMealSelect from './EntreMealSelect';
import SideMealSelect from './SideMealSelect';
import MealCarousel from '../MealCarousel';

class SlideComponent extends Component {
  
  state = {
    count: 0,
    meal: []
    //https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg
  };

  mealSelect = () => {
    // if(props === "breakfast") {
      this.setState({
        meal: (BreakfastMealSelect.state.breakfast)
      })
    // }
    // if(props === "entre") {
    //   EntreMealSelect
    // }
    // if(props === "side") {
    //   SideMealSelect
    // }
  }
  
  componentWillMount(){
    this.mealSelect();
  }


  handleIncrement = () => {
    // this.props.setIncrement();
    this.setState(prevState => {
      return { count: prevState.count + 1}
    })
  }

  handleDecrement = () => {
    // this.props.setDecrement();
    // this.setState({count: this.state.count + 1})
    this.setState(prevState => {
      return { count: prevState.count - 1}
    })
  }

  render() {
    return(
      this.state.meal.map(meal => {
        console.log(meal)
        return (
          <Slide>
            <div style={{
              "display": "flex",
              "flex-direction": "column", 
              "align-items": "flex-start"
            }}>
              <Image src={meal.strMealThumb} style={{"position": "absolute", "z-index": -1}}/>
              <div style={{"z-index": 1, "position": "absolute", "bottom": "10%", "align-self": "center"}}>
                <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                  {meal.strMeal}
                </p>
                <p style={{"background": "rgba(235, 235, 235, 0.6)", "text-align": "center"}}>
                  {"Count: " + this.state.count}
                </p>
                <p>
                  <button className={"btn btn-dark"} type="button" onClick={this.handleDecrement}>-1</button>
                  <button className={"btn btn-dark"} type="button" onClick={this.handleIncrement}>+1</button>
                </p>
              </div>
            </div>
          </Slide>
        );
      })
    )
  }
}

export default SlideComponent;