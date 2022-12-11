import React from 'react';
import { SafeAreaView } from 'react-native';

import Repositories from '../repositories/Repositories';

const Home = ({ navigation }) => {
  return (        
    <SafeAreaView>
        <Repositories navigation={navigation}/>
    </SafeAreaView>);
}

export default Home;