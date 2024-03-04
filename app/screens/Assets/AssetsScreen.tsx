import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ActivityIndicator, Appbar, Searchbar} from 'react-native-paper';

export default function AssetsScreen({navigation}: any) {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Appbar.Action
          icon="star"
          color="blue"
          onPress={() => {
            navigation.navigate('Setting');
          }}
        />
        <Appbar.Action icon="qrcode" color="blue" onPress={() => {}} />
      </Appbar.Header>
      <View>
        <Text style={{fontSize: 30, color: 'black'}}>Assets</Text>
        <Searchbar
          style={{backgroundColor: '#e4e3e9', marginTop: 30}}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <ActivityIndicator animating={true} color={'red'} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
