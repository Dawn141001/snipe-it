import React, { Children, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Appbar, Searchbar} from 'react-native-paper';
import { AssetsAPI } from '../apis/Assets.api';
import {RNCamera} from 'react-native-camera';
import RNPickerSelect from 'react-native-picker-select';
import QRCodeScanner from 'react-native-qrcode-scanner';
import SettingScreen from './SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import AssetsScreen from './Assets/AssetsScreen';
import {useAppDispatch, useAppSelector} from '../slices/hooks'; 
import { GetAssets, SetAssets } from '../slices/reducers/Assets/Assets.reducer';

interface Assets {
  model: string;
  category: string;
  status: string;
  cost: number;
  manufact: string;
}
const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation}: any) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const listAssets=useAppSelector(GetAssets);
const dispatch=useAppDispatch();
useEffect(()=>{
AssetsAPI.fetchAll().then((result)=>dispatch(SetAssets(result.data))).catch((err)=>{
  console.log(err)
})
},[dispatch])
  
const sports = [
  {
    label: 'Football',
    key: 'football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
    key: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
    key: 'hockey',
  },
];
  const fetchData=async ()=>{
    const data = await fetch('http://192.168.1.54:80/api/v1/hardware', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjEzNGM2OWNjNmMzNDNmMzgwYmZiMGQ2ZmQwNGIzNjhiNjgzMTM4NTQwZGMzNDNkY2Q0Y2EyMzhiYjcyYWVmN2ZkYjM5N2ZlZGM0NGJiMGQiLCJpYXQiOjE3MDkzNzQ5MzQuNzY0OTg3LCJuYmYiOjE3MDkzNzQ5MzQuNzY0OTksImV4cCI6MjE4MjY3NDEzNC43MDg1MDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.fOK_7nOBKIZzcis2aCTOhqU8xiaJ8srhmXw_TUh8g-Hlnyk3p7f4GPYD69et-0VLxtgu5e6n0cXQAQ-qVscbIDYisnMLx-I1N_pZzdeEWJPOKCbAcNWd4TroN__RHCPytzLwKmgCCWGpEkMVzYkh-R09RpTks3lwZToojEpHGmUGAP1AbmFfAojrFj275oMp00c25fRuvvxZDizR2pkHT8w-K1Zl9KuhZNIfyn_C3hbOPKJ6BhHHytuPMN_WrkLrYqetTL7z4Hp7u-TPLaEIzO9JarozH3Gn2cZqlf_znQMLXDW0zlu7v1Z2RdT16VXa2Vp-jD3gn3Rfi2p3tILwvOfmNqsvk5UtIpEvTijcBrC52pDuJJAZ4J-9PVhdCzCOPN0zcjDLjaCfCz5CrclgnVfllANQ-Kz4m2SQyZ9LOLrNFpEh1pKTD7jV_xUZ6xPtgGbZyY5dA86N8uVEt6dC9cDLlw140srL8I1-vcJqcMu13w6Y9XCBZbnqsvxzPsJ7q9c0IBajkbKWQG_MPSC46-bwnvddVGqZ0pGfZktDIxDmyyEVlVJoavykweN9uUDV5WlLR0rIDoVX0vrJT4teaZCO_BVP1x3JeAaD37c56hvbc-wqBlnugtJTiflZvGeBqzyNHbuLV8wACfP-5Mqg1fSGuwuzsMeaqOqtbInZosY',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    })
      .then(el => {
        console.log(el.json());
      })
      .catch(er => console.log(er));
    return data
  }
useEffect(()=>{
  AssetsAPI.fetchAll().then(el=>console.log(el.data)).catch((er)=>console.log(er))
//  fetchData()
},[])
  const listItem: Assets[] = [
    {
      model: 'Dell Latitude 1311',
      category: 'Laptops',
      manufact: 'Dells',
      cost: 100,
      status: 'Ready to Deploys',
    },
    {
      model: 'Dell Latitude 1313',
      category: 'Laptops',
      manufact: 'Dells',
      cost: 120,
      status: 'Ready to Deploys',
    },
    {
      model: 'Dell Latitude 1313',
      category: 'Laptops',
      manufact: 'Dells',
      cost: 120,
      status: 'Ready to Deploys',
    },
    {
      model: 'Dell Latitude 1313',
      category: 'Laptops',
      manufact: 'Dells',
      cost: 120,
      status: 'Ready to Deploys',
    },
  ];
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
              <RNPickerSelect
                items={sports}
                onValueChange={value => {
                  console.log(value);
                }}
                value={sports[0].value}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 50}}>
            <Text>Category</Text>
            <View style={{width: 200}}>
              <RNPickerSelect
                items={sports}
                onValueChange={value => {
                  console.log(value);
                }}
                value={sports[0].value}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          {listItem.map((item, index) => {
            return (
              <TouchableHighlight
                key={`${item.model}-${index}`}
                onPress={() => navigation.navigate('DetailAssetScreen')}>
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    gap: 20,
                    height: 120,
                  }}>
                  <Image
                    src="https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg"
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
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      {item.model}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>{item.manufact}</Text>
                      <Text>{item.category}</Text>
                    </View>
                    <Text>{item.status}</Text>
                    <Text>{item.cost} USD</Text>
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
