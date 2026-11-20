import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button } from "heroui-native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-between bg-[#0B0D10] px-6" edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View className="flex-1 justify-center pb-12">
        <Text className="mb-6 text-[34px] font-extrabold leading-10 tracking-tight text-white">
          arthana
          <Text className="text-[#05C486]">.</Text>
        </Text>

        <Text className="mb-5 text-[42px] font-extrabold leading-[48px] tracking-tight text-white">
          Mulai budgeting{"\n"}tanpa drama.
        </Text>

        <Text className="pr-2 text-[16px] font-normal leading-6 text-[#A1A4AD]">
          Kuis 2 menit, langsung keluar metode budgeting yang cocok sama gaya belanja kamu. No
          spreadsheet vibes.
        </Text>
      </View>

      <View className="gap-3 pb-2">
        <Button
          accessibilityLabel="Mulai onboarding budgeting"
          accessibilityRole="button"
          onPress={() => router.push("/quiz")}
          size="lg"
          className="h-14 w-full rounded-full bg-[#05C486] active:opacity-80"
        >
          <Button.Label className="text-[16px] font-semibold text-[#06110D]">
            Lanjut, gas
          </Button.Label>
        </Button>

        <View className="min-h-11 flex-row items-center justify-center gap-1.5">
          <Text className="text-[14px] text-[#A1A4AD]">Udah punya akun?</Text>
          <Pressable
            accessibilityLabel="Masuk ke akun"
            accessibilityRole="button"
            hitSlop={8}
            onPress={() => router.push("/auth")}
          >
            <Text className="text-[14px] font-semibold text-[#05C486]">Masuk</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
