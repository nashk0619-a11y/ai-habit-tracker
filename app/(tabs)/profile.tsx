import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <Text className="text-2xl font-bold text-gray-900 mt-6 mb-6">Profile</Text>
        <View className="items-center mb-8">
          <View className="w-20 h-20 rounded-full bg-indigo-100 items-center justify-center mb-3">
            <Ionicons name="person" size={40} color="#6366f1" />
          </View>
          <Text className="text-lg font-semibold text-gray-800">Your Name</Text>
          <Text className="text-gray-400 text-sm">your@email.com</Text>
        </View>
        {[
          { icon: 'notifications-outline', label: 'Notifications' },
          { icon: 'moon-outline', label: 'Appearance' },
          { icon: 'shield-checkmark-outline', label: 'Privacy' },
          { icon: 'help-circle-outline', label: 'Help & Support' },
          { icon: 'log-out-outline', label: 'Sign Out' },
        ].map((item, i) => (
          <TouchableOpacity key={i} className="flex-row items-center py-4 border-b border-gray-100">
            <Ionicons name={item.icon as any} size={22} color="#6b7280" />
            <Text className="ml-3 text-gray-700 flex-1">{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
