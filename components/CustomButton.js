import {
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  
  const CustomButton = (props) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.buttonLog}
          onPress={() => Alert.alert('Log in')}>
          <Text style={styles.textButtonLog}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    buttonLog: {
      marginTop: 30,
      backgroundColor: '#FFC4C4',
      width: 320,
      height: 40,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    textButtonLog: {
      fontWeight: 'bold',
      color: '#A10035',
    },
  });
  
  export default CustomButton;
  