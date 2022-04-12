import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';

export default function App() {
  return (
    <>

    
    <View style={styles.container1}>
      <Image source={require("./12.png")}/>
      <StatusBar style="auto" />
    </View>


    

    <View style={styles.container2}>
    <Text style={{marginBottom:70 ,color:'#2F80ED', fontWeight:"bold", fontSize:35}}>Login</Text>
    <Text>Email</Text>
    <TextInput style={{ width:"70%",placeholderTextColor:"blue", borderWidth:1  ,textAlign:"center" , borderRadius:15  }} placeholder=""  ></TextInput>
    <Text></Text>
    <Text>Password</Text>
    <TextInput style={{ width:"70%",placeholderTextColor:"blue", borderWidth:1  ,textAlign:"center" , borderRadius:15  }} placeholder=""  ></TextInput>
    <Text style={{alignContent:'flex-end', flexDirection:'row'}}>Forgot Password?</Text>
    
    </View>
   
    <View style={styles.container3}>
    
    <Image source={require("./13.png")
  }/>
    
      <StatusBar style="auto" />
    </View>



    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F80ED',
    
  },
  container1: {
    
    backgroundColor: '#97BFF6',
    
  },
  container2: {
    paddingLeft:20,
    flex:1,
    

    
  },
  container3: {
    position:'relative',
    backgroundColor:'red',
    backgroundColor: '#2F80ED',
   
  },
});
