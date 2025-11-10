import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { StackScreen } from "react-native-screens";
import { ClerkProvider, SignedIn, SignedOut, useOAuth } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import { tokenCache } from "@clerk/clerk-expo/dist/cache";

const clerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_bWFqb3ItYXNwLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ";

export default function RootLayout() {

  const [loaded, error] = useFonts({
    's-bold': require('./../assets/fonts/Saira-Bold.ttf'),
    's-medium': require('./../assets/fonts/Saira-Medium.ttf'),
    's': require('./../assets/fonts/Saira-Regular.ttf'),
    's-bolditalic': require('./../assets/fonts/Saira-SemiBoldItalic.ttf'),
  });
  return (
    
        <ClerkProvider 
        publishableKey={clerkKey}
        tokenCache={tokenCache({
        getToken: (key) => SecureStore.getItemAsync(key),
        saveToken: (key, value) => SecureStore.setItemAsync(key, value),
      })}
    >

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
      <Stack.Screen name="Setting" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="SettingApp" 
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
      </ClerkProvider>
  );
}

