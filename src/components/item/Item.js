import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import styled from 'styled-components';

const Item = ({ data }) => {
  const Row = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

  `;
  const Subtitles = styled.Text`
    color: gray;
  `;
  const Title = styled.Text`
    font-weight: bold;
  `;
  
  const stars = data.stars > 1 ? 'stars' : 'star';
  return (
    <ListItem key={data.id} bottomDivider>
        <Avatar rounded source={require('../../assets/image.jpeg')} ></Avatar>//TODO: passa url da imagem pelo data
        <ListItem.Content>
            <ListItem.Title>
                <Row>
                    <Title>{data.repo}</Title>
                    <Subtitles>{data.stars} {stars}</Subtitles>
                </Row>
            </ListItem.Title>
            <ListItem.Subtitle><Subtitles>{data.user}</Subtitles></ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>);
}

export default Item;