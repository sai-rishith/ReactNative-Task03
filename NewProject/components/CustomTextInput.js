import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = (props) => {
  const { placeholder, style, value, onChangeText } = props;

  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextInput;
