import React, {useCallback, useState, useEffect} from "react";
import {StyleSheet, FlatList, RefreshControl} from 'react-native'
import PalettePreview from "../components/PalettePreview";

const Home = ({navigation}) => {
    const [colorPalettes, setColorPalettes] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)

    const fetchColorPalettes = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes')

        if (result.ok) {
            const palettes = await result.json()
            setColorPalettes(palettes)
        }
    },[])

    useEffect(()=>{
        fetchColorPalettes()
    },[])

    const handleRefresh = useCallback(async ()=>{
        setIsRefreshing(true);
        await fetchColorPalettes()
        setIsRefreshing(false)
    },[])

    return (
        <FlatList
        style={styles.list}
         data = {colorPalettes}
         keyExtractor={item => item.paletteName}
         renderItem = {({item})=>(
            <PalettePreview handlePress={()=>{navigation.navigate('ColorPalette',item)}}
            colorPalette={item}/>
         )}
         refreshing={isRefreshing}
         onRefresh={()=>handleRefresh()}
         />
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white',
    
    }
})

export default Home