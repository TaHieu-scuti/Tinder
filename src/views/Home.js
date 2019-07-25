import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeComponent extends Component {
    render() {
        console.log('xxx');
        return (
            <View style={styles.sectionContainer}>
                <Text>Home</Text>
            </View>
        );
    }
}

export default HomeComponent;