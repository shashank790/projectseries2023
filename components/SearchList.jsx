import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import theme from '../style/theme.style';
import SearchListItem from './SearchListItem';
export default function SearchList({filteredStocks}) {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {filteredStocks.map((stock) => 
                    <TouchableOpacity key={stock.symbol}>
                        <SearchListItem stock={stock}/>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    contentContainer: {
        flexGrow: 1
    }
})