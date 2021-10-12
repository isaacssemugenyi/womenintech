import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 40,
    marginVertical: 10
    },
    button: { 
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#0000FF95',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    btnText: {
      textAlign: 'center',
      fontSize: 30,
      textTransform: 'capitalize',
      color: 'white'
    }
});