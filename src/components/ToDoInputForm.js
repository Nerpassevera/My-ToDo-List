import React from "react";
import PropTypes from "prop-types";

export default function ToDoInputForm({ AddItem }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    AddItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder="Add ToDo ..."
          data-testid="todo-input"
          onChange={(e) => setValue(e.target.value)}
          aria-describedby="button-addon1"
          />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon1"
          data-testid="todo-input-button"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
}

ToDoInputForm.propTypes = {
  AddItem: PropTypes.func.isRequired,
};
