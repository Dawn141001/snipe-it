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
    AuthAPI.getMe().then(el => {
      dispatch(SetAuth(el.data));
    });
  }, [dispatch]);

  return (
    <View style={{backgroundColor: '#efefef'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
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
              {authProfile?.name ? authProfile.name : 'Unknown'}
            </Text>
            <Text style={{fontSize: 20, color: 'white'}}>
              {authProfile?.username ? authProfile?.username : 'Unknown'}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white', marginBottom: 10}}>
            Information
          </Text>
          <Text style={{fontSize: 16, color: 'white'}}>
            Email:{authProfile?.email ? authProfile?.email : 'Unknown'}
          </Text>
          <Text style={{fontSize: 16, color: 'white'}}>
            Country:{authProfile?.country ? authProfile?.country : 'Unknown'}
          </Text>
          <Text style={{fontSize: 16, color: 'white'}}>
            Phone:{authProfile?.phone ? authProfile?.phone : 'Unknown'}
          </Text>
          <Text style={{fontSize: 16, color: 'white'}}>
            Employee Num:
            {authProfile?.employee_num ? authProfile?.employee_num : 'Unknown'}
          </Text>
        </View>
      </View>
    </View>
  );
}
