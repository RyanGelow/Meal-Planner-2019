import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../actions";
import { Link } from 'react-router-dom';
import validator from "validator";
import Container from "./../components/Partials/Container/Container";
import Row from "./../components/Partials/Row/Row";
import Column from "./../components/Partials/Column/Column";
// import Footer from "./../components/Partials/Footer/Footer";

class Signup extends Component {
  renderErrors = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  };

  renderInput = ({
    name,
    input,
    label,
    meta,
    type,
    min,
    max,
    className,
    id,
    placeholder
  }) => {
    // console.log(meta);
    return (
      <Container>
        <Row className="d-flex justify-content-center mb-3">
          <Column small="12" medium="2" className="d-flex align-items-center">
            <div>{label}</div>
          </Column>
          <Column small="12" medium="9">
            <div>
              <input
                type={type}
                min={min}
                max={max}
                {...input}
                autoComplete="off"
                className={className}
                id={id}
                placeholder={placeholder}
              />
              {this.renderErrors(meta)}
            </div>
          </Column>
        </Row>
      </Container>
    );
  };

  renderRangeInput = ({
    name,
    input,
    label,
    meta,
    type,
    min,
    max,
    className,
    placeholder
  }) => {
    // console.log(meta);
    const output = function() {
      if (input.name === "height") {
        const feet = Math.floor(input.value / 12);
        const inches = input.value - feet * 12;
        if (inches > 0) {
          return feet + "' " + inches + '"';
        } else {
          return feet + "'";
        }
      }
      if (input.name === "weight") {
        return input.value + " lbs.";
      }
      if (input.name === "age") {
        return input.value;
      }
      if (input.name === "activity_level") {
        if (parseInt(input.value) === 1) {
          return "Sedentary";
        } else if (parseInt(input.value) === 2) {
          return "Less Active";
        } else if (parseInt(input.value) === 3) {
          return "Moderately Active";
        } else if (parseInt(input.value) === 4) {
          return "Very Active";
        }
      }
    };
    return (
      <Row className="d-flex justify-content-center mb-3">
        <Column small="12" medium="2">
          <label>{label}</label>
        </Column>
        <Column small="12" medium="8">
          <div>
            <input
              type={type}
              min={min}
              max={max}
              {...input}
              autoComplete="off"
              className={className}
              placeholder={placeholder}
            />
            {this.renderErrors(meta)}
          </div>
        </Column>
        <Column small="12" medium="1">
          <p>{output()}</p>
        </Column>
      </Row>
    );
  };

  renderRadioInput = ({
    name,
    input,
    label,
    meta,
    type,
    className,
    placeholder
  }) => {
    // console.log(meta);
    return (
      <span className="px-2">
        {label} <input type={type} {...input} autoComplete="off" />
        {this.renderErrors(meta)}
      </span>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.signup(formValues, () => {
      this.props.history.push("/profilepage");
    });
  };

  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <Container mb={"mb-5"}>
        <br />
        <br />
        <h1>Welcome to Meal Planner</h1>
        <br />
        <h5>Please enter the below information</h5>
        <br />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <Field
              name="email"
              type="text"
              label="Email"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter email"
            />
          </fieldset>
          <br />
          <fieldset>
            <Field
              name="password"
              type="password"
              label="Password"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter password"
            />
          </fieldset>
          <br />
          <fieldset>
            <Field
              name="first_name"
              type="text"
              label="First Name"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter First Name"
            />
          </fieldset>
          <br />
          <fieldset>
            <Field
              name="last_name"
              type="text"
              label="Last Name"
              component={this.renderInput}
              autoComplete="none"
              className="form-control"
              placeholder="Enter Last Name"
            />
          </fieldset>
          <br />
          <fieldset>
            <Row className="d-flex justify-content-center mb-3">
              <Column small="12" medium="2">
                <label>Gender</label>
              </Column>
              <Column small="12" medium="9">
                <Field
                  name="gender"
                  label="Male"
                  component={this.renderRadioInput}
                  type="radio"
                  value="male"
                  className="form-control mx-3"
                />
                <Field
                  name="gender"
                  label="Female"
                  component={this.renderRadioInput}
                  type="radio"
                  value="female"
                  className="form-control mx-3"
                />
              </Column>
            </Row>
          </fieldset>
          <br />
          <fieldset>
            <Field
              name="height"
              type="range"
              label="Height"
              min="40"
              max="96"
              step="1"
              component={this.renderRangeInput}
              autoComplete="none"
              className="form-control"
            />
          </fieldset>
          <br />
          <fieldset>
            <Field
              name="weight"
              type="range"
              label="Weight in Lbs."
              min="75"
              max="350"
              component={this.renderRangeInput}
              autoComplete="none"
              className="form-control"
            />
          </fieldset>
          <br />
          <fieldset>
            <Field
              name="age"
              type="range"
              label="Age in Years"
              min="16"
              max="115"
              component={this.renderRangeInput}
              autoComplete="none"
              className="form-control"
            />
          </fieldset>
          <br />
          <fieldset>
            <Row>
              <Column small="12" medium="2">
                <label>Activity Level</label>
              </Column>
              <Column small="12" medium="9">
                <Field
                  name="activity_level"
                  label="Sedentary"
                  component={this.renderRadioInput}
                  type="radio"
                  value="1"
                  className="form-control"
                />
                <Field
                  name="activity_level"
                  label="Less Active"
                  component={this.renderRadioInput}
                  type="radio"
                  value="2"
                  className="form-control"
                />
                <Field
                  name="activity_level"
                  label="Moderately Active"
                  component={this.renderRadioInput}
                  type="radio"
                  value="3"
                  className="form-control"
                />
                <Field
                  name="activity_level"
                  label="Very Active"
                  component={this.renderRadioInput}
                  type="radio"
                  value="4"
                  className="form-control"
                />
              </Column>
            </Row>
          </fieldset>
          <br />
          <br />
          <h5>
            Signup submits your information anonymously for custom results
          </h5>
          <br />
          <button type="submit" className="btn btn-lg btn-outline-warning mb-5">
            Signup
          </button>
          <br />
          <br />
        </form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

const validate = formValues => {
  const errors = {};
  // console.log("validator", formValues);

  if (!formValues.email) {
    errors.email = "You must enter an email";
  }

  if (formValues.email) {
    if (!validator.isEmail(formValues.email)) {
      errors.email = "You must enter a valid email address";
    }
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

export default compose(
  connect(
    mapStateToProps,
    { signup }
  ),
  reduxForm({
    form: "signup",
    validate
  })
)(Signup);
