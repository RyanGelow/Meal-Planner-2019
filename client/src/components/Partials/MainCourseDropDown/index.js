import React, { Component } from "react";

export default class MainCourseDropDown extends Component {
  state = {
    display: false,
    categories: [
      "Beef",
      "Chicken",
      "Lamb",
      "Pasta",
      "Pork",
      "Seafood",
      "Vegan",
      "Vegetarian"
    ],
    choice: null
  };


  handleButtonClick = () => {
    this.setState({ display: !this.state.display });
  };

  handleMealClick = async (category, index) => {
    this.props.onMealSelect(category);
    this.setState({ display: !this.state.display, choice: category });
  };

  renderSwitch() {
    switch(this.state.choice) {
      case "Beef":
        return "Beef";
      case "Chicken":
        return "Chicken";
      case "Lamb":
        return "Lamb";
      case "Pasta":
        return "Pasta";
      case "Pork":
        return "Pork";
      case "Seafood":
        return "Seafood";
      case "Vegan":
        return "Vegan";
      case "Vegetarian":
        return "Vegetarian";
      case null:
        return "Select Meal Type";
      default: 
        return "Select Meal Type";

    }
  }

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.handleButtonClick}
        >
          {this.renderSwitch()} 
          {/* Select Meal Type */}
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
          style={{ display: this.state.display ? "block" : "none" }}
        >
          {this.state.categories.map((category, index) => {
            return (
              // function defined that onclick returns index of meal clicked
              <li
                onClick={() => {
                  this.handleMealClick(category, index);
                }}
                className="dropdown-item"
                key={index}
              >
                {category}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
