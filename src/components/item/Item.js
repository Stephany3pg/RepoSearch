import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { Subtitles, Title, Row } from './style';

const Item = ({ navigation, data }) => {

  const stars = data.stars > 1 ? 'stars' : 'star';

  return (
    <ListItem 
        key={data.id}
        bottomDivider
        onPress={()=> navigation.navigate('Repository', data )}
    >
        <Avatar rounded source={require('../../assets/image.jpeg')} ></Avatar>
        <ListItem.Content>
            <ListItem.Title>
                <Row>
                    <Title>{data.repo}</Title>
                    <Subtitles>{`${data.stars} ${stars}`}</Subtitles>
                </Row>
            </ListItem.Title>
            <ListItem.Subtitle><Subtitles>{data.user}</Subtitles></ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>);
}

export default Item;