import React from 'react';
import { WebView } from 'react-native-webview';


const RepositoryScreen = ({ html_url }) => {
  return (      
  <WebView
    source={{
      uri: html_url
    }}
    style={{ marginTop: 20 }}
  />);
}

export default RepositoryScreen;pod 