import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import CustomImage from './CustomImage';

export default function App() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Register'); 
  };
  
  return (
    <ScrollView style={styles.container}>
      <View>
      <Text style={styles.title}>GoodReads</Text>
        <CustomImage style={styles.imgElips}
          source={require('../assets/imageLogin.png')}
        />
       <Text style={styles.signUp} onPress={() => navigation.navigate('Portofolio')}>Sign Up</Text>
      </View>

      <View>
        <Text style={styles.fullName}>Full Name</Text>
         <CustomInput input={'Enter your full name'}/>
      </View>
      <View>
        <Text style={styles.email}>Email</Text>
         <CustomInput input={'Enter your email'}/>
      </View>

      <View>
        <Text style={styles.password}>Password</Text>
         <TextInput
        style={styles.inputPassword}
        placeholder="Enter your password"
        placeholderTextColor="gray"
        keyboardType="numeric"
      />
        <Text style={styles.password}>Confirm Password</Text>
         <TextInput
        style={styles.inputPassword}
        placeholder="Enter your password"
        placeholderTextColor="gray"
        keyboardType="numeric"
      />
      </View>

      <View>
        <TouchableOpacity style={styles.buttonLog} onPress={() => navigation.navigate('Portofolio')}>
          <Text style={styles.textButtonLog}>Sign up</Text>
        </TouchableOpacity>
         
        <Text style={styles.or}>or</Text>

         <TouchableOpacity style={styles.buttonGoogle} onPress={() => Alert.alert('Sign up with Google')}>
          <Text style={styles.textButtonGoogle}>Sign Up with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.accountCenter}>
        <Text style={{ fontWeight: 'bold', marginTop: 35, }}>
          Already have an account? <Text style={{ color: '#A10035' }}>Log in.</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: '#FFF6F6',
  },
  imgElips: {
    marginTop: 30,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#A10035',
    marginTop: 40,
  },
  signUp: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#A10035',
    marginTop: 30,
  },
  email: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
    marginLeft: 20,
  },
  inputEmail: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 40,
    marginLeft: 20,
  },
  inputName: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  password: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
    marginLeft: 20,
  },
  inputPassword: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
  },
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
  or: {
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  buttonGoogle: {
    marginTop: 15,
    backgroundColor: '#FFF6F6',
    borderWidth: 2,
    borderColor: '#FFC4C4',
    width: 320,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textButtonGoogle: {
    fontWeight: 'bold',
    color: '#A10035', 
  },
  accountCenter: {
   alignItems: 'center',
   justifyContent: 'center',
  }
});