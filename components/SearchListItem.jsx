import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import theme from '../style/theme.style';
export default function SearchListItem({stock}) {
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        borderBottomWidth: 0.5,
        borderColor: theme.ACCENT_COLOR_DARK
    },
    symbolText: {
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.TEXT_COLOR
    },
    nameText: {
        fontSize: theme.FONT_SIZE_SMALL,
        color: theme.TEXT_COLOR
    }
})