/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native'
import React from 'react';
import { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FeedScreen from './Screens/FeedScreen';
import InstructorScreen from './Screens/InstructorsScreen';
import RegisterScreen from './Screens/RegisterScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeIcon, getIcon, resetIcon } from 'react-native-change-icon';
import BootSplash from 'react-native-bootsplash';


getIcon();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          switch (route.name) {
            case 'Profile':
              iconName = 'person';
              break;
            case 'Feed':
              iconName = 'list';
              break;
            case 'Instructors':
              iconName = 'people';
              break;
            default:
              iconName = 'info';
          }
          return <Icon name={iconName} size={size} color={color} type="ionicon" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#f2f2f2', paddingBottom: 5 },
      })}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
      />
      <Tab.Screen
        name="Instructors"
        component={InstructorScreen}
        options={{ tabBarBadge: 7 }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
