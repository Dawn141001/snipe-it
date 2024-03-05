import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AssetsAPI } from '../../../apis/Assets.api';
import { useAppDispatch, useAppSelector } from '../../../slices/hooks';
import { GetDetailAsset, SetDetailAsset } from '../../../slices/reducers/DetailAssets/DetailAsset.reducer';
import { AppConfig } from '../../../AppConfig';

export default function DetailAssetScreen({route,navigate}:any) {
  const {id}=route.params;
  const detailAssets=useAppSelector(GetDetailAsset);
  const dispatch=useAppDispatch();
  useEffect(()=>{
    AssetsAPI.getAssetById(id).then((el)=>{
    dispatch(SetDetailAsset(el.data))
    })
  },[id,dispatch])
  
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'column', position: 'relative'}}>
        <Image
          src={
            detailAssets.image
              ? `${AppConfig.baseUrlImage}/${detailAssets.image?.split('/').pop()}`
              : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
          }
          style={{
            aspectRatio: 1,
            width: '100%',
          }}></Image>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
            {detailAssets.model?.name}
          </Text>
          <View
            style={{flexDirection: 'column', gap: 10, alignItems: 'center'}}>
            <Text style={{marginTop: 10}}>Detail Infomation</Text>
            <Text>
              Manufactory:
              {detailAssets.manufacturer
                ? detailAssets.manufacturer
                : 'Unknown'}
            </Text>
            <Text>
              Category:
              {detailAssets.category ? detailAssets.category.name : 'Unknown'}
            </Text>
            <Text>
              Status:
              {detailAssets.status_label
                ? detailAssets.status_label.name
                : 'Unknown'}
            </Text>
            <Text>
              Cost:
              {detailAssets.purchase_cost
                ? detailAssets.purchase_cost
                : 'Unknown'}
              USD
            </Text>
            <Text>
              Asset Tag:
              {detailAssets.asset_tag ? detailAssets.asset_tag : 'Unknown'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
