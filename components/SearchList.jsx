import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import theme from '../style/theme.style';
import SearchListItem from './SearchListItem';
export default function SearchList({filteredStocks}) {



    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={{color: 'white'}}>Hello</Text>
                {filteredStocks.map((stock) => {
                    <SearchListItem stock={stock}/>
                    // <Text style={{color: 'white'}}>{stock.name}</Text>
                })}
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