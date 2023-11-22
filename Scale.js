import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Svg, { Path } from 'react-native-svg';

const size = 100;
const size75 = size * 75 / 100;
const size50 = size * 50 / 100;

export default class Scale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
      smile: 1,
      showPopup: false, // New state variable to control the visibility of the popup
    };
  }

  slidingChange(val) {
    this.setState({ val });
  }

  getVal(val) {
    this.setState({ smile: val });
  }

  togglePopup() {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  }

  render() {
    const val = this.state.smile;
    const dVal = "M15 20 Q40 " + val + " 60 20";
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.togglePopup.bind(this)}>
          <Text style={styles.title}>Give Rating between 1 - 10!</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showPopup}
          onRequestClose={this.togglePopup.bind(this)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                style={{ width: size, height: size }}
                source={require('./assets/facenomouth.png')}
              >
                <Svg height={size75} width={size75} style={{ alignSelf: 'center', marginTop: size50 }}>
                  <Path d={dVal} fill="none" stroke="red" strokeWidth="5" />
                </Svg>
              </Image>
              <Text style={styles.rating}>{parseInt(this.state.val)}</Text>
              <Slider
                style={{ width: 300 }}
                step={1}
                minimumValue={1}
                maximumValue={50}
                value={this.state.val}
                onValueChange={(val) => this.slidingChange(val)}
                onSlidingComplete={(val) => this.getVal(val)}
              />
              <TouchableOpacity onPress={this.togglePopup.bind(this)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  rating: {
    textAlign: 'center',
    color: '#333333', 
    marginBottom: 5,
  },
});