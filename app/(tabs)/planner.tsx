import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function PlannerScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <View className="flex-row items-center justify-between mt-6 mb-6">
          <Text className="text-2xl font-bold text-gray-900">Planner</Text>
          <TouchableOpacity className="bg-indigo-500 rounded-full w-10 h-10 items-center justify-center">
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between mb-6">
          {['M','T','W','T','F','S','S'].map((day, i) => (
            <View key={i} className={`w-10 h-10 rounded-full items-center justify-center ${i === 2 ? 'bg-indigo-500' : 'bg-gray-100'}`}>
              <Text className={`text-sm font-medium ${i === 2 ? 'text-white' : 'text-gray-600'}`}>{day}</Text>
            </View>
          ))}
        </View>
        <View className="bg-gray-50 rounded-xl p-8 items-center">
          <Ionicons name="calendar-outline" size={48} color="#d1d5db" />
          <Text className="text-gray-400 mt-3 text-center">No tasks for today. Tap + to add a task.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
