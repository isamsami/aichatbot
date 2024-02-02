import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-gray-800">
    <View className="space-y-2">
      <Text className="text-center text-4xl font-serif font-bold text-gray-300">Welcome</Text>
      <Text className="text-center tracking-wider text-gray-300 font-semibold">Powered by AI</Text>
    </View>
    <View className="flex-row justify-center">

    </View>
    <TouchableOpacity className="bg-red-400 mx-5 p-4 rounded-2xl">
      <Text className="text-center font-semibold text-white text-2xl">
        Begin
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}