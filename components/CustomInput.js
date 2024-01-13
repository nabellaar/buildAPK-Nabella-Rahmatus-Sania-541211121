import React, { useState } from 'react';

import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

const CustomInput = (props) => {
  return (
      <View>
         <TextInput
        style={styles.inputEmail}
        placeholder={props.input}
        placeholderTextColor="gray"
        keyboardType="numeric"
      />
      </View>
  );
}

const styles = StyleSheet.create({
  inputEmail: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
  },

});

export default CustomInput;