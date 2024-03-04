import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Button, Icon, List} from 'react-native-paper';

export default function LoginQRCodeScreen({navigation}: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon source={'qrcode'} size={50} color="blue" />
          <Text style={{fontSize: 30, fontWeight: '500'}}>Code Type</Text>
        </View>
        <Text>
          Please select which code types the app should use to identify your
          labels
        </Text>
        <List.Section style={{backgroundColor: 'white'}}>
          <List.Item
            style={styles.listitem}
            title="QR Code"
            right={props => <List.Icon {...props} icon="check" color="blue" />}
          />

          <List.Item
            style={styles.listitem}
            title="DataMatrix"
            right={props => <List.Icon {...props} icon="check" color="blue" />}
          />

          <List.Item
            style={styles.listitem}
            title="Code 128"
            right={props => <List.Icon {...props} icon="check" color="blue" />}
          />
          <List.Item
            style={styles.listitem}
            title="EAN-13"
            right={props => <List.Icon {...props} icon="check" color="blue" />}
          />
          <List.Item
            style={styles.listitem}
            title="PDF 417"
            right={props => <List.Icon {...props} icon="check" color="blue" />}
          />
        </List.Section>

        <Button
          labelStyle={{color: 'white'}}
          onPress={() => {
            navigation.navigate('HomeApp');
          }}
          style={{
            backgroundColor: 'blue',
          }}>
          <Text style={{lineHeight: 30}}>Finish Onboarding</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    padding: 10,
    justifyContent: 'center',
  },
  listitem: {
    backgroundColor: 'white',
    paddingLeft: 10,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
});
