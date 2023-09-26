import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constant/theme";

const CustomButton = ({ icon, label, height, fontSize, labelColor, bg }) => {
  return (
    <TouchableOpacity style={styles.cart(height, bg)}>
      {icon && icon}
      {label && (
        <Text style={styles.cartText(fontSize, labelColor)}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  cart: (height, bg) => ({
    height,
    flexDirection: "row",
    gap: 10,
    backgroundColor: bg ? bg : COLORS.orange,
    borderWidth: 1,
    borderColor: COLORS.orange,
    borderRadius: 50,
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "center",
  }),
  cartText: (fontSize, labelColor) => ({
    fontWeight: "500",
    fontSize: fontSize ? fontSize : 14,
    color: labelColor ? labelColor : COLORS.white,
  }),
});
