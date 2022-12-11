import React, { useEffect }  from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getRepositories } from '../../redux/actions/repo';

import Item from '../item/Item';
import Search from '../search/Search';

const Repositories = ({ navigation }) => {
  const dispatch = useDispatch();
  const fetchRepositories = () => dispatch(getRepositories());
  useEffect(() => {
    fetchRepositories();
  }, []);

  const data = useSelector(state => state.repositories);

    const renderItem = ({ item }) => (
        <Item data={item} navigation={navigation}/>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={<Search/>}
        />
    );

}

export default Repositories;