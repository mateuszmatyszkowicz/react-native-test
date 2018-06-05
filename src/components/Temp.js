import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import PlaceList from "./PlaceList/PlaceList";
import PlaceInput from "./PlaceInput/PlaceInput";
import PlaceDetail from "./PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../store/actions';
import placeImage from "../assets/x-black.png";

class App extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 25,
    margin: 10
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace(name) {
      return dispatch(addPlace(name));
    },
    onDeletePlace() {
      return dispatch(deletePlace());
    },
    onSelectPlace(key) {
      return dispatch(selectPlace(key));
    },
    onDeselectPlace() {
      return dispatch(deselectPlace());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
