import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-indigo-500 px-6">
      <View className="flex-1 justify-center items-center">
        <Text className="text-5xl mb-4">🧠</Text>
        <Text className="text-3xl font-bold text-white text-center mb-3">AI Habit Tracker</Text>
        <Text className="text-indigo-100 text-center text-base mb-12">Build better habits with AI-powered insights and daily planning</Text>
        <TouchableOpacity className="bg-white rounded-xl py-4 px-8 w-full items-center mb-4" onPress={() => router.replace('/(auth)/signup')}>
          <Text className="text-indigo-500 font-bold text-base">Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
          <Text className="text-indigo-100">Already have an account? Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
