import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 flex justify-around bg-gray-800">
    <View className="space-y-2">
      <Text style={{fontSize: wp(10)}} className="text-center text-4xl 
      font-serif font-bold text-gray-300">
        Welcome
      </Text>
      <Text style={{fontSize: wp(4)}} className="text-center tracking-wider 
      text-gray-300 font-semibold">
        Powered by AI
      </Text>
    </View>
    <View className="flex-row justify-center">
      <Image src={require('../../assets/icon.png')}
      className="w-70 h-72" />
    </View>
    <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-red-400 mx-5 p-4 rounded-2xl">
      <Text style={{fontSize: wp(6)}} className="text-center font-semibold text-white text-2xl">
        Begin
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}