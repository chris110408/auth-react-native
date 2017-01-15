/**
 * Created by leichen on 2017/1/14.
 */
/**
 * Created by leichen on 2017/1/12.
 */
//Import libraries for making a component

import React from 'react';
import { ActivityIndicator, View } from 'react-native';

//maike a Component

const Spinner = ({ size }) => {

    return (
        <View style={ styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

//Make the component available to other parts of the app
const styles = {

    spinnerStyle: {
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 20
    }
}

export { Spinner };
