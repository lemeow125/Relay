import * as React from 'react';
import { Text } from 'react-native';
import Button from '../../Components/Buttons/Button/Button';
import Background from '../../Components/Background/Background';
import Window from '../../Components/Window/Window';
import styles from '../../Styles/Styles';
import DocumentPicker from 'react-native-document-picker';

export default function Send({ navigation }: any) {
  return (
    <Background>
      <Window>
        <Text style={styles.text_medium}>Send</Text>
        <Button
          title="Select File"
          onPress={async () => {
            try {
              const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
              });
              if (pickerResult.name && pickerResult.size && pickerResult.uri) {
                navigation.navigate('Select');
              }
            } catch (e) {
              console.log(e);
            }
          }}
        />
      </Window>
    </Background>
  );
}
