import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class SearchNotFoundOwner extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <Image style={{flex:1, height:450, width:450, resizeMode: 'contain'}} source={require('../../assets/Search.png')} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  }
})