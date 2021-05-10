import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        // justifyContent: 'center',
        width: '100%',
        height: Dimensions.get('window').height - 11,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        height: '92%',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    handle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
    },
    songImage: {
        width: 35,
        height: 35,
        borderRadius: 35,
        borderWidth: 5,
        borderColor: '#4c4c4c',
    },

    // Side Container
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        padding: 10,
        justifyContent: 'space-between',
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
    },
    profilePictueContainer: {

    },
    iconContainer: {
        alignItems: 'center',
    },
    statsLabel: {
        color: 'lightgrey',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 5,
    },

});

export default styles;