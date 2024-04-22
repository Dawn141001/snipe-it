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
import {IModel} from '../../interface/Model.interface';
import {ModelsAPI} from '../../apis/Models.api';

export default function ModelScreen() {
  const navigation = useNavigation();
  const [listModel, setListModel] = useState<IModel[]>([]);
  useEffect(() => {
    searchModel();
  }, []);
  const searchModel = () => {
    ModelsAPI.fetchAll()
      .then(res => setListModel(res.data.rows))
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
          {listModel &&
            listModel.map(model => (
              <View
                key={model.id}
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
                  {model.name}
                </Text>
                <Text>{model.category?.name}</Text>
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
