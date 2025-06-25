import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConnectScreen from './screens/ConnectScreen';
import BookAppointmentsScreen from './screens/BookAppointmentsScreen';
import SignInScreen from './screens/SignInScreen';
import VerifyCodeScreen from './screens/VerifyCodeScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import SpecialOfferScreen from './screens/SpecialOfferScreen';
import TopRatedSalonsScreen from './screens/TopRatedSalonsScreen';
import SalonDetailsScreen from './screens/SalonDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connect">
        <Stack.Screen name="Connect" component={ConnectScreen} />
        <Stack.Screen name="BookAppointments" component={BookAppointmentsScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="SpecialOffer" component={SpecialOfferScreen} />
        <Stack.Screen name="TopRatedSalons" component={TopRatedSalonsScreen} />
        <Stack.Screen name="SalonDetails" component={SalonDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;