import React from 'react';
import { ListItem } from 'react-native-elements';
import styled from 'styled-components';

const Item = ({ data }) => {
  const StyledItem = styled.View``;

  return (
    <ListItem
        leftAvatar={{ source: { uri: data.src } }}
        title={data.repo}
        subtitle={data.user}
  />);
}

export default Item;