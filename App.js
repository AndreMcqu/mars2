import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fristPictrue}>
        <Image
          style={styles.fristPictrue}
          source={require('./assets/rover.jpg')} />
      </View>
      <View style={styles.words}>
        <Text>Le rover Opportunity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fristPictrue: {
    flex: 3,
    width: '100%',
  },
  smallcontainer: {
    flex: 1,
  },
  words: {
    flex: 1,
  },
});
