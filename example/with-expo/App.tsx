import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { ConnectToSSID } from './components/ConnectToSSID';
import { requestForegroundPermissionsAsync } from 'expo-location';
import { CurrentSSID } from './components/CurrentSSID';
import { Disconnect } from './components/Disconnect';

const askLocationPermission = async () => {
  alert("localtion permission")
  const res = await requestForegroundPermissionsAsync();
  // ˆ? res: { status: 'granted' | 'denied' | 'undetermined' }
  alert(JSON.stringify(res));
};

export default function App() {
  useEffect(() => {
    askLocationPermission();
  }, []);

  return (
    <ScrollView style={styles.screen} contentInsetAdjustmentBehavior="automatic">
      <StatusBar style="dark" translucent={false} />
      <View style={styles.container}>
        <CurrentSSID />
        <ConnectToSSID />
        <Disconnect />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});
