import React from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

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
    height: 50,
    width,
    borderWidth: 1,
    borderColor: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: 'white',
    fontSize: 30,
  },
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const eventHandler = () => (
  <SvgExample strokeColor={getRandomColor()} fillColor={getRandomColor()} />
);

const SvgExample = props => (
  <Svg height={height - 5} width={width}>
    <Circle
      cx={width / 2}
      cy={height / 2}
      r={props.radius}
      fill={props.fillColor}
    />
  </Svg>
);


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      strokeColor: getRandomColor(),
      fillColor: getRandomColor(),
      circleRadius: Math.random() * 125,

    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const radius = Math.random() * 125;
    this.setState({
      strokeColor: getRandomColor(),
      fillColor: getRandomColor(),
      circleRadius: radius,
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
        <Button
          color="#841584"
          title="Look At Another Circle"
          onPress={this.clickHandler}
          accessibilityTitle="Look at another circle"
          circleProps={this.state}
        />
      </View>
    );
  }
}

export default function Container() {
  return (
    <Main clickHandler={eventHandler} />
  );
}
