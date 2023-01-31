import { Pressable, Text, View, Image } from 'react-native';
import styles from '../../../Styles/Styles';
import { useNavigation } from '@react-navigation/native';

type RootDrawerParamList = {
  navigate: any;
};

interface props {
  goTo: string;
  icon: {};
}
export default function DrawerButton(props: props) {
  const navigation = useNavigation<RootDrawerParamList>();
  const { goTo, icon } = props;
  return (
    <View style={styles.drawer_button}>
      <Pressable
        onPress={() => {
          navigation.navigate(goTo);
        }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image style={styles.drawer_button_icon} source={icon} />
          <Text style={styles.drawer_button_text}>{goTo}</Text>
        </View>
      </Pressable>
    </View>
  );
}
