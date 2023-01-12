import {View, FlatList, Text, StyleSheet} from 'react-native'

const FlatListComponent = () => {
    return (
      <View style={styles.flatlist}>
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

  const styles = StyleSheet.create({
    flatlist: {
      flex: 1,
      width: '100%',
      backgroundColor: '#00FF00',
      alignItems: 'flex-start',
    },
  });
  
  export default FlatListComponent;