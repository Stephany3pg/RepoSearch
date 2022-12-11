import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { searchRepositories } from '../../redux/actions/repo';

const Search = () => {
    const [search, setSearch] = useState("");
    const searchFilterFunction = text => {
        setSearch(text);
    };

    const dispatch = useDispatch();
    const fetchRepositories = () => dispatch(searchRepositories(search));

    return (
    <SearchBar
        placeholder="Busca por repositórios"
        onChangeText={searchFilterFunction}
        autoCorrect={false}
        onPressOut={fetchRepositories}
        onSubmitEditing={fetchRepositories}
        value={search}
        lightTheme
        round
        containerStyle={{
            backgroundColor: 'white',                 
            borderWidth: 0,
            shadowColor: 'white',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
        }}
        inputContainerStyle={{backgroundColor: 'rgba(118, 118, 128, 0.12)'}}
    />);
}

export default Search;