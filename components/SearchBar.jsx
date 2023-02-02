import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from '../style/theme.style';

export default function SearchBar({searchText, handleChangeSearchText}) {

    return (
        <View style={styles.searchBarContainer}>
            <Ionicons 
                name='search'

            />
            <TextInput
                value={searchText}
                onChangeText={(text) => handleChangeSearchText(text)}
                placeholder='Search'
                placeholderTextColor={'#FFF'}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: theme.ACCENT_COLOR_LIGHT
    },
    searchIcon: {
        color: theme.TEXT_COLOR,
        fontSize: theme.FONT_SIZE_MEDIUM
    },
    searchBarText: {
        color: theme.TEXT_COLOR,
        fontSize: theme.FONT_SIZE_MEDIUM
    }
});