import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

const ParentComponent = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput
        style={styles.input01}
        placeholder="Enter your Username"
      />
      <View style={styles.container}>
      <CustomTextInput
        style={styles.input}
        placeholder="Enter your Password"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop:350
  },
  input01: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop:350
  },
});

export default ParentComponent;
