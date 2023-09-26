import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constant/theme";
import CustomStatusBar from "../../components/customStatusBar/CustomStatusBar";
import { Feather } from "@expo/vector-icons";
import { data } from "../../components/mockData/MockData";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import CustomButton from "../../components/customButton/CustomButton";

const MeunScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar color="dark" />
      <View>
        <View style={styles.header}>
          <Text style={styles.menuText}>Menu</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.search}>
            <Feather name="search" size={24} color={COLORS.grey} />
            <TextInput style={styles.input} placeholder="Search" />
          </View>

          <View style={styles.vv}>
            <FlatList
              showshorizontalscrollindicator={false}
              showsverticalscrollindicator={false}
              data={data}
              numColumns={2}
              keyExtractor={(i) => i.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.productCon}
                  onPress={() => navigation.navigate("fooddetail")}
                >
                  <View style={styles.heartCon}>
                    <Ionicons name="md-heart-outline" size={24} color="black" />
                  </View>

                  <View style={styles.imageCon}>
                    <Image source={item.img} />
                  </View>

                  <View style={styles.textCon}>
                    <View style={styles.flex}>
                      <Text style={styles.name}>
                        {item.name.length > 11
                          ? item.name.slice(0, 11) + "..."
                          : item.name}
                      </Text>
                      <Text style={styles.price}>£{item.price}</Text>
                    </View>
                  </View>

                  <View style={styles.cartbg}>
                    <CustomButton
                      icon={
                        <SimpleLineIcons
                          name="handbag"
                          size={24}
                          color={COLORS.white}
                        />
                      }
                      label={"Add to cart"}
                    />
                  </View>
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.container}
              ItemSeparatorComponent={() => <View style={styles.divder} />}
              columnWrapperStyle={{ gap: 15 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MeunScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgcolor,
  },
  header: {
    backgroundColor: COLORS.bgcolor,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  menuText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
  },
  section: {
    minHeight: SIZES.height,
    backgroundColor: COLORS.bgcolor,
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.medium,
    paddingBottom: Platform.OS === "ios" ? 0 : SIZES.xxLarge + 150,
  },
  search: {
    height: SIZES.xxLarge,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: SIZES.xxLarge,
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  input: {
    marginLeft: SIZES.small,
    fontSize: 14,
  },
  container: {
    width: "auto",
  },
  divder: {
    height: 15,
  },
  vv: {
    paddingTop: SIZES.medium + 5,
    flex: 1,
    paddingBottom: Platform.OS === "ios" ? SIZES.xxLarge + 150 : 0,
  },
  productCon: {
    width: "48%",
    borderRadius: 8,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  heartCon: {
    alignItems: "flex-end",
  },
  imageCon: {
    paddingVertical: 10,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.orange,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.fadeBlack,
  },
  cartbg: {
    marginVertical: 10,
  }
});
