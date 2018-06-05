import React, { Component } from "react";
import { Provider } from "react-redux";
import configuredStore from "./src/store/configureStore";
import App from './src';

export default class HomeScreen extends Component {
  render() {
    return (
      <Provider store={configuredStore()}>
        <App />
      </Provider>
    )
  }
}
