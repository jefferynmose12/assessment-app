import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Account, MeunScreen, CartScreen, Home } from "../screens";
import { SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../constant/theme";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const screenOPtions = {
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: Platform.OS === "ios" ? 90 : 60,
      paddingVertical: 5,
    },
    tabBarActiveTintColor: COLORS.orange,
    tabBarInactiveTintColor: COLORS.grey,
    tabBarLabelStyle: {
      fontSize: 14,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOPtions} initialRouteName="Menu">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? COLORS.orange : COLORS.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MeunScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image source={require("../assets/images/menu.png")} />
              ) : (
                <Image source={require("../assets/images/menu-grey.png")} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name="handbag"
              size={24}
              color={focused ? COLORS.orange : COLORS.grey}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? {
                      borderWidth: 2,
                      borderColor: COLORS.orange,
                      borderRadius: 50,
                    }
                  : {}
              }
            >
              <Image source={require("../assets/images/acc.png")} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
