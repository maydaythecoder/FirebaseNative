declare module 'react' {
  export interface ReactNode {}
  export interface FC<P = {}> {
    (props: P): ReactNode;
  }
}

declare module 'react-native' {
  export interface ViewStyle {}
  export interface TextStyle {}
  export const StyleSheet: {
    create: <T extends { [key: string]: ViewStyle | TextStyle }>(styles: T) => T;
  };
  export const View: React.FC<any>;
  export const Text: React.FC<any>;
  export const TouchableOpacity: React.FC<any>;
}

declare module '@expo/vector-icons';
declare module '@expo/vector-icons/MaterialIcons';
declare module '@expo/vector-icons/MaterialCommunityIcons'; 