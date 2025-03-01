import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen name="details" options={{ title: 'Edit your Profile' }} />
    </Stack>
  );
}
