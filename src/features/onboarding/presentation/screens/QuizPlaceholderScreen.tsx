import { Stack } from "expo-router";
import { Text, View } from "react-native";

export function QuizPlaceholderScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#0B0D10] px-6">
      <Stack.Screen options={{ title: "Arthana Quiz" }} />
      <Text className="text-center text-[22px] font-bold text-white">
        Quiz budgeting segera hadir.
      </Text>
      <Text className="mt-3 text-center text-[16px] leading-6 text-[#A1A4AD]">
        Alur ini akan membantu memilih metode budgeting yang paling cocok buat kamu.
      </Text>
    </View>
  );
}
