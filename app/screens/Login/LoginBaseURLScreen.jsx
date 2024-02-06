import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Icon, TextInput} from 'react-native-paper';

export default function LoginBaseURLScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon source={'link'} size={50} />
        <Text style={{fontSize: 30, fontWeight: '500'}}>
          Enter your Base URL
        </Text>
      </View>

      <View style={{gap: 5}}>
        <Text style={{textTransform: 'uppercase'}}>
          The Base URL Of your snipe-it instance
        </Text>
        <TextInput
          placeholder="Snipe-IT Base URL"
          style={{paddingHorizontal: 10, backgroundColor: 'white'}}
        />
        <Text>Format: https://your-domain.com/api/v1/</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          labelStyle={{color: 'white'}}
          onPress={() => {
            navigation.navigate('LoginAPIToken');
          }}
          style={{
            height: 50,
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
    padding: 10,
    justifyContent: 'center',
  },
});
