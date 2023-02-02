import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
export default function SearchScreen() {
    const [stockList, setStockList] = useState([]);
    return (
        <SearchBar/>
    )
}