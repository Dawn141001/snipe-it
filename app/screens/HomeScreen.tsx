import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { AssetsAPI } from '../apis/Assets.api';
import { useAppDispatch, useAppSelector } from '../slices/hooks';
import { GetAssets, SetAssets } from '../slices/reducers/Assets/Assets.reducer';
import {AppConfig} from '../AppConfig';
import { CategoriesAPI } from '../apis/Category.api';
import { GetCategory, SetCategory } from '../slices/reducers/Category/Category.reducer';
import { ICategory } from '../interface/Category.interface';
import { IAsset } from '../interface/Asset.interface';

interface Assets {
  model: string;
  category: string;
  status: string;
  cost: number;
  manufact: string;
}
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterCategory, setfilterCategory] = React.useState('');

  const navigation = useNavigation();
  const listAssets=useAppSelector(GetAssets);
  const listCategory=useAppSelector(GetCategory);
  const dispatch=useAppDispatch();

useEffect(()=>{
  CategoriesAPI.fetchAll().then(res=>{dispatch(SetCategory(res.data.rows));
  }).catch(err => {
      console.log(err);
    });
},[dispatch])

useEffect(()=>{


       AssetsAPI.fetchAll().then(result =>
         dispatch(
           SetAssets(
             result.data.rows
           ),
         ),
       );
    
},[dispatch])



  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 30, color: 'black'}}>Assets</Text>
        <Searchbar
          style={{backgroundColor: '#e4e3e9', marginTop: 30}}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />

        <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 20}}>
          Filter
        </Text>
        <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 50}}>
            <Text>Manufactory</Text>
            <View style={{width: 200}}>
              {listCategory.length > 0 && (
                <RNPickerSelect
                  items={listCategory.map(el => ({
                    key: `${el.id}`,
                    value: `${el.id}`,
                    label: `${el.name}`,
                  }))}
                  onValueChange={value => {
                  
                  }}
                  value={
                    listCategory.map(el => ({
                      key: el.id?.toString(),
                      value: el.id?.toString(),
                      label: el.name?.toString(),
                    }))[0].value
                  }
                />
              )}
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 50}}>
            <Text>Category</Text>
            <View style={{width: 200}}>
              {listCategory.length > 0 && (
                <RNPickerSelect
                  items={listCategory.map(el => ({
                    key: `${el.id}`,
                    value: `${el.id}`,
                    label: `${el.name}`,
                  }))}
                  onValueChange={value => {
                   setfilterCategory(value)
                  }}
                  value={
                    listCategory.map(el => ({
                      key: el.id?.toString(),
                      value: el.id?.toString(),
                      label: el.name?.toString(),
                    }))[0].value
                  }
                />
              )}
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          {listAssets.map((item, index) => {
            console.log(item.category?.id===Number(filterCategory)&&filterCategory.length>0)
            if(
              filterCategory.length>0 && item.category?.id===Number(filterCategory)
            ){
              return (
                <TouchableHighlight
                  key={`${item.model}-${index}`}
                  onPress={() =>
                    navigation.navigate('DetailAssetScreen', {id: item.id})
                  }>
                  <View
                    style={{
                      padding: 10,
                      flexDirection: 'row',
                      gap: 20,
                      height: 120,
                    }}>
                    <Image
                      src={
                        item.image
                          ? `${AppConfig.baseUrlImage}/${item.image
                              ?.split('/')
                              .pop()}`
                          : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                      }
                      style={{
                        height: 100,
                        width: 100,
                        objectFit: 'cover',
                      }}></Image>
                    <View
                      style={{
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'space-between',
                        paddingBottom: 5,
                      }}>
                      <Text style={{fontWeight: 'bold'}}>{item.asset_tag}</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        {item.model?.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text>{item.category?.name}</Text>
                      </View>
                      <Text>{item.status_label?.name}</Text>
                      <Text>
                        {item.purchase_cost ? item.purchase_cost : 'Unknown'}{' '}
                        USD
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            }
            return (
              <TouchableHighlight
                key={`${item.model}-${index}`}
                onPress={() => navigation.navigate('DetailAssetScreen',{id:item.id})}>
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    gap: 20,
                    height: 120,
                  }}>
                  <Image
                    src={
                      item.image
                        ? `${AppConfig.baseUrlImage}/${item.image
                            ?.split('/')
                            .pop()}`
                        : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                    }
                    style={{
                      height: 100,
                      width: 100,
                      objectFit: 'cover',
                    }}></Image>
                  <View
                    style={{
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'space-between',
                      paddingBottom: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>{item.asset_tag}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      {item.model?.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>{item.category?.name}</Text>
                    </View>
                    <Text>{item.status_label?.name}</Text>
                    <Text>
                      {item.purchase_cost ? item.purchase_cost : 'Unknown'} USD
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:10
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
