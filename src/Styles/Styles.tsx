import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill_screen: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  text_large: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  image_tiny: {
    width: 64,
    height: 64,
    tintColor: 'white',
  },
});

export default styles;
