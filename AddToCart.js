import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Add from "./assets/Add.png";

class AddToCart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.head}>ADD TO CART</Text>
        </View>

        <View>
          <Text style={styles.Texthead}>
            Lorem Ipsum is simply dummy text of the printing and typesentting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since 1500s, when an unknown printer took
          </Text>
        </View>

        <View>
          <Image source={Add} style={styles.image}></Image>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>

        <View style={styles.swip}>
          <Text style={styles.previous}>Previous</Text>
          <View style={styles.dotscontainer}>
            <View style={styles.dots}></View>
            <View style={styles.dotz}></View>
            <View style={styles.dots}></View>
          </View>
          <Text style={styles.skip}>Skip</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 60,
  },
  swip:{
    flexDirection: "row",
  },
  head: {
    marginLeft: 50,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  dotscontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 40,
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
  dotz: {
    height: 10,
    width: 20,
    backgroundColor: "#9370DB",
    borderRadius: 7,
    marginTop: 30,
  },
  Texthead: {
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
    // marginTop: -9,
    marginLeft: 80,
    color: "#69686A",
    fontSize: 16,
    alignSelf: "flex-end",
  },
  previous: {
    marginTop: 24,
    color: "#69686A",
    fontSize: 16,
    alignSelf: "flex-start",
  },
});

export default AddToCart;
