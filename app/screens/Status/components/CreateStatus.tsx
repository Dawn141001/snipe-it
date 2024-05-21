import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Snackbar, Text, TextInput} from 'react-native-paper';
import {StatusAPI} from '../../../apis/Status.api';
import {IStatus} from '../../../interface/Status.interface';
import {useAppDispatch} from '../../../slices/hooks';
import LoadingModal from '../../Components/LoadingModal';

const CreateStatus = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<IStatus>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const [textSnack, setTextSnack] = useState<string>('');

  const createItem = async () => {
    setIsLoading(true);
    await StatusAPI.createStatus({...status, type: 'deployable'})
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
        }, 1000); // 1 giây
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
            Create Status Form
          </Text>
          <View style={styles.rowInput}>
            <Text style={{width: 100}}>Name</Text>
            <TextInput
              onChangeText={el => setStatus({...status, name: el})}
              style={{
                paddingHorizontal: 10,
                backgroundColor: 'white',
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
export default CreateStatus;
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
