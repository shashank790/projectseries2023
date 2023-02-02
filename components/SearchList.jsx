import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import theme from '../style/theme.style';
import SearchListItem from './SearchListItem';
export default function SearchList({filteredStocks}) {



    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                {filteredStocks.map((stock) => {
                    <SearchListItem stock={stock}/>
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flexGrow: 1
    }
})