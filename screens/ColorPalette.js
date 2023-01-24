import React from "react";
import { FlatList, Text, StyleSheet} from 'react-native'
import ColorBox from "../components/ColorBox";


const ColorPalette = ({ route }) => {
    const {colors, paletteName} = route.params
    return (
        <FlatList
          style={styles.container}
          data={colors}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
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
  

export default ColorPalette