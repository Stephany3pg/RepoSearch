import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home/Home';
import RepositoryScreen from '../components/repositoryScreen/RepositoryScreen';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ 
          headerTitle: 'Repositórios',
          headerTitleStyle: {
            fontSize: 34,
          },
        }}/>
        <Stack.Screen name="Repository" component={RepositoryScreen} options={({ route }) => ({ headerTitle: route.params.repo })}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

export default App;