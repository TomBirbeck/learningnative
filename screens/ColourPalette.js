import React from "react";
import { FlatList, Text, StyleSheet} from 'react-native'
import ColourBox from "../components/ColourBox";


const ColourPalette = ({ route }) => {
    const {colours, paletteName} = route.params
    return (
        <FlatList
          style={styles.container}
          data={colours}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <ColourBox hexCode={item.hexCode} colorName={item.colorName} />
          )}
          ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
        />
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      paddingTop: 50,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  

export default ColourPalette