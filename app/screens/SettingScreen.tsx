import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Button, Icon, IconButton, List} from 'react-native-paper';

export default function SettingScreen() {
  
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 10, paddingHorizontal: 10}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}>
          <Text style={{fontSize: 30, color: 'black'}}>Settings</Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              paddingLeft: 10,
            }}>
            <View style={styles.viewInputFirst}>
              <Text style={styles.textTitle}>API Token</Text>
              <TextInput placeholder="Email" style={styles.input} />
              <IconButton icon={'close'} size={30} />
            </View>

            <View style={styles.viewInput}>
              <Text style={styles.textTitle}>Base URL</Text>
              <TextInput placeholder="Base URL" style={styles.input} />
              <IconButton icon={'close'} size={30} />
            </View>
          </View>
          <View>
            <Button
              labelStyle={{color: 'red', lineHeight: 30}}
              style={{backgroundColor: 'white', marginBottom: 10}}>
              Delete API Token from Device
            </Button>
            <Text>
              Your API Access Token will be permanently deleted from this device
              as of the next time the app is launched
            </Text>
          </View>

          <View>
            <List.Accordion
              style={{paddingLeft: 20}}
              left={props => (
                <List.Icon {...props} icon="qrcode" color="blue" />
              )}
              title="Code Support"
              expanded={expanded}
              onPress={handlePress}>
              <List.Item
                style={styles.listitem}
                title="QR Code"
                right={props => (
                  <List.Icon {...props} icon="check" color="blue" />
                )}
              />
              <List.Item
                style={styles.listitem}
                title="DataMatrix"
                right={props => (
                  <List.Icon {...props} icon="check" color="blue" />
                )}
              />
              <List.Item
                style={styles.listitem}
                title="Code 128"
                right={props => (
                  <List.Icon {...props} icon="check" color="blue" />
                )}
              />
              <List.Item
                style={styles.listitem}
                title="EAN-13"
                right={props => (
                  <List.Icon {...props} icon="check" color="blue" />
                )}
              />
              <List.Item
                style={styles.listitem}
                title="PDF 417"
                right={props => (
                  <List.Icon {...props} icon="check" color="blue" />
                )}
              />
            </List.Accordion>
            <Text style={{marginTop: 10}}>
              Please select the code types that are supported by your Snipe-IT
              instance
            </Text>
          </View>

          <Button
            labelStyle={{color: 'blue', lineHeight: 30}}
            style={{backgroundColor: 'white'}}>
            Relaunch Onboarding
          </Button>

          <Button
            onPress={() => {
              navigation.navigate('Setting');
            }}
            labelStyle={{
              color: 'blue',
              lineHeight: 30,
            }}
            style={{
              backgroundColor: 'white',
            }}>
            <Icon source={'tray-arrow-down'} color="blue" size={23} /> Export
            Settings
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    margin: 12,
    padding: 10,
    overflow: 'hidden',
  },
  textTitle: {
    width: 100,
    fontSize: 20,
    fontWeight: '500',
  },
  viewInputFirst: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInput: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    borderStyle: 'solid',
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listitem: {
    backgroundColor: 'white',
    paddingLeft: 10,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
});
