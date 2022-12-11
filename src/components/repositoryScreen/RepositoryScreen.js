import React from 'react';
import { WebView } from 'react-native-webview';


const RepositoryScreen = ({ route }) => {
  return (      
  <WebView
    source={{
      uri: route.params.html_url
    }}
  />);
}

export default RepositoryScreen; 