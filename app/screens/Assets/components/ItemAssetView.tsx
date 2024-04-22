import {
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AppConfig} from '../../../AppConfig';
import {Text} from 'react-native-paper';
import {IAsset} from '../../../interface/Asset.interface';
import {useNavigation} from '@react-navigation/native';

const ItemAssetView = (props: {item: IAsset}) => {
  const {item} = props;
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      key={`${item?.id}`}
      style={{borderWidth: 1, borderRadius: 10, borderColor: 'black'}}
      onPress={() => navigation.navigate('DetailAssetScreen', {id: item.id})}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'black',
          gap: 20,
          height: 120,
        }}>
        <Image
          src={
            item?.image
              ? item.image == null
                ? 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                : `${AppConfig.baseUrlImage}/${item.image?.split('/').pop()}`
              : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
          }
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
          <Text style={{fontWeight: 'bold'}}>{item?.asset_tag}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {item?.model?.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>{item?.category?.name}</Text>
          </View>
          <Text>{item?.status_label?.name}</Text>
          <Text>
            {item?.purchase_cost ? item.purchase_cost : 'Unknown'} USD
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ItemAssetView;
