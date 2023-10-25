import React from 'react';
import {StyleProp, StyleSheet, Text as RNText, TextStyle} from 'react-native';

export type TextKind = 'body1' | 'body2' | 'h1' | 'label';

export type TextProps = {
  value?: string | number;
  kind?: TextKind;
  style?: StyleProp<TextStyle>;
  isBold?: boolean;
  color?: string;
  onPress?: () => void;
};

const getStyleForKind = (kind: string, color: string, isBold?: boolean) => {
  let style = {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: color,
  };

  switch (kind) {
    case 'body2': {
      style = {
        ...style,
        fontSize: 14,
      };
    }
    case 'h1': {
      style = {
        ...style,
        fontSize: 20,
      };
    }
    case 'label': {
      style = {
        ...style,
        fontSize: 13,
      };
    }
  }

  return style;
};

export const Text = (props: TextProps) => {
  const {
    value = '',
    kind = 'body1',
    style,
    isBold = false,
    color = '#222',
    onPress,
  } = props;

  const styleForKind = getStyleForKind(kind, color, isBold);

  return (
    <RNText
      kind={kind}
      isBold={isBold}
      color={color}
      style={[styleForKind, style]}
      onPress={onPress}
      {...props}>
      {value}
    </RNText>
  );
};
