import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../../components/customStatusBar/CustomStatusBar";
import { Octicons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS, SIZES } from "../../constant/theme";
import carsouelImg from "../../assets/images/carsouel1.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../../components/customButton/CustomButton";

const FoodDetail = ({ navigation }) => {
  const slides = [carsouelImg, carsouelImg, carsouelImg];

  const items = [
    "Ingredients",
    "Nutritional Information",
    "How to Prepare",
    "Dietary Information",
    "Storage Information",
    "Extra",
  ];

  return (
    <SafeAreaView>
      <CustomStatusBar color="dark" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}
        >
          <Octicons name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerCarsouel}>
            <SliderBox
              images={slides}
              dotColor={COLORS.orange}
              inactiveDotColor={COLORS.border}
              ImageComponentStyle={{
                borderRadius: 15,
                width: "90%",
                marginTop: 20,
                height: 300,
              }}
              autoplay
              circleLoop
            />
          </View>

          <View style={styles.section}>
            <View style={styles.headText}>
              <Text style={styles.title}>African Donut Mix (Puff Puff)</Text>
              <Text style={styles.amount}>£3.99</Text>
            </View>

            <Text style={styles.desc}>
              Rare Eat Puff Puff Mix can be made into a deep-fried dough. They
              are made from yeast dough, shaped into balls and deep-fried until
              golden brown. It has a doughnut-like texture but slightly o....
              <Text style={styles.red}>Read more</Text>
            </Text>

            <View style={styles.dropdownbg}>
              {items.map((item, index) => (
                <View key={index} style={styles.dropdown}>
                  <Text>{item}</Text>
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={24}
                    color="black"
                  />
                </View>
              ))}
            </View>

            <View style={styles.bgplusnm}>
              <TouchableOpacity style={styles.plusbg}>
                <Text style={styles.plus}>-</Text>
              </TouchableOpacity>

              <Text style={styles.num}>1</Text>

              <TouchableOpacity style={styles.plusbg}>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footbtnbg}>
              <CustomButton label={"Add to cart"} height={48} />

              <CustomButton
                label={"Subscribe to a Plan"}
                height={48}
                bg={COLORS.white}
                labelColor={COLORS.orange}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.xLarge,
    paddingHorizontal: SIZES.medium,
    paddingBottom: SIZES.xLarge + 80,
  },
  btn: {
    borderWidth: 1,
    borderColor: COLORS.border,
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCarsouel: {
    alignSelf: "center",
    height: 350,
  },
  headText: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.fadeBlack,
  },
  amount: {
    color: COLORS.orange,
    fontSize: 16,
    fontWeight: "500",
  },
  section: {
    paddingTop: SIZES.medium,
    paddingBottom: SIZES.medium,
  },
  desc: {
    paddingTop: SIZES.xSmall,
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.grey2,
  },
  red: {
    color: COLORS.orange,
    fontWeight: "500",
  },
  dropdownbg: {
    marginTop: SIZES.medium + 5,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SIZES.small,
    borderTopWidth: 1,
    borderColor: COLORS.border,
  },
  bgplusnm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: SIZES.large,
  },
  plusbg: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  plus: {
    fontSize: 18,
  },
  num: {
    fontWeight: "600",
  },
  footbtnbg: {
    gap: 20,
  }
});
