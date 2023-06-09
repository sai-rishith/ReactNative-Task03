import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

const ParentComponent = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={handleUsernameChange}
      />
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
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop:300
  },
});

export default ParentComponent;
