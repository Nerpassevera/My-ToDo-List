/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// function render(component) {
// const root = document.createElement('div');
// ReactDOM.render(component, root);
//   return getQueriesForElement(root);
// }

test("ToDO", () => {
  const { getByText } = render(<App />);

  // After rendering our component
  // use Dom APIs (query selector) to make assertions

  // expect(root.querySelector('h1').textContent).toBe('ToDo-List');
  getByText("ToDo-List");
  getByText("Add");
  // expect(root.querySelector('button').textContent).toBe('Add');
});

test("add items to list", () => {
  const { getByText, getByTestId, getByPlaceholderText } = render(<App />);

  const input = getByPlaceholderText("Add ToDo ...");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(getByTestId("todo-input-button"));

  getByText("wash car");
});

// test('"done" button functionallity', () => {
//   const { getAllByText } = render(<App />);
  
//   const doneBtns = getAllByText("✅");
//   doneBtns.map((btn) => {
//     fireEvent.click(btn);
//   });
//   const updatedBtns = getAllByText("❌");
//   updatedBtns.map((btn) => {
//     expect(btn.textContent).toBe("❌");
//   });

// });

test ('userEvent allows users to add...', () => {
  const { getAllByText } = render(<App />);
  const doneBtns = getAllByText("✅");
  doneBtns.map((btn) => {
    userEvent.click(btn);
  });
  const updatedBtns = getAllByText("❌");
  updatedBtns.map((btn) => {
    expect(btn.textContent).toBe("❌");
  });
});