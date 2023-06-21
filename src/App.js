import { useEffect } from 'react';
import "./App.css";
import { Data } from "./components/Data";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./features/apiSlice";
import {
  useComponentDidMount,
  useComponentDidUpdate, 
  useComponentWillUnmount
} from "./utils.js";

function App() {
  useComponentDidMount(() => {
    console.log("Component did mount!");
  });

  useComponentDidUpdate(() => {
    console.log("Component did update!");
  });

  useComponentWillUnmount(() => {
    console.log("Component will unmount!");
  });
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <div className="App">
          <Data />
        </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
