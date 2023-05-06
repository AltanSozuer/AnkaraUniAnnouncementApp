import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Search from './src/pages/Search';
import AnnouncementDetail from './src/pages/AnnouncementDetail';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

const HomepageStack = createNativeStackNavigator();

function HomepageStackScreen() {
  return (
    <HomepageStack.Navigator initialRouteName='Home' screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: "green"
      },
      headerTitleAlign: "center"
    }}>
      <HomepageStack.Screen name='Home' component={Home} />
      <HomepageStack.Screen name='AnnouncementDetail' component={AnnouncementDetail} />
    </HomepageStack.Navigator>
  )
} 

const SearchPageStack = createNativeStackNavigator();

function SearchPageStackScreen() {
  return (
    <SearchPageStack.Navigator initialRouteName='Search' screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: "green"
      },
      headerTitleAlign: "center"
    }}>
      <SearchPageStack.Screen name='Search' component={Search} />
      <SearchPageStack.Screen name='AnnouncementDetail' component={AnnouncementDetail} />
    </SearchPageStack.Navigator>
  )
} 

const ProfileStack = createNativeStackNavigator();

function ProfilePageStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName='Profile' screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: "green"
      },
      headerTitleAlign: "center"
    }}>
      <ProfileStack.Screen name='Profile' component={Profile} />
    </ProfileStack.Navigator>
  )
} 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Profile'
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            shadowRadius: 20,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30
          },
          tabBarHideOnKeyboard: true,
          headerShown: false
        }}>

        <Tab.Screen name="Announcement"
          component={HomepageStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Entypo name='home' size={size} color={color} />
          }} />

          <Tab.Screen name="Search"
            component={SearchPageStackScreen}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => <AntDesign name='search1' size={size} color={color} />
            }} />

          <Tab.Screen name="Profile"
            component={ProfilePageStackScreen}
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
