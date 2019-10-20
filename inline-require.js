import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";

let VeryExpensive = null;

export default class Optimized extends Component {
  state = { loadExpensiveModule: false };

  onPressHandler = () => {
    if (VeryExpensive == null) {
      // load the expensive or third party module only when requried
      VeryExpensive = require("./VeryExpensive").default;
    }

    this.setState(() => ({
      loadExpensiveModule: true
    }));
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPressHandler}>
          <Text>Load</Text>
        </TouchableOpacity>
        {this.state.loadExpensiveModule ? <VeryExpensive /> : null}
      </View>
    );
  }
}
