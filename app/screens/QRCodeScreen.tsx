import {useNavigation} from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {AssetsAPI} from '../apis/Assets.api';

export const QRCode = () => {
  const navigation = useNavigation();

  const onSuccess = async (e: any) => {
    console.log(e.data);
    const asset = await AssetsAPI.getAssetByTag(e.data).then(el =>
      navigation.navigate('DetailAssetScreen', {id: el.data.id}),
    );
  };

  return (
    <QRCodeScanner
      onRead={onSuccess.bind(this)}
      showMarker={true}
      reactivate={true}
      reactivateTimeout={5000}
    />
  );
};
