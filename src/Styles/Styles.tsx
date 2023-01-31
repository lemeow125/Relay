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
  window: {
    flex: 1,
    alignContent: 'center',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#151a19',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  padding: {
    paddingVertical: 16,
  },
  text_large: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  text_medium: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  drawer_button_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 8,
    verticalAlign: 'middle',
  },
  drawer_button_icon: {
    width: 32,
    height: 32,
    tintColor: 'white',
    marginLeft: 8,
  },
  drawer_button: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#6495ED',
    width: 240,
  },
});

export default styles;
