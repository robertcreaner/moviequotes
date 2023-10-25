import React from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import {Text} from '../shared/Text';

export type TextFieldProps = {
  style?: StyleProp<ViewStyle>;
  label?: string;
  disabled?: boolean;
  onChange: () => void;
  onSubmit: () => void;
};

/**
 * A text input field component for entering movie quotes
 */
export const MovieQuoteInput = (props: TextFieldProps) => {
  const {label, style, disabled, onChange, onSubmit} = props;

  return (
    <View style={[styles.containerStyle, style]}>
      {label && <Text value={label} kind="label" style={styles.labelStyle} />}
      <View style={[styles.textInputStyle]}>
        <TextInput
          {...props}
          editable={!disabled}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  textInputStyle: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingVertical: 16,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  labelStyle: {
    marginBottom: 4,
  },
});
