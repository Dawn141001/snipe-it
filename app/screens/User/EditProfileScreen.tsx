
import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Icon, Text } from 'react-native-paper';
export default function EditProfileScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: 'https://toquoc.mediacdn.vn/thumb_w/640/280518851207290880/2023/11/14/cristiano-ronaldo-signs-for-al-n-16999414521651175458061.jpg',
          }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Icon source="camera" size={17} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ronlado"
          underlineColorAndroid="transparent"
          textAlign="center"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 40,
    fontSize: 19,
    width: 100,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  cameraIcon: {
    height: 25,
    width: 25,
    position: 'absolute',
    backgroundColor: 'gray',
    top: '73%',
    left: '17%',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
