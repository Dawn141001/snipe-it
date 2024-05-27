import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CategoriesAPI} from '../../apis/Category.api';
import {ICategory} from '../../interface/Category.interface';
import {IconButton} from 'react-native-paper';
import {StatusAPI} from '../../apis/Status.api';
import {IStatus} from '../../interface/Status.interface';

export default function StatusScreen() {
  const navigation = useNavigation();
  const [listStatus, setListStatus] = useState<IStatus[]>([]);
  useEffect(() => {
    searchCategory();
  }, []);
  const searchCategory = () => {
    StatusAPI.fetchAll()
      .then(res => setListStatus(res.data.rows))
      .catch(er => console.log(er));
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <IconButton
          icon="plus"
          style={{borderRadius: 50, borderWidth: 1, backgroundColor: 'blue'}}
          iconColor={'white'}
          size={20}
          onPress={() => navigation.navigate('CreateStatus')}
        />
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'column',
          }}>
          {listStatus &&
            listStatus.map(status => (
              <View
                key={status.id}
                style={{
                  height: 50,
                  width: '100%',
                  backgroundColor: 'white',
                  borderBottomColor: 'black',
                  borderBottomWidth: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  borderRadius: 10,
                  paddingLeft: 10,
                }}>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  {status.name}
                </Text>
                <Text>{status.type}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
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
