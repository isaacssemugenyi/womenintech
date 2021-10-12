import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    header: {
        // textTransform: 'capitalize',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    toSignUpSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    nextScreenOption: {
        color: 'blue',
        fontSize: 16
    },
    optBtn: {
        paddingHorizontal: 18,
        backgroundColor: '#f7f0fa',
        // borderColor: '#0000FF95', 
        // borderWidth: .7
    },
    inputModify: {
        borderRadius: 16,
        borderColor: '#F633E3F7',
        backgroundColor: 'white',
        alignSelf: 'center',
        width: 300,
        paddingHorizontal: 30
    },
    labelStyles: {
        marginLeft: 40, 
        marginVertical: 5, 
        fontSize: 16,
        color: '#00000080',
        fontWeight: 'bold'
    }
});