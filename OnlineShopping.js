import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Onlinepic from "./assets/Onlinepic.png";

class Online extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.head}>ONLINE SHOPPING</Text>
        </View>

        <View>
          <Text style={styles.texthead}>
            Lorem Ipsum is simply dummy text of the printing and typesentting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since 1500s, when an unknown printer took in a gallery.
          </Text>
        </View>

        <View>
          <Image source={Onlinepic} style={styles.image}></Image>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>

        <View style={styles.dotscontainer}>
          <View style={styles.dotz}></View>
          <View style={styles.dots}></View>
          <View style={styles.dots}></View>
        </View>

        <View>
          <Text style={styles.skip}>Skip</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginTop: 40,
  },
  dotscontainer:{
    flexDirection: "row",
    justifyContent: "center",
    },
  dots: {
    height: 10,
    width: 10,
    backgroundColor: "#e6e8e8",
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 7,
    marginRight: 5,
  },
  dotz:{
    height: 10,
    width: 20,
    backgroundColor: "#9370DB",
    borderRadius: 7,
    marginTop: 30,
  },
  head: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  texthead: {
    fontSize: 16,
    color: "gray",
    lineHeight: 25,
  },
  image: {
    width: 300,
    height: 250,
    marginVertical: 30,
  },
  buttonContainer: {
    height: 50,
    alignItems: "center",
    backgroundColor: "#9370DB",
    marginHorizontal: 70,
    borderRadius: 30,
    marginTop: 0,
  },
  btn: {
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "200",
    marginVertical: 10,
  },
  skip: {
    marginTop: -20,
    color: "#69686A",
    fontSize: 16,
    alignSelf: "flex-end",
  },
});

export default Online;
