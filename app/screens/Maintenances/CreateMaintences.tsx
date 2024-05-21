import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Icon, Snackbar, Text, TextInput} from 'react-native-paper';
import {MainternancesAPI} from '../../apis/Maintenances.api';
import {IMaintenaces} from '../../interface/Maintenaces.interface';
import LoadingModal from '../Components/LoadingModal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import {SuppliesAPI} from '../../apis/Supply.api';

const CreateMaintenance = ({route, navigate}: any) => {
  const {id} = route.params;
  const navigation = useNavigation();
  const [maintenaces, setMaintenaces] = useState<IMaintenaces>({asset_id: id});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const [textSnack, setTextSnack] = useState<string>('');
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [openSupply, setOpenSupply] = useState<boolean>(false);
  const [valueSupply, setValueSupply] = useState(null);
  const [listSupply, setListSupply] = useState<{label: any; value: string}[]>(
    [],
  );
  useEffect(() => {
    searchSupply();
  }, []);
  const searchSupply = () => {
    SuppliesAPI.fetchAll()
      .then(res => setListSupply(res.data.rows))
      .catch(er => console.log(er));
  };
  const createItem = async () => {
    setIsLoading(true);
    console.log(maintenaces);
    // await MainternancesAPI.createMaintenance({
    //   ...maintenaces,
    //   asset_maintenance_type: 'Maintenance',
    // })
    //   .then((res: any) => {
    //     if (res.data.status == 'success') {
    //       setTextSnack('Tạo thành công');
    //     } else {
    //       setTextSnack('Tạo thất bại');
    //     }
    //   })
    //   .catch(er => {
    //     setTextSnack('Tạo thất bại');
    //   })
    //   .finally(() => {
    //     setVisible(true);
    //     setIsLoading(false);
    //     setTimeout(() => {
    //       navigation.goBack();
    //     }, 1000);
    //   });
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
            Create Maintenance Form
          </Text>
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Title</Text>
            <TextInput
              onChangeText={el => setMaintenaces({...maintenaces, title: el})}
              style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
                height: 40,
                flex: 1,
              }}
            />
          </View>
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Start Date</Text>
            <Button
              onPress={() => setOpenDate(true)}
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 0,
              }}>
              {maintenaces?.start_date ? maintenaces?.start_date : ''}
              <Icon source="calendar" size={20} />
            </Button>
            <DatePicker
              key={'datepicker'}
              modal
              mode="date"
              open={openDate}
              date={date}
              onConfirm={date => {
                setOpenDate(false);
                setMaintenaces({
                  ...maintenaces,
                  start_date: moment(date).format('YYYY-MM-DD'),
                });
              }}
              onCancel={() => {
                setOpenDate(false);
              }}
            />
          </View>
          {/* <View style={styles.rowInput}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}>
              {listSupply && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={{width: 100}}>Supply</Text>
                  <View style={{flex: 1}}>
                    <DropDownPicker
                      open={openSupply}
                      key={'supply main'}
                      containerStyle={{position: 'relative', bottom: 0}}
                      value={valueSupply}
                      zIndex={52}
                      listMode="SCROLLVIEW"
                      items={listSupply}
                      setOpen={setOpenSupply}
                      setValue={setValueSupply}
                      setItems={setListSupply}
                    />
                  </View>
                </View>
              )}
            </View>
          </View> */}
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Cost</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={el =>
                setMaintenaces({...maintenaces, cost: Number(el)})
              }
              style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
                height: 40,
                flex: 1,
              }}
            />
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
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={Snackbar.DURATION_SHORT}>
        {textSnack}
      </Snackbar>
    </ScrollView>
  );
};
export default CreateMaintenance;
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
