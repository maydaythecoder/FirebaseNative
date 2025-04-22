/// <reference types="react" />
/// <reference types="react-native" />

declare module 'react' {
  export type ReactNode = 
    | string
    | number
    | boolean
    | null
    | undefined
    | React.ReactElement
    | React.ReactFragment
    | React.ReactPortal
    | React.ReactNodeArray;

  export type FC<P = {}> = FunctionComponent<P>;
  export type FunctionComponent<P = {}> = (props: P) => ReactElement | null;
  export type ComponentType<P = any> = FC<P> | ClassType<P, any, any>;
  export type ClassType<P, S, SS> = new (props: P, context?: any) => Component<P, S, SS>;
  
  export class Component<P = {}, S = {}, SS = any> {
    constructor(props: P, context?: any);
    setState<K extends keyof S>(
      state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
      callback?: () => void
    ): void;
    forceUpdate(callback?: () => void): void;
    render(): ReactNode;
    readonly props: Readonly<P>;
    state: Readonly<S>;
    context: any;
    refs: {
      [key: string]: any;
    };
  }

  export type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
  export type PropsWithRef<P> = P & { ref?: Ref<any> };
  export type PropsWithoutRef<P> = P extends any ? ('ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P) : P;
  export type ComponentProps<T extends keyof JSX.IntrinsicElements | JSX.ElementType> = T extends JSX.IntrinsicElements[keyof JSX.IntrinsicElements] ? T : ComponentPropsWithoutRef<T>;
  
  export type Ref<T> = RefCallback<T> | RefObject<T> | null;
  export type RefCallback<T> = (instance: T | null) => void;
  export interface RefObject<T> {
    readonly current: T | null;
  }

  export type ForwardRefExoticComponent<P> = {
    (props: P): ReactElement | null;
    displayName?: string;
  };

  export interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    displayName?: string;
  }

  export interface Provider<T> {
    (props: ProviderProps<T>): ReactElement | null;
  }

  export interface Consumer<T> {
    (props: ConsumerProps<T>): ReactElement | null;
  }

  export interface ProviderProps<T> {
    value: T;
    children?: ReactNode;
  }

  export interface ConsumerProps<T> {
    children: (value: T) => ReactNode;
  }

  export interface SyntheticEvent<T = Element, E = Event> {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: T;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: E;
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget;
    timeStamp: number;
    type: string;
  }

  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }

  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}
  export interface FocusEvent<T = Element> extends SyntheticEvent<T> {}
  export interface MouseEvent<T = Element> extends SyntheticEvent<T> {}
}

declare module 'react-native' {
  import { ComponentType } from 'react';

  export type ViewStyle = any;
  export type TextStyle = any;
  export type ImageStyle = any;
  export type FlexStyle = any;
  export type ColorValue = string;
  export type DimensionValue = number | string;

  export interface ViewProps {
    style?: ViewStyle;
    children?: React.ReactNode;
  }

  export interface TextProps {
    style?: TextStyle;
    children?: React.ReactNode;
  }

  export interface ImageProps {
    style?: ImageStyle;
    source: { uri: string } | number;
  }

  export interface ScrollViewProps extends ViewProps {
    contentContainerStyle?: ViewStyle;
    horizontal?: boolean;
    onScroll?: (event: any) => void;
  }

  export interface TouchableOpacityProps extends ViewProps {
    onPress?: () => void;
    activeOpacity?: number;
  }

  export interface TouchableWithoutFeedbackProps extends ViewProps {
    onPress?: () => void;
  }

  export interface TextInputProps extends ViewProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  }

  export interface FlatListProps<ItemT> extends ScrollViewProps {
    data: ReadonlyArray<ItemT>;
    renderItem: (info: { item: ItemT; index: number }) => React.ReactElement | null;
    keyExtractor?: (item: ItemT, index: number) => string;
  }

  export interface PressableProps extends ViewProps {
    onPress?: () => void;
    disabled?: boolean;
  }

  export const View: ComponentType<ViewProps>;
  export const Text: ComponentType<TextProps>;
  export const Image: ComponentType<ImageProps>;
  export const ScrollView: ComponentType<ScrollViewProps>;
  export const TouchableOpacity: ComponentType<TouchableOpacityProps>;
  export const TouchableWithoutFeedback: ComponentType<TouchableWithoutFeedbackProps>;
  export const TextInput: ComponentType<TextInputProps>;
  export const FlatList: ComponentType<FlatListProps<any>>;
  export const Pressable: ComponentType<PressableProps>;

  export interface StyleSheet {
    create<T extends { [key: string]: ViewStyle | TextStyle | ImageStyle }>(styles: T): T;
    flatten: (...styles: Array<ViewStyle | TextStyle | ImageStyle | boolean | null | undefined>) => ViewStyle | TextStyle | ImageStyle;
  }

  export const StyleSheet: StyleSheet;
}

declare module '@expo/vector-icons';
declare module '@expo/vector-icons/MaterialIcons';
declare module '@expo/vector-icons/MaterialCommunityIcons'; 