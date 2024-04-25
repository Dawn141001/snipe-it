import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Snackbar, Text, TextInput} from 'react-native-paper';
import {CategoriesAPI} from '../../../apis/Category.api';
import {IModel} from '../../../interface/Model.interface';
import {useAppDispatch} from '../../../slices/hooks';
import LoadingModal from '../../Components/LoadingModal';
import {ModelsAPI} from '../../../apis/Models.api';
import DropDownPicker from 'react-native-dropdown-picker';

interface ISelectItem {
  label: string;
  value: string;
}
const CreateModel = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [model, setModel] = useState<IModel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const [textSnack, setTextSnack] = useState<string>('');
  const [listCategory, setListCategory] = useState<ISelectItem[]>([]);
  const [valueCate, setValueCate] = useState(null);
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  useEffect(() => {
    searchCategory();
  }, []);

  const searchCategory = () => {
    CategoriesAPI.fetchAll()
      .then(res =>
        setListCategory(
          res.data.rows.map((el: any) => ({label: el.name, value: el.id})),
        ),
      )
      .catch(er => console.log(er));
  };

  const createItem = async () => {
    setIsLoading(true);
    console.log();
    await ModelsAPI.createModel({...model, category_id: valueCate!})
      .then((res: any) => {
        if (res.data.status == 'success') {
          setTextSnack('Tạo thành công');
        } else {
          setTextSnack('Tạo thất bại');
        }
      })
      .catch(er => {
        setTextSnack('Tạo thất bại');
      })
      .finally(() => {
        setVisible(true);
        setIsLoading(false);
        setTimeout(() => {
          navigation.navigate('OtherScreen');
        }, 1000); // 3 giây
      });
  };

  return (
    <ScrollView>
      <LoadingModal isLoading={isLoading} />

      <View style={styles.container}>
        <View style={{gap: 5}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create Model Form
          </Text>
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Name</Text>
            <TextInput
              onChangeText={el => setModel({...model, name: el})}
              style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
                flex: 1,
              }}
            />
          </View>
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
                <Text style={{color: 'black'}}>Category*</Text>
                <View style={{width: 200, height: 30}}>
                  <DropDownPicker
                    open={openCategory}
                    style={{height: 30}}
                    value={valueCate}
                    listMode="SCROLLVIEW"
                    items={[...listCategory]}
                    setOpen={setOpenCategory}
                    setValue={setValueCate}
                    setItems={setListCategory}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 150,
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
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={Snackbar.DURATION_SHORT}>
        {textSnack}
      </Snackbar>
    </ScrollView>
  );
};
export default CreateModel;
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
