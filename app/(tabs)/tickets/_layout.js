import { Stack } from 'expo-router';

export default function AboutLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="index" options={{ title: 'Tickets' }} />
      <Stack.Screen name="settings" options={{ title: 'Your Pass' }} />
    </Stack>
  );
}
