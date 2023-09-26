import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const CustomStatusBar = ({color}) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar style={color} /> : null;
}

export default CustomStatusBar;