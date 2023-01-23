import React from "react";
import {Text, TouchableOpacity, StyleSheet, FlatList, View } from "react-native";

const PalettePreview = ({handlePress, colourPalette}) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colourPalette.paletteName}</Text>
            <FlatList
            style={styles.list}
            horizontal={true}
            data={colourPalette.colours.slice(0,5)}
            keyExtractor={item => item.colorName}
            renderItem={({item}) => <View style={[styles.box, {backgroundColor: item.hexCode}]}></View>}
            />
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    box: {
        height: 30,
        width: 30,
        marginRight: 10,
        elevation: 4,
    },
    list: {
        marginBottom: 20,
    }
})

export default PalettePreview