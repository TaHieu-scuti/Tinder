import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Icon, Text, View } from 'native-base';
import { styles } from '../assets/css/DefaultLayoutStyles';

class LibraryListComponent extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#f5f4f5",
        marginTop:10 }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18, color: 'red' }} name="remove-circle" />
          : <Icon style={{ fontSize: 18, color: 'green' }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#edebed",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.description}
      </Text>
    );
  }
  render() {
    return (
      <Accordion
        dataArray={this.props.libraries}
        animation={true}
        expanded={true}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
}

export default connect(mapStateToProps, null)(LibraryListComponent);