import {ActivityIndicator, Modal, Text, View} from 'react-native';

export default function LoadingModal(props: {isLoading: boolean}) {
  const {isLoading} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isLoading}
      statusBarTranslucent={true}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0008',
          display: 'flex',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: 200,
            marginTop: '70%',
            height: 70,
            backgroundColor: 'white',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <ActivityIndicator size={'large'} color={'red'} />
          <Text
            style={{
              marginVertical: 15,
              textAlign: 'center',
              fontSize: 17,
              color: 'black',
              marginLeft: 15,
            }}>
            Loading...
          </Text>
        </View>
      </View>
    </Modal>
  );
}
