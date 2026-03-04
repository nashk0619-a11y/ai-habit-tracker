import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function SignupScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-gray-900 mb-2">Create account</Text>
        <Text className="text-gray-500 mb-8">Start building better habits today</Text>
        <TextInput className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-900" placeholder="Full Name" />
        <TextInput className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-900" placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <TextInput className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-6 text-gray-900" placeholder="Password" secureTextEntry />
        <TouchableOpacity className="bg-indigo-500 rounded-xl py-4 items-center mb-4">
          <Text className="text-white font-semibold text-base">Create Account</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Text className="text-gray-500">Already have an account? </Text>
          <Link href="/(auth)/login"><Text className="text-indigo-500 font-semibold">Sign In</Text></Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
