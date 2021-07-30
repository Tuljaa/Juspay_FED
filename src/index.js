import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import store from './components/Store'
import { Provider } from 'react-redux'
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

//console.log("hi");
//store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <DndProvider backend={HTML5Backend}> 
  <Provider store={store}>
    <App />
  </Provider>
  </DndProvider> ,
  document.getElementById("root")
);

