import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={style.container}>
        <StatusBar/>
         <Image source={require("../assets/rpc.jpg")} style={style.mainImage} />
    
    </View>
  )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
      },
      mainImage:{
            width: "100%", 
            height: 600, 
            resizeMode: 'contain',
      }
})
export default HomePage