import { Stack } from 'expo-router';
import { useLocalSearchParams } from "expo-router";

export default function HomeLayout() {
   const { BusNo } = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Buses' }} />
      <Stack.Screen name="details" options={({ route }) => ({ title: `Bus number ${route.params.BusNo}` })}  />
    </Stack>
  );
}
