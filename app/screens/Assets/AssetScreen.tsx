import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button, IconButton, Searchbar} from 'react-native-paper';
import {AssetsAPI} from '../../apis/Assets.api';
import {CategoriesAPI} from '../../apis/Category.api';
import {StatusAPI} from '../../apis/Status.api';
import {useAppDispatch, useAppSelector} from '../../slices/hooks';
import {
  GetAssets,
  SetAssets,
} from '../../slices/reducers/Assets/Assets.reducer';
import ItemAssetView from './../Assets/components/ItemAssetView';
import LoadingModal from './../Components/LoadingModal';

interface ISelectItem {
  label: string;
  value: string;
}

export default function AssetScreen() {
  const navigation = useNavigation();
  const [filterCategory, setfilterCategory] = useState('');
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);
  const [valueCate, setValueCate] = useState(null);
  const [valueStatus, setValueStatus] = useState(null);
  const [listCategory, setListCategory] = useState<ISelectItem[]>([]);
  const [listStatus, setListStatus] = useState<ISelectItem[]>([]);
  const listAssets = useAppSelector(GetAssets);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    searchCategory();
    searchStatus();
  }, [dispatch]);

  useEffect(() => {
    searchAssets();
  }, [dispatch, valueCate, search]);

  const searchCategory = () => {
    CategoriesAPI.fetchAll()
      .then(res =>
        setListCategory(
          res.data.rows.map((el: any) => ({label: el.name, value: el.id})),
        ),
      )
      .catch(er => console.log(er));
  };
  const searchStatus = () => {
    StatusAPI.fetchAll()
      .then(res =>
        setListStatus(
          res.data.rows.map((el: any) => ({label: el.name, value: el.id})),
        ),
      )
      .catch(er => console.log(er));
  };
  const searchAssets = () => {
    setIsLoading(true);
    AssetsAPI.fetchAll(valueCate !== null ? valueCate : undefined, search)
      .then(result => dispatch(SetAssets(result.data.rows)))
      .catch(er => console.log(er))
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <LoadingModal isLoading={isLoading} />
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 30, color: 'black'}}>Assets</Text>
          <IconButton
            icon="plus"
            style={{borderRadius: 50, borderWidth: 1, backgroundColor: 'blue'}}
            iconColor={'white'}
            size={20}
            onPress={() => navigation.navigate('CreateAsset')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Searchbar
            style={{backgroundColor: '#e4e3e9', marginTop: 30, flex: 1}}
            placeholder="Search"
            onChangeText={el => {
              setSearch(el);
            }}
            value={search}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            color: 'black',
          }}>
          Filter
        </Text>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          {listCategory && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>Category</Text>
              <View style={{width: 200, height: 30}}>
                <DropDownPicker
                  open={openCategory}
                  style={{height: 30}}
                  value={valueCate}
                  listMode="SCROLLVIEW"
                  items={[{label: 'Tất cả', value: ''}, ...listCategory]}
                  setOpen={setOpenCategory}
                  setValue={setValueCate}
                  setItems={setListCategory}
                />
              </View>
            </View>
          )}
        </View>
        {/* <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          {listStatus && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text>Status</Text>
              <View style={{width: 200, height: 30}}>
                <DropDownPicker
                  open={openStatus}
                  style={{height: 30}}
                  value={valueStatus}
                  listMode="SCROLLVIEW"
                  items={[{label: 'Tất cả', value: ''}, ...listStatus]}
                  setOpen={setOpenStatus}
                  setValue={setValueStatus}
                  setItems={setListCategory}
                />
              </View>
            </View>
          )}
        </View> */}
        <View style={{marginTop: 50, gap: 10, minHeight: 200}}>
          {listAssets &&
            (listAssets.length > 0 ? (
              listAssets.map((item, index) => (
                <ItemAssetView item={item} key={index} />
              ))
            ) : (
              <View
                style={{
                  minHeight: 200,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    textTransform: 'uppercase',
                  }}>
                  No data
                </Text>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
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
