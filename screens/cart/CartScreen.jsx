import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../../components/customStatusBar/CustomStatusBar";
import { Octicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constant/theme";
import { cartData } from "../../components/mockData/MockData";
import CustomButton from "../../components/customButton/CustomButton";

const CartScreen = ({navigation}) => {
  const [count, setCount] = useState(1);

  const increasement = () => {
    setCount((c) => c + 1);
  };

  const decreasement = () => {
    if (count >= 1) {
      setCount((c) => c - 1);
    }
  };

  return (
    <SafeAreaView>
      <CustomStatusBar color="dark" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.goBack()}
          >
            <Octicons name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.text}>Cart</Text>
          <Text></Text>
        </View>

        <View style={styles.main}>
          <View style={styles.vv}>
            <FlatList
              data={cartData}
              keyExtractor={(i) => i.id}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <View style={styles.first}>
                    <Image source={item.img} />
                    <View style={styles.firstInner}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.price}>£{item.price}</Text>
                      <TouchableOpacity>
                        <Image
                          source={require("../../assets/images/delete.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.second}>
                    <TouchableOpacity
                      style={styles.handle}
                      onPress={increasement}
                    >
                      <Text style={styles.handleText}>+</Text>
                    </TouchableOpacity>
                    <Text>{count}</Text>
                    <TouchableOpacity
                      style={styles.handle}
                      onPress={decreasement}
                    >
                      <Text style={styles.handleText}>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              contentContainerStyle={styles.containerone}
              ItemSeparatorComponent={() => <View style={styles.divder} />}
            />
          </View>

          <View style={styles.foot}>
            <View style={styles.row}>
              <Text style={styles.total}>
                Total <Text style={styles.span}>(3 items)</Text>
              </Text>
              <Text style={styles.total}>£90</Text>
            </View>

            <CustomButton 
              label={'Checkout - £90'}
              height={48}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgcolor,
  },
  main: {
    justifyContent: "space-between",
    height: Platform.OS === "ios" ? SIZES.height - 240 : SIZES.height - 190,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingBottom: 15,
    paddingTop: 20,
    backgroundColor: COLORS.bgcolor,
  },
  btn: {
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    marginLeft: -20,
  },
  card: {
    paddingLeft: SIZES.xxLarge,
    paddingRight: SIZES.xLarge,
    paddingVertical: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  first: {
    flexDirection: "row",
    alignItems: "center",
  },
  second: {
    gap: 10,
    alignItems: "center",
  },
  firstInner: {
    gap: 10,
  },
  handle: {
    backgroundColor: COLORS.white,
    padding: 6,
    fontSize: 16,
    borderRadius: 8,
  },
  handleText: {
    fontSize: 18,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.fadeBlack,
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.orange,
  },
  vv: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: SIZES.small,
  },
  foot: {
    paddingHorizontal: SIZES.medium,
  },
  total: {
    fontWeight: "500",
    fontSize: 14,
    color: COLORS.fadeBlack,
  },
  span: {
    fontSize: 14,
    color: COLORS.grey
  }
});
