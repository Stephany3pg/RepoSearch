import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { Subtitles, Title, Row } from './style';

const Item = ({ navigation, data }) => {

  const stars = data.stars == 1 ? 'star' : 'stars';

  return (
    <ListItem 
        key={data.id}
        bottomDivider
        onPress={()=> navigation.navigate('Repository', data )}
    >
        <Avatar rounded source={{uri: data.owner.avatar_url,}} ></Avatar>
        <ListItem.Content>
            <ListItem.Title>
                <Row>
                    <Title>{data.name}</Title>
                    <Subtitles>{`${data.stargazers_count} ${stars}`}</Subtitles>
                </Row>
            </ListItem.Title>
            <ListItem.Subtitle><Subtitles>{data.owner.login}</Subtitles></ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>);
}

export default Item;