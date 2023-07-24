import React, { useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from "@expo-google-fonts/jost";
import * as Notifications from 'expo-notifications';
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import { PlantProps } from "./src/libs/storage";

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

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(async notification => {
      const data = notification.request.content.data.plant as PlantProps;
    });

    return () => subscription.remove();

    // async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync(); // Remove todas notificações
      
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('Notificações Agendadas ---------------------');
    //   console.log(data);
    // }

    // notifications();
  }, []);

  if (!fontsLoaded) {
    return null;
    // return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Routes />
    </SafeAreaView>
  );
}
