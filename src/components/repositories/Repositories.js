import React from 'react';
import { FlatList } from 'react-native';

import Item from '../item/Item';
import Search from '../search/Search';

const Repositories = ({ navigation }) => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          repo: 'First Item',
          user: 'user 1',
          stars: 3,
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          repo: 'Second Item',
          user: 'user 2',
          stars: 20,
          //image?
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          repo: 'Third Item',
          user: 'user 3',
          stars:10,
        },
      ];

    const renderItem = ({ item }) => (
        <Item data={item} navigation={navigation}/>
    );

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={<Search/>}
        />
    );

}

export default Repositories;