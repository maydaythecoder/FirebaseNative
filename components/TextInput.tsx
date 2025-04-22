import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';

import { View } from './View';
import { Icon } from './Icon';
import { Button } from './Button';
import { Colors } from '../config';

interface CustomTextInputProps {
  width?: string | number;
  leftIconName?: string;
  rightIcon?: string;
  handlePasswordVisibility?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  style?: any;
  placeholderTextColor?: string;
}

export const TextInput: React.FC<CustomTextInputProps> = ({
  width = '100%',
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
        }
      ]}
    >
      {leftIconName ? (
        <Icon
          name={leftIconName}
          size={22}
          color={Colors.mediumGray}
          style={styles.leftIcon}
        />
      ) : null}
      <RNTextInput
        style={styles.input}
        placeholderTextColor={Colors.mediumGray}
        {...otherProps}
      />
      {rightIcon ? (
        <Button onPress={handlePasswordVisibility}>
          <Icon
            name={rightIcon}
            size={22}
            color={Colors.mediumGray}
            style={styles.rightIcon}
          />
        </Button>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 12,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: Colors.mediumGray
  } as ViewStyle,
  input: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    color: Colors.black
  },
  leftIcon: {
    marginRight: 10
  },
  rightIcon: {
    marginRight: 10
  }
});
