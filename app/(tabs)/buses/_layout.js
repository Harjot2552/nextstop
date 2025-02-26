import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Buses' }} />
      <Stack.Screen name="details" options={{ title: 'Buses Individual' }} />
    </Stack>
  );
}
