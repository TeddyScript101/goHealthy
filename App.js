import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Activity, TrendingUp, MessageCircle, User } from 'lucide-react-native';

import { HealthProvider } from './context/HealthContext';

import DashboardScreen from './screens/DashboardScreen';
import LogMenuScreen from './screens/LogMenuScreen';
import ExerciseLogScreen from './screens/ExerciseLogScreen';
import DietLogScreen from './screens/DietLogScreen';
import WaterLogScreen from './screens/WaterLogScreen';
import StepsMapScreen from './screens/StepsMapScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import ChatbotScreen from './screens/ChatbotScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LogStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2E8B57' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name="LogMenu" component={LogMenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExerciseLog" component={ExerciseLogScreen} options={{ title: 'Log Exercise' }} />
      <Stack.Screen name="DietLog" component={DietLogScreen} options={{ title: 'Log Diet' }} />
      <Stack.Screen name="WaterLog" component={WaterLogScreen} options={{ title: 'Log Water' }} />
      <Stack.Screen name="StepsMap" component={StepsMapScreen} options={{ title: 'Steps Map' }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <HealthProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Dashboard') return <Home color={color} size={size} />;
              if (route.name === 'Log') return <Activity color={color} size={size} />;
              if (route.name === 'Analytics') return <TrendingUp color={color} size={size} />;
              if (route.name === 'AI Advisor') return <MessageCircle color={color} size={size} />;
              if (route.name === 'Profile') return <User color={color} size={size} />;
            },
            tabBarActiveTintColor: '#2E8B57',
            tabBarInactiveTintColor: 'gray',
            headerStyle: { backgroundColor: '#2E8B57' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Log" component={LogStack} options={{ headerShown: false }} />
          <Tab.Screen name="Analytics" component={AnalyticsScreen} />
          <Tab.Screen name="AI Advisor" component={ChatbotScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </HealthProvider>
  );
}
