import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = (props) => {
  const { style, placeholder } = props;

  return (
    <TextInput
      style={style}
      placeholder={placeholder}
    />
  );
};

export default CustomTextInput;
