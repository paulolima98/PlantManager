import React, { useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from "@expo-google-fonts/jost";
import { Confirmation } from "./src/pages/Confirmation";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Confirmation />
    </SafeAreaView>
  );
}
