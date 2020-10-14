import { StatusBar } from "expo-status-bar";
import React from "react";
import Online from "./OnlineShopping";
import Payment from "./PaymentSuccessful";
import AddToCart from "./AddToCart";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      {/* <Online/> */}
      <Payment/>
      {/* <AddToCart/> */}
    </View>
  );
}
