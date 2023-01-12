import {View, FlatList, Text} from 'react-native'

const FlatListComponent = () => {
    return (
      <View>
        <FlatList
          data={[
            {key: 'Dog'},
            {key: 'Cat'},
            {key: 'Sheep'},
            {key: 'Camel'},
            {key: 'Horse'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
  
  export default FlatListComponent;