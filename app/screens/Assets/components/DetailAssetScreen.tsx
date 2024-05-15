import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
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
import {TabView, SceneMap} from 'react-native-tab-view';
import {MainternancesAPI} from '../../../apis/Maintenances.api';
import {IMaintenaces} from '../../../interface/Maintenaces.interface';

export default function DetailAssetScreen({route, navigate}: any) {
  const {id} = route.params;
  const detailAssets = useAppSelector(GetDetailAsset);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const layout = useWindowDimensions();
  const [maintenaces, setMaintenaces] = useState<IMaintenaces[]>([]);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Detail'},
    {key: 'second', title: 'Mainternaces'},
  ]);

  const searchMainternant = () => {
    setIsLoading(true);
    MainternancesAPI.fetchByID(id)
      .then(el => setMaintenaces(el.data.rows))
      .catch(() => {})
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    AssetsAPI.getAssetById(id).then(el => {
      dispatch(SetDetailAsset(el.data));
    });
  }, [id, dispatch]);
  useEffect(() => searchMainternant(), [dispatch, id]);
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
  const FirstRoute = () => (
    <View style={{flexDirection: 'column', gap: 10, alignItems: 'center'}}>
      <Text style={{marginTop: 10, color: 'black'}}>Detail Infomation</Text>

      <Text
        style={{
          color: 'black',
        }}>
        Category:
        {detailAssets?.category ? detailAssets.category.name : 'Unknown'}
      </Text>
      <Text
        style={{
          color: 'black',
        }}>
        Status:
        {detailAssets?.status_label
          ? detailAssets.status_label.name
          : 'Unknown'}
      </Text>
      <Text
        style={{
          color: 'black',
        }}>
        Supply:
        {detailAssets?.supplier?.name ? detailAssets.supplier.name : 'Unknown'}
      </Text>
      <Text
        style={{
          color: 'black',
        }}>
        Purchase Date:
        {detailAssets?.purchase_date?.date
          ? detailAssets.purchase_date.date
          : 'Unknown'}
      </Text>
      <Text
        style={{
          color: 'black',
        }}>
        Cost:
        {detailAssets?.purchase_cost ? detailAssets.purchase_cost : 'Unknown'}
        USD
      </Text>
      <Text
        style={{
          color: 'black',
        }}>
        Asset Tag:
        {detailAssets?.asset_tag ? detailAssets.asset_tag : 'Unknown'}
      </Text>
    </View>
  );

  const SecondRoute = () => (
    <View
      style={{
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <Text style={{marginTop: 10, color: 'black'}}>Maintenaces</Text>
      {maintenaces.map((main, index) => (
        <View key={index}>
          <Text
            style={{
              color: 'black',
            }}>
            {index + 1}.Title:
            {main?.title ? main.title : 'Unknown'}
          </Text>
          <Text
            style={{
              color: 'black',
            }}>
            Type:
            {main.asset_maintenance_type
              ? main.asset_maintenance_type
              : 'Unknown'}
            {'   '}
            Cost:
            {main.cost ? main.cost : 'Unknown'}USD
          </Text>

          <Text
            style={{
              color: 'black',
            }}>
            Start:
            {main?.start_date?.date ? main.start_date.date : '--'}
            {'   '}Complete:
            {main?.completion_date?.date ? main.completion_date.date : '--'}
          </Text>
          <Text
            style={{
              color: 'black',
            }}>
            Supply:
            {main?.supplier?.name ? main.supplier.name : 'Unknown'}
          </Text>
          <Text
            style={{
              color: 'black',
            }}>
            Note:
            {main?.notes ? main.notes : 'Unknown'}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
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
              detailAssets?.image
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
            {detailAssets?.model?.name}
          </Text>

          <TabView
            style={{marginTop: 50}}
            navigationState={{index, routes}}
            renderScene={renderScene}
            sceneContainerStyle={{backgroundColor: 'white'}}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
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
