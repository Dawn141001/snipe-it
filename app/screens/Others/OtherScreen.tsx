import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function OtherScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../../images/assets.png')}
            style={{height: 100, width: '100%', objectFit: 'cover'}}
          />
        </View>
        <View
          style={{
            marginTop: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 20,
          }}>
          <TouchableWithoutFeedback
            key={`categories`}
            style={{borderWidth: 1, borderRadius: 10, borderColor: 'black'}}
            onPress={() => navigation.navigate('CategoriesScreen')}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#853693',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Categories
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            key={`models`}
            style={{borderWidth: 1, borderRadius: 10, borderColor: 'black'}}
            onPress={() => navigation.navigate('ModelScreen')}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#853693',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Models
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            key={`supply`}
            style={{borderWidth: 1, borderRadius: 10, borderColor: 'black'}}
            onPress={() => navigation.navigate('SupplyScreen')}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#853693',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Supply
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            key={`status`}
            style={{borderWidth: 1, borderRadius: 10, borderColor: 'black'}}
            onPress={() => navigation.navigate('StatusScreen')}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#853693',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Status
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    width: '100%',
    color: 'black',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
