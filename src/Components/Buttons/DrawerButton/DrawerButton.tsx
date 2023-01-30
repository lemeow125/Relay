import { Pressable, Text, View, Image } from 'react-native';
import styles from '../../../Styles/Styles';
import { useNavigation } from '@react-navigation/native';

type RootDrawerParamList = {
  navigate: any;
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

interface props {
  goTo: string;
  icon: {};
}
export default function DrawerButton(props: props) {
  const navigation = useNavigation<RootDrawerParamList>();
  const { goTo, icon } = props;
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate(goTo);
        }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image style={styles.image_tiny} source={icon} />
          <Text
            style={{ color: 'white', fontSize: 16, verticalAlign: 'middle' }}>
            {goTo}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
