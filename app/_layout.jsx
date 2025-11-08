import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { StackScreen } from "react-native-screens";

export default function RootLayout() {

  const [loaded, error] = useFonts({
    's-bold': require('./../assets/fonts/Saira-Bold.ttf'),
    's-medium': require('./../assets/fonts/Saira-Medium.ttf'),
    's': require('./../assets/fonts/Saira-Regular.ttf'),
    's-bolditalic': require('./../assets/fonts/Saira-SemiBoldItalic.ttf'),
  });
  return (
    <Stack>
      <Stack.Screen name="Landing" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Trainer" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="(tabs)" 
        options={{
          headerShown:false
        }}
      />
    </Stack>
  );
}

