import React from 'react';
import { StyleSheet, ViewStyle, View } from 'react-native';

import { Colors } from '../config';

interface LoadingIndicatorProps {
  isSafe?: boolean;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isSafe = false }) => {
  return (
    <View style={[styles.container, isSafe && styles.safeArea]}>
      <View style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  safeArea: {
    paddingTop: 50, // Approximate safe area top padding
  },
  spinner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: Colors.orange,
    borderTopColor: 'transparent',
  },
});
