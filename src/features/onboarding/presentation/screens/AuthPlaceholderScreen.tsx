import { Stack } from "expo-router";
import { Text, View } from "react-native";

export function AuthPlaceholderScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#0B0D10] px-6">
      <Stack.Screen options={{ title: "Masuk" }} />
      <Text className="text-center text-[22px] font-bold text-white">Login segera hadir.</Text>
      <Text className="mt-3 text-center text-[16px] leading-6 text-[#A1A4AD]">
        Simpan progress budgeting kamu dan lanjutkan kapan saja.
      </Text>
    </View>
  );
}
