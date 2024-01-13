
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
      <CustomImage
        source={require('../assets/imageLogin.png')} 
        style={styles.imgElips}/>
      </View>

      <View>
        <Text style={styles.email}>Email</Text>
         <CustomInput input={'Enter your email'}/>
      </View>

      <View>
        <Text style={styles.password}>Password</Text>
         <CustomInput input={'Enter your password'}/>
         
        <Text style={styles.forgotPw}>Forgot password?</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonLog} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textButtonLog}>Log in</Text>
        </TouchableOpacity>
         
        <Text style={styles.or}>or</Text>

         <CustomButton text={'Log in with Google'}/>
      </View>

      <View style={styles.accountCenter}>
        <Text style={{ fontWeight: 'bold', marginTop: 35, }}>
          Don't have an account? <Text style={{ color: '#A10035' }}>Sign Up.</Text>
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
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: '#A10035',
    marginTop: 40,
  },
  email: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 40,
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
  forgotPw: {
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
    textAlign: 'right', 
    marginTop: 10,
    color: '#A10035',
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
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#7B7FAC',
    width: 320,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textButtonGoogle: {
    fontWeight: 'bold',
    color: '#7B7FAC', 
  },
  accountCenter: {
   alignItems: 'center',
   justifyContent: 'center',
  }
});