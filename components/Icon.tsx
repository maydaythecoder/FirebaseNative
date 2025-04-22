import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors } from '../config';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export const Icon = ({ name, size = 24, color = Colors.black, style }: IconProps) => {
  return (
    <View style={[styles.container, style]}>
      <MaterialIcons name={name as any} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle
});
