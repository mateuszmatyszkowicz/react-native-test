import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = placeName => {
    this.setState({
      placeName
    });
  };

  onPlaceInputSubmit = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.resetInput();
  };

  resetInput = () => this.setState({ placeName: "" });

  render() {
    const { placeName } = this.state;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder="Type what you want ;)"
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.onPlaceInputSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
