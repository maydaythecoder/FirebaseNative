import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ViewProps {
  isSafe?: boolean;
  style?: any;
  children?: React.ReactNode;
}

export const View: React.FC<ViewProps> = ({ isSafe, style, children }) => {
  const insets = useSafeAreaInsets();

  if (isSafe) {
    return (
      <RNView style={{ paddingTop: insets.top, ...style }}>{children}</RNView>
    );
  }

  return <RNView style={StyleSheet.flatten(style)}>{children}</RNView>;
};
