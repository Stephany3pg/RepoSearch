import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const Search = () => {
    const [search, setSearch] = useState("");
    const searchFilterFunction = text => {
        setSearch(text);
    };

    return (
    <SearchBar
        placeholder="Type Here..."
        onChangeText={searchFilterFunction}
        autoCorrect={false}
        value={search}
        inputStyle={{fontFamily: 'arial'}}
    />);
}

export default Search;