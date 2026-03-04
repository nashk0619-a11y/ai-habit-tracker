import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TodayScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <Text className="text-2xl font-bold text-gray-900 mt-6 mb-2">Good morning 👋</Text>
        <Text className="text-gray-500 mb-6">Here's your day at a glance</Text>
        <View className="bg-indigo-50 rounded-2xl p-4 mb-4">
          <Text className="text-indigo-700 font-semibold text-sm mb-1">AI Daily Brief</Text>
          <Text className="text-gray-700">Your AI-powered daily summary will appear here.</Text>
        </View>
        <Text className="text-lg font-semibold text-gray-800 mb-3">Today's Habits</Text>
        <View className="bg-gray-50 rounded-xl p-4 mb-4">
          <Text className="text-gray-400 text-center">No habits yet — add some in the Habits tab</Text>
        </View>
        <Text className="text-lg font-semibold text-gray-800 mb-3">Upcoming Tasks</Text>
        <View className="bg-gray-50 rounded-xl p-4">
          <Text className="text-gray-400 text-center">No tasks scheduled — open Planner to add</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
