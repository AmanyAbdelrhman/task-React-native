import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';
export default function App() {
  return (
    
    <SafeAreaView >
      <View style = {styles.containerStyle}>
      <Text style= {styles.text}>Here are some boxes with color names</Text>
  
<Box title = " Cyan:#2aa198" bgColor="#2aa198" />
<Box title = " Blue:#268bd2" bgColor="#268bd2" />
<Box title = " Magenta:#d33682" bgColor="#d33682" />
<Box title = " Orange:#cb4b16" bgColor="#cb4b16" />
<Box title={Platform.OS ==='ios'? "I am ios" : "I am Android"} bgColor = {"black"}  />
   </View>
    </SafeAreaView>
  );
}

const styles  = StyleSheet.create({
 
  containerStyle:{
marginTop:45,
paddingHorizontal:11,
  },
text:{
  fontWeight:'bold',
  fontSize:20,
  marginBottom:15,


}


})