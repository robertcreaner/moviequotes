import React, {ReactNode, useState} from 'react';
import {TouchableOpacity, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Text} from './Text';

export type ButtonProps = {
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress: () => void;
};

export const Button = (props: ButtonProps) => {
  const {text, style, textStyle, children, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.buttonStyle, style]}
      onPress={onPress}>
      {text ? (
        <Text style={[styles.textStyle, textStyle]} value={text} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#3466c4',
    borderRadius: 4,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
  },
});
