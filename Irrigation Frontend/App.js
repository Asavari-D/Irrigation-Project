import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Header, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import RNSpeedometer from "react-native-speedometer";

export default class Source extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: "center", flex: 1 },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      sensorDataLoading: false,
      sensorDataSource: 0,
      switchValue: false,
    };
  }

  componentDidMount() {
    const handleFetch = () => {
      fetch("http://192.168.149.209:5000/moisture")
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            sensorDataLoading: false,
            sensorDataSource: responseJson,
          });
          console.log(
            "Mositure value after hitting api" + this.state.sensorDataSource
          );
        });
      // .catch((error) => console.log(error)); //to catch the errors if any
    };
    setInterval(() => handleFetch(), 5000);
  }

  pumpOn() {
    fetch("http://192.168.149.209:5000/pumpOn").then((response) =>
      response.json()
    );
    // .catch((error) => console.log(error)); //to catch the errors if any
  }

  pumpOff() {
    fetch("http://192.168.149.209:5000/pumpOff").then((response) =>
      response.json()
    );
    // .catch((error) => console.log(error)); //to catch the errors if any}
  }

  render() {
    if (this.state.sensorDataLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "black" }}>
          <Text style={styles.titleText}>Automated Drip Irrigation System</Text>
        </View>

        <Card>
          <Image
            style={{
              width: "auto",
              height: "30%",
              alignItems: "center",
              marginBottom: 10,
              borderRadius: 20,
            }}
            source={require("./images/pic2.jpeg")}
          ></Image>
          <Text style={styles.normalText}>Current Mositure Level</Text>
          <View
            style={{ marginBottom: 80, borderWidth: 1, borderStyle: "dashed" }}
          >
            <RNSpeedometer
              value={this.state.sensorDataSource}
              size={300}
              maxValue={2000}
              labels={[
                {
                  name: "Very Dry",
                  labelColor: "#ff2900",
                  activeBarColor: "#ff2900",
                },
                {
                  name: "Dry",
                  labelColor: "#ff5400",
                  activeBarColor: "#ff5400",
                },
                {
                  name: "Fine",
                  labelColor: "#f4ab44",
                  activeBarColor: "#f4ab44",
                },
                {
                  name: "Moist",
                  labelColor: "#f2cf1f",
                  activeBarColor: "#f2cf1f",
                },
                {
                  name: "Wet",
                  labelColor: "#14eb6e",
                  activeBarColor: "#14eb6e",
                },
                {
                  name: "Very Wet",
                  labelColor: "#00ff6b",
                  activeBarColor: "#00ff6b",
                },
              ]}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.fixToText}>
              <Button
                icon={<Icon name="check-circle-o" size={20} color="black" />}
                iconLeft
                type="outline"
                raised
                onPress={this.pumpOn}
                title=" Water Pump On"
                // buttonStyle={{
                //   backgroundColor: "rgba(127, 220, 103, 1)",
                //   borderRadius: 30,
                // }}
                // containerStyle={{
                //   height: 50,
                //   width: "100%",
                // }}
                // titleStyle={{
                //   color: "black",
                //   marginHorizontal: 20,
                // }}
              ></Button>
              <Button
                icon={
                  <Icon
                    name="times-circle-o"
                    size={20}
                    color="black"
                    margin="5"
                  />
                }
                iconLeft
                type="outline"
                raised
                onPress={this.pumpOff}
                title=" Water Pump Off"
                // buttonStyle={{
                //   backgroundColor: "rgba(199, 43, 98, 1)",
                //   borderRadius: 30,
                // }}
                // containerStyle={{
                //   width: "100",
                //   height: 50,
                // }}
                // titleStyle={{
                //   color: "black",
                //   marginHorizontal: 20,
                // }}
              ></Button>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#DCDCDC",
  },
  fixToText: {
    justifyContent: "space-between",
    marginTop: 30,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c4de1",
    margin: 5,
    color: "white",
    textAlign: "center",
  },
  normalText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
