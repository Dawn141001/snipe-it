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

export default function CategoriesScreen() {
  const navigation = useNavigation();
  const [listCategory, setListCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    searchCategory();
  }, []);
  const searchCategory = () => {
    CategoriesAPI.fetchAll()
      .then(res => setListCategory(res.data.rows))
      .catch(er => console.log(er));
  };
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'column',
          }}>
          {listCategory &&
            listCategory.map(cate => (
              <View
                key={cate.id}
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
                  {cate.name}
                </Text>
                <Text>{cate.category_type}</Text>
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
