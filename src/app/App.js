import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={<Home/>} options={{ title: 'Repositórios' }}/>
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        {/* {(props) => <HomeScreen {...props} extraData={someData} />} */}
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

export default App;