import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const Search = () => {
    const [search, setSearch] = useState("");
    const searchFilterFunction = text => {
        setSearch(text);
    };

    return (
    <SearchBar
        placeholder="Busca por repositórios"
        onChangeText={searchFilterFunction}
        autoCorrect={false}
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