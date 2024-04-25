import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Icon} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from '../../slices/hooks';
import {GetAuth, SetAuth} from '../../slices/reducers/Auth/Auth.reducer';
import {AuthAPI} from '../../apis/Auth.api';
import {AppConfig} from '../../AppConfig';
export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const authProfile = useAppSelector(GetAuth);
  useEffect(() => {
    AuthAPI.getMe(1).then(el => {
      dispatch(SetAuth(el.data));
    });
  }, [dispatch]);

  return (
    <View style={{backgroundColor: '#efefef'}}>
      <View
        style={{
          width: '100%',
          height: 170,
          backgroundColor: '#0b1b32',
          paddingTop: 20,
          paddingHorizontal: 20,
          elevation: 5,
        }}>
        <Text style={{fontSize: 30, color: 'white'}}>Profile</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
            paddingTop: 20,
            alignItems: 'center',
          }}>
          <Image
            src={
              authProfile.avatar
                ? `${AppConfig.baseUrlImageAvatar}/${authProfile.avatar
                    ?.split('/')
                    .pop()}`
                : 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg'
            }
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
            }}></Image>

          <View>
            <Text style={{fontSize: 16, color: 'white'}}>
              {authProfile.name}
            </Text>
            <Text style={{fontSize: 20, color: 'white'}}>
              {authProfile.username}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textmenu: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  menuprofile: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#8d8d8d',
    elevation: 5,
  },
});
