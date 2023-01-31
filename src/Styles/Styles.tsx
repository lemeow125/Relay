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
    opacity: 0.9,
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
  text_small: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flex_row: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
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
    marginLeft: 8,
    tintColor: 'white',
  },
  drawer_button: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#2d446d',
    width: 240,
  },
  statusbar_icon: {
    width: 42,
    height: 42,
    marginRight: 8,
  },
});

export default styles;
