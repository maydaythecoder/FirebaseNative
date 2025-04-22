import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

import { Colors } from '../config';

interface ButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  title?: string;
  style?: ViewStyle;
}

export const Button = ({ children, onPress, title, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {title ? <Text style={styles.text}>{title}</Text> : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600'
  } as TextStyle
});
