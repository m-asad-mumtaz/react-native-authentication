import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Navigation from './src/navigation/index';
import Logo from "./assets/images/RP-Logo-Horizontal.png";


export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logoContainer}>
        <StatusBar />
        <Image source={Logo}
          style={[styles.logo]}
          resizeMode="contain" />
      </View>
      {/* <View style={styles.navigationContainer}>
      </View> */}
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#4c34',
  },
  logoContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c34ec',
    paddingTop: 10,
  },
  logo: {
    maxWidth: 300,
  },
  navigationContainer: {
    flex: 4,
    backgroundColor: '#4c3444',
  },
});
