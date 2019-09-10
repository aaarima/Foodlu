import configureStore from "./store/store";
import Root from "./components/root";
import React from 'react'
import ReactDom from 'react-dom'

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  let root = document.getElementById("root");

  window.getState = store.getState;

  ReactDom.render(<Root store={store}/>, root)
});