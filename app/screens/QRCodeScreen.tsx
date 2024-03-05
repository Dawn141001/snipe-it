import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import QRCodeScanner from "react-native-qrcode-scanner";

export const QRCode=()=>{
  return (
     <QRCodeScanner
          onRead={
            e => {
             console.log(e)
            }
          }
          // flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>
              Go to
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
