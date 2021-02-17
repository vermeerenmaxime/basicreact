import { StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({

})

export const container = StyleSheet.create({
    full:{
        // paddingTop:16,
        // paddingRight:8,
        // paddingBottom:16,
        // paddingLeft:8,
        marginVertical:16,
        marginHorizontal:16,
    }
})

export const headers = StyleSheet.create({
    large:{
        fontSize:28,
        fontWeight:'bold',
    },

    medium:{
        // marginTop:8,
        // marginBottom:8,
        marginVertical:8,
        color:colors.dark,
        fontSize:20,
        fontWeight: 'bold',
        // fontWeight: expo.device == 'ios' ?
    }
})

export const stackHeaderStyle = StyleSheet.create({
    app:{
        height:90,
        backgroundColor:colors.baseColor,
    }
    
});

export default styles;