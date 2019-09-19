import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchMeals } from "../actions";

import requireAuth from './../hoc/requireAuth';

class Meal extends Component {

  componentDidMount() {
    this.props.fetchMeals();
  }

//   onSubmit = formValues => {
//     this.props.addTodo(formValues);
//   }

  renderMeals() {
    return this.props.meals.map(meal => {
      return (
        <div key={meal._id}>
          <p>{meal._id}</p>
          <p>{meal.description}</p>
          {/* <p>{todo.completed.toString()}</p> */}
        </div>
      );
    })
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.meals);
    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <label>Meal Selection</label>
          <Field
            name='description'
            type='text'
            component='input'
            autoComplete='none'
          />
          <button>Add meal</button>
        </form>
        {this.renderMeals()}
      </div>
    );
  }
}

function mapStateToProps({ meal }) {
  return { meals: meal.meals };
}

const formedComponent = compose(
  connect(mapStateToProps, { fetchMeals }),
  reduxForm({ form: 'Add meal'})
)(Meal);

export default requireAuth(formedComponent);