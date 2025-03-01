import { Stack } from 'expo-router';

export default function AboutLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Tickets' }} />
      <Stack.Screen name="settings" options={{ title: 'Your Pass' }} />
    </Stack>
  );
}
