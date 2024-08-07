import { ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import 'react-native-reanimated';

import '~/assets/global.css';
import { DarkTheme, LightTheme } from '~/lib/navTheme';
import { useColorScheme } from '~/lib/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.documentElement.classList.add('bg-background');
    }

    setIsLoaded(true);
    SplashScreen.hideAsync();
  }, []);

  return !isLoaded ? null : (
    <ThemeProvider value={isDarkColorScheme ? DarkTheme : LightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
