import {Button, StyleSheet, Text} from 'react-native';
import * as WifiManager from 'react-native-wifi-reborn';

export const CurrentSSID = () => {

  const handleFetch = () => {
      .then(setSsid)
  };

  useEffect(() => {
  }, []);

  return (
    <Section title="Current SSID">
      <Button title="Refresh" onPress={handleFetch} />
    </Section>
  );
};

const styles = StyleSheet.create({
    color: '#000',
  },
});
