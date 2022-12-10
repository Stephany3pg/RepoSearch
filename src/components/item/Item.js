import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components';

const Item = (props) => {
  return (
  <View>
    <Image></Image>
    <Text>{props.data.user}</Text>
  </View>);
}

export default Item;