import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  console.log(props)
  return (
    <Svg height="250" width="250">
      <Circle
        cx="125"
        cy="125"
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
          onClick={this.clickHandler}
          radius={this.state.circleRadius}
          strokeColor={this.state.strokeColor}
          fillColor={this.state.fillColor}
        />
        <Button
          onPress={this.clickHandler}
          title="Look at another Circle"
          color="#841584"
          accessibilityLabel="Look at another circle"
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
