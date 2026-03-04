import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HabitsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <View className="flex-row items-center justify-between mt-6 mb-6">
          <Text className="text-2xl font-bold text-gray-900">My Habits</Text>
          <TouchableOpacity className="bg-indigo-500 rounded-full w-10 h-10 items-center justify-center">
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="bg-gray-50 rounded-xl p-8 items-center">
          <Ionicons name="checkmark-circle-outline" size={48} color="#d1d5db" />
          <Text className="text-gray-400 mt-3 text-center">No habits yet. Tap + to create your first habit.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
