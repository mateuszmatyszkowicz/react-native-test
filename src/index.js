import React, { Component } from "react";
import { AppLoading, Font } from 'expo';
import { SignedOut, SignedIn, createRootNavigation } from "./router";
import { isSignedIn } from './auth';

export default class HomeScreen extends Component {
  state = {
    loading: true,
    signedIn: false,
    checkedSignIn: false,
  }

  async componentDidMount() {
    isSignedIn()
        .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
        .catch(err => alert("AN error occured"));

    await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });

    this.setState({ loading: false })
  }

  render() {
      if (this.state.loading) {
          return <AppLoading />
      }

      const EntryRoot = createRootNavigation(this.state.signedIn);

      return (
        <EntryRoot />
      )
  }
}
