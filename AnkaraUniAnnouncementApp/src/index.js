import { StyleSheet } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import AnnouncementDetail from './pages/AnnouncementDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import SplashScreen from './pages/SplashScreen';


const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen name='Register' component={Register} />
    </AuthStack.Navigator>
  )
} 

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

const MainAppRoutes = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
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
  )
} 

const AllRoutes = createNativeStackNavigator()

export default function Navigation() {

    return (
        <NavigationContainer>
            <AllRoutes.Navigator initialRouteName='Splash'>
                <AllRoutes.Screen name='Splash' component={SplashScreen} options={{headerShown: false}} />
                <AllRoutes.Screen name='Auth' component={AuthStackScreen} options={{headerShown: false}} />
                <AllRoutes.Screen name='MainAppRoutes' component={MainAppRoutes} options={{headerShown: false}} />
            </AllRoutes.Navigator>
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
