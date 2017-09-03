import React from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#841584',
  },
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const eventHandler = (event) => {
  return (
  <SvgExample strokeColor={getRandomColor()} fillColor={getRandomColor()} />
  )
};

const SvgExample = function theCircle(props) {
  return (
    <Svg height={height} width={width - 50}>
      <Circle
        cx={width/2}
        cy={height / 2}
        r={props.radius}
        fill={props.fillColor}
      />
    </Svg>
  );
};

class Main extends React.Component {
  constructor(){
    super()
    this.state ={
      strokeColor: getRandomColor(),
      fillColor: getRandomColor(),
      circleRadius: Math.random() * 125,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      strokeColor: getRandomColor(),
      fillColor: getRandomColor(),
      circleRadius: Math.random() * 125,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SvgExample
          radius={this.state.circleRadius}
          strokeColor={this.state.strokeColor}
          fillColor={this.state.fillColor}
        />
        <View style={styles.button}>
          <Button
            onPress={this.clickHandler}
            color='#841584'
            title="Look at another Circle"
            accessibilityLabel="Look at another circle"
          />
        </View>
      </View>
    );
  }
}

export default function Container() {
  return (
    <Main clickHandler={eventHandler} />
  );
}
