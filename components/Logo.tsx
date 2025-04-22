import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';


interface LogoProps {
  uri: ImageSourcePropType;
}
export const Logo: React.FC<LogoProps> = ({ uri }) => {
  return <Image source={uri} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});
