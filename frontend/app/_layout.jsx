import { Stack } from 'expo-router/stack';
import Page from './exercise/[ex]';
import GlobalProvider from './context/GlobalProvider';

export default function AppLayout() {
  return (
   
    <GlobalProvider>
      <Stack screenOptions={{
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: 'black'
      },

      headerTitleStyle: {
        color: 'white'
      },
      headerBackVisible: true,
   
      
    }}>
      <Stack.Screen name='index' options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
      
      
    </Stack>

    </GlobalProvider>
    
  );

}
