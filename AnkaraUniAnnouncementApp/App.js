import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Search from './src/pages/Search';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            shadowRadius: 20,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30
          },
          headerShown: true,
          headerStyle: {
            backgroundColor: "green"
          }
        }}>

        <Tab.Screen name="Announcement"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Entypo name='home' size={size} color={color} />
          }} />

          <Tab.Screen name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => <AntDesign name='search1' size={size} color={color} />
            }} />

          <Tab.Screen name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => <Feather name='user' size={size} color={color} />
            }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    backgroundColor: "red"
  }
});
