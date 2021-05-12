import React ,{Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SplashScreen extends Component {

 constructor(props) {
 
    super(props);
 
    this.state = { 
 
        isLoading: false 
            
      };
    }
 
    componentDidMount() {
      setInterval(() => {
        this.setState({
          isLoading: !this.state.isLoading,
        });
      },8000);
    }
 
  componentWillUnmount() {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  }
 render(){
  return (
    <View style={styles.MainContainer}>
 
        <Spinner
          visible={this.state.isLoading}
          // textContent={'Data is Loading...'}
          textStyle={styles.SpinnerText}
        />
 
       <Image
        style={styles.tinyLogo}
        source={require('../assets/Images/image.png')}
      />
          
      </View>
  );
}
}
const styles = StyleSheet.create({
 MainContainer: {
    flex: 1,
    backgroundColor: '#00001F',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  text:{
    textAlign: 'center', 
    fontSize: 22
  },
 
  SpinnerText: {
    color: '#ffff',
  }

});
