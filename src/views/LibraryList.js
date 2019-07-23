import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';
import { styles } from '../assets/css/DefaultLayoutStyles';

class LibraryListComponent extends Component {
    render() {
        const libraries = this.props.libraries.map(library => {
            return (
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>{library.title}</Text>
                    <Text style={styles.sectionDescription}>
                        {library.description}
                    </Text>
                </View>
            );
        })
        return (
            <View>
                {libraries}
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        libraries: state.libraries
    };
}

export default connect(mapStateToProps, null)(LibraryListComponent);