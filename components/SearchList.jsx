import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
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
    },
    contentContainer: {
        flexGrow: 1
    }
})