import {useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {AssetsAPI} from '../../../apis/Assets.api';
import {useAppDispatch} from '../../../slices/hooks';
import {AddAssets} from '../../../slices/reducers/Assets/Assets.reducer';
import {CategoriesAPI} from '../../../apis/Category.api';
import {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StatusAPI} from '../../../apis/Status.api';
import {IAsset} from '../../../interface/Asset.interface';
import {ModelsAPI} from '../../../apis/Models.api';
interface ISelectItem {
  label: string;
  value: string;
}
const CreateAsset = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [openStatus, setOpenStatus] = useState<boolean>(false);
  const [valueStatus, setValueStatus] = useState(null);
  const [listStatus, setListStatus] = useState<ISelectItem[]>([]);
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [valueModel, setValueModel] = useState(null);
  const [listModel, setListModel] = useState<ISelectItem[]>([]);
  const [asset, setAsset] = useState<IAsset>({});

  useEffect(() => {
    searchStatus();
    searchModel();
  }, []);
  const createItem = () => {
    console.log({
      ...asset,
      status_id: valueStatus,
      model_id: valueModel,
    });
    AssetsAPI.create({
      ...asset,
      status_id: Number(valueStatus),
      model_id: Number(valueModel),
    })
      .then(res => {
        dispatch(AddAssets(res.data.data));
        navigation.navigate('HomeApp');
      })
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
  const searchModel = () => {
    ModelsAPI.fetchAll()
      .then(res =>
        setListModel(
          res.data.rows.map((el: any) => ({label: el.name, value: el.id})),
        ),
      )
      .catch(er => console.log(er));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{gap: 5}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create Assets Form
          </Text>
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Name</Text>
            <TextInput
              onChangeText={el => setAsset({...asset, name: el})}
              style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
                flex: 1,
              }}
            />
          </View>
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Purchase Cost</Text>
            <TextInput
              onChangeText={el =>
                setAsset({...asset, purchase_cost: Number(el)})
              }
              style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
                flex: 1,
              }}
            />
          </View>
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Asset Tag*</Text>
            <TextInput
              onChangeText={el => setAsset({...asset, asset_tag: el})}
              style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
                flex: 1,
              }}
            />
          </View>
          <View style={styles.rowInput}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}>
              {listModel && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={{width: 100}}>Model*</Text>
                  <View style={{flex: 1}}>
                    <DropDownPicker
                      open={openModel}
                      containerStyle={{position: 'relative', bottom: 0}}
                      value={valueModel}
                      zIndex={52}
                      listMode="SCROLLVIEW"
                      items={listModel}
                      setOpen={setOpenModel}
                      setValue={setValueModel}
                      setItems={setListModel}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={styles.rowInput}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
                border: 'none',
              }}>
              {listStatus && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={{width: 100}}>Status*</Text>
                  <View style={{flex: 1}}>
                    <DropDownPicker
                      open={openStatus}
                      value={valueStatus}
                      zIndex={51}
                      listMode="SCROLLVIEW"
                      items={listStatus}
                      setOpen={setOpenStatus}
                      setValue={setValueStatus}
                      setItems={setListStatus}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 100,
          }}>
          <Button
            labelStyle={{color: 'white'}}
            onPress={() => createItem()}
            style={{
              width: 100,
              backgroundColor: 'blue',
            }}>
            Create
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
export default CreateAsset;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: 'black',
  },
  rowInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
});
