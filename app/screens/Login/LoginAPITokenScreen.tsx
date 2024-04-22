import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Icon, TextInput} from 'react-native-paper';
// import Snackbar from 'react-native-snackbar';

export default function LoginAPITokenScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon source={'link'} size={50} />
        <Text style={{fontSize: 30, fontWeight: '500', color: 'black'}}>
          Enter your API Token
        </Text>
      </View>

      <View style={{gap: 5}}>
        <Text style={{textTransform: 'uppercase', color: 'black'}}>
          The API Token from snipe-it
        </Text>
        <TextInput
          placeholder="Snipe-IT Base URL"
          style={{paddingHorizontal: 10, backgroundColor: 'white'}}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          labelStyle={{color: 'white'}}
          onPress={() => {
            // Snackbar.show({
            //   text: 'Hello world',
            //   duration: 2,
            // });
            navigation.navigate('LoginQRCode');
          }}
          style={{
            width: 100,
            backgroundColor: 'blue',
          }}>
          Send
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    color: 'black',
    padding: 10,
    justifyContent: 'center',
  },
});
