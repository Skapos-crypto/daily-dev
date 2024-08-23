import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { I18nManager} from 'react-native';
import i18n from './Resources';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [age, setAge] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    
    const locale = RNLocalize.getLocales()[0].languageCode;
    //console.log(RNLocalize.getLocales()[0])
    i18n.changeLanguage(locale);
  }, []);

  const changeLang = () => {
    i18n.changeLanguage('fr');
    //console.log(RNLocalize.getLocales()[0])
  }
  const changeLangToEng = () => {
    i18n.changeLanguage('en');
    //console.log(RNLocalize.getLocales()[0])
  }

  useEffect(() => {
    validateForm();
  }, [fullName, email, mobile, password, nationalId, age]);

  const validateForm = () => {
    const name_re = /^[a-zA-Z\s]+$/;
    const email_re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobile_re = /^01[0125]\d{8}$/;
    const password_re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const nationalId_re = /^[0-9]{14}$/;
    const age_re = /^[0-9]{1,3}$/;

    const isValid =  
    name_re.test(fullName) &&
    email_re.test(email) &&
    mobile_re.test(mobile) &&
    password_re.test(password) &&
    nationalId_re.test(nationalId) &&
    age_re.test(age);

    setIsFormValid(isValid);
  };

  const handleSignUp = async () => {
    if (isFormValid) {
      try {
        const userData = {
          fullName,
          email,
          mobile,
          password,
          nationalId,
          age,
        };
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        console.log('??')
        Alert.alert('Nice', 'Registration good');
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Ops', 'Failed check again?');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header_container}>
        <Image
          style={styles.image_icon} source={require('./images/logo.png')} />
        <Text style={styles.title}>{t('createAccount')}</Text>
      </View>

      <Text style={styles.label}>{t('fullName')}</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder={t('enterFullName')}
      />

      <Text style={styles.label}>{t('email')}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder={t('enterEmail')}
      />

      <Text style={styles.label}>{t('mobile')}</Text>
      <TextInput
        style={styles.input}
        value={mobile}
        onChangeText={setMobile}
        placeholder={t('enterMobile')}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>{t('password')}</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder={t('enterPassword')}
        secureTextEntry
      />

      <Text style={styles.label}>{t('nationalId')}</Text>
      <TextInput
        style={styles.input}
        value={nationalId}
        onChangeText={setNationalId}
        placeholder={t('enterNationalId')}
        keyboardType="numeric"
        maxLength={14}
      />

      <Text style={styles.label}>{t('age')}</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder={t('enterAge')}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>{t('signUp')}</Text>
      </TouchableOpacity>

      <View style={styles.languageButtons}>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={changeLang}
        >
          <Text style={styles.languageButtonText}>{t('changeToFrench')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={changeLangToEng}
        >
          <Text style={styles.languageButtonText}>{t('changeToEnglish')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff7fa',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#7d4e7d',
    marginBottom: 20,
    marginLeft:10
  },
  header_container:{
    flexDirection:'row',
  },
  image_icon:{
    height:55,
    width:55,
  },
  label: {
    fontSize: 16,
    color: '#7d4e7d',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 2.5,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f5dbf0',
    fontStyle: 'italic',
    fontWeight: '500',
    color:'black'
  },
  button: {
    backgroundColor: '#6c586a',
    borderRadius: 12,
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  languageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  languageButton: {
    backgroundColor: '#6c586a',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  languageButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;