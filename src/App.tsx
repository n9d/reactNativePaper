import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';

class App extends Component {
  render() {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.text}>
            text
          </Text>
          <Button mode="contained" onPress={()=>console.log("pressed 1")}><Text style={styles.text}>PRESS</Text></Button>
          <Button mode="contained" onPress={()=>console.log("pressed 1")}><Text style={styles.text}>PRESS</Text></Button>
          <Button mode="contained" onPress={()=>console.log("pressed 1")}><Text style={styles.text}>PRESS</Text></Button>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
