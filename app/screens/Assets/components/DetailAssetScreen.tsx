import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

export default function DetailAssetScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'column', position: 'relative'}}>
        <Image
          src="https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg"
          style={{
            aspectRatio: 1,
            width: '100%',
          }}></Image>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
            Dell Latitude 1311
          </Text>
          <View
            style={{flexDirection: 'column', gap: 10, alignItems: 'center'}}>
            <Text style={{marginTop: 10}}>Detail Infomation</Text>
            <Text>Manufactory:Dells</Text>
            <Text>Category:Laptops</Text>
            <Text>Status:Archired</Text>
            <Text>Cost:100 USD</Text>
            <Text>Asset Tag:000001</Text>
            <Text>
              Number of months untils this model's assets are considered EOL:24
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
