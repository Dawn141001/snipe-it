import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AssetsAPI} from '../../../apis/Assets.api';
import {useAppDispatch, useAppSelector} from '../../../slices/hooks';
import {
  GetDetailAsset,
  SetDetailAsset,
} from '../../../slices/reducers/DetailAssets/DetailAsset.reducer';
import {AppConfig} from '../../../AppConfig';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DeleteAssets} from '../../../slices/reducers/Assets/Assets.reducer';
import LoadingModal from '../../Components/LoadingModal';

export default function DetailAssetScreen({route, navigate}: any) {
  const {id} = route.params;
  const detailAssets = useAppSelector(GetDetailAsset);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    AssetsAPI.getAssetById(id).then(el => {
      dispatch(SetDetailAsset(el.data));
    });
  }, [id, dispatch]);

  const deleteItem = () => {
    setIsLoading(true);
    AssetsAPI.delete(id)
      .then(() => {
        dispatch(DeleteAssets(id));
      })
      .then(() => {
        navigation.navigate('HomeApp');
      })
      .catch(er => console.log(er))
      .finally(() => setIsLoading(false));
  };

  return (
    <ScrollView style={styles.container}>
      <LoadingModal isLoading={isLoading} />

      <View
        style={{flexDirection: 'column', position: 'relative', padding: 20}}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            padding: 10,
          }}>
          <Image
            src={
              detailAssets.image
                ? `${AppConfig.baseUrlImage}/${detailAssets.image
                    ?.split('/')
                    .pop()}`
                : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
            }
            style={{
              aspectRatio: 1,
              width: '100%',
            }}></Image>
        </View>

        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
            }}>
            {detailAssets.model?.name}
          </Text>
          <View
            style={{flexDirection: 'column', gap: 10, alignItems: 'center'}}>
            <Text style={{marginTop: 10, color: 'black'}}>
              Detail Infomation
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              Manufactory:
              {detailAssets.manufacturer
                ? detailAssets.manufacturer
                : 'Unknown'}
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              Category:
              {detailAssets.category ? detailAssets.category.name : 'Unknown'}
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              Status:
              {detailAssets.status_label
                ? detailAssets.status_label.name
                : 'Unknown'}
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              Cost:
              {detailAssets.purchase_cost
                ? detailAssets.purchase_cost
                : 'Unknown'}
              USD
            </Text>
            <Text
              style={{
                color: 'black',
              }}>
              Asset Tag:
              {detailAssets.asset_tag ? detailAssets.asset_tag : 'Unknown'}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Button
          labelStyle={{color: 'white'}}
          onPress={() => deleteItem()}
          style={{
            width: 100,
            backgroundColor: 'red',
          }}>
          Delete
        </Button>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
