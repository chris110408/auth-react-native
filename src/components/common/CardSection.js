/**
 * Created by leichen on 2017/1/13.
 */

import React from 'react';
import { View } from 'react-native';

//maike a Component

const CardSection = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

//Make the component available to other parts of the app
const styles = {

    containerStyle: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
