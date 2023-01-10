import React from 'react'
import { Text, View } from 'react-native'
import add from '../utilities/add'

const Header = () => {
    return (
        <View>
<Text>This is a header</Text>
    <Text>{add(3,7)}</Text>
        </View>
    )
}

export default Header