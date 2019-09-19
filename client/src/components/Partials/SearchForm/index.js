import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.categories array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="category">Category Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="category"
          list="categories"
          type="text"
          className="form-control"
          placeholder="Type in a food category to begin"
          id="category"
        />
        <datalist id="categories">
          {props.categories.map(category => (
            <option value={category} key={category} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
