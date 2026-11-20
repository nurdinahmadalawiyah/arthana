import { useEffect } from "react";
import { Stack } from "expo-router";
import { HeroUINativeProvider } from "heroui-native";
import { Uniwind } from 'uniwind';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";
import { getDatabase } from "@/core/storage/database";

export default function RootLayout() {
  useEffect(() => {
    Uniwind.setTheme('dark');
    getDatabase();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
