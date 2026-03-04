import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function InsightsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <Text className="text-2xl font-bold text-gray-900 mt-6 mb-6">Insights</Text>
        <View className="flex-row gap-3 mb-6">
          {[
            { label: 'Current Streak', value: '0', icon: 'flame-outline', color: 'bg-orange-50', textColor: 'text-orange-500' },
            { label: 'Completion Rate', value: '0%', icon: 'trending-up-outline', color: 'bg-green-50', textColor: 'text-green-500' },
          ].map((stat, i) => (
            <View key={i} className={`flex-1 ${stat.color} rounded-2xl p-4`}>
              <Ionicons name={stat.icon as any} size={24} color="#f97316" />
              <Text className={`text-2xl font-bold mt-2 ${stat.textColor}`}>{stat.value}</Text>
              <Text className="text-gray-500 text-xs mt-1">{stat.label}</Text>
            </View>
          ))}
        </View>
        <View className="bg-gray-50 rounded-xl p-8 items-center">
          <Ionicons name="bar-chart-outline" size={48} color="#d1d5db" />
          <Text className="text-gray-400 mt-3 text-center">Complete habits to see your insights and trends.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
