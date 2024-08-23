import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData.email === email && userData.password === password) {
          // Navigate to the Main tab navigator
          navigation.navigate('Main');
        } else {
          Alert.alert('Error', 'Invalid email or password');
        }
      } else {
        Alert.alert('Error', 'No user data found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.profile_logo}
        source={require('./images/logo.png')}
      />
      <Text style={styles.sectionTitle}>LOGIN</Text>
      <Text style={styles.email_word}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Your Email Address'
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.pass_word}>Password</Text>
      <TextInput
        style={styles.pass}
        placeholder='Enter Your Password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => Alert.alert('ops, gonna cry?')}>
        <Text style={{ fontWeight: 'bold', color: '#7d4e7d' }}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ fontWeight: 'bold', marginTop: 20, color: "#7d4e7d" }}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#7d4e7d',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2.5,
    borderRadius: 10,
    padding: 10,
    width: 400,
    backgroundColor: '#f5dbf0',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  pass: {
    height: 50,
    margin: 12,
    borderWidth: 2.5,
    borderRadius: 10,
    padding: 10,
    width: 400,
    backgroundColor: '#f5dbf0',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#6c586a',
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginTop: '15%',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  email_word: {
    alignSelf: 'flex-start',
    color: '#7d4e7d',
    fontWeight: 'bold',
    marginTop: '10%',
    marginLeft: '5%',
    fontSize: 20,
  },
  profile_logo: {
    height: 120,
    width: 120,
    marginBottom: '4%',
  },
  pass_word: {
    alignSelf: 'flex-start',
    color: '#7d4e7d',
    fontWeight: 'bold',
    marginLeft: '5%',
    fontSize: 20,
  },
});

export default LoginScreen;
