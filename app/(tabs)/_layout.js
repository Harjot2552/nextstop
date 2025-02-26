import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#007bff',
                },
            }}
        >
            <Tabs.Screen
                name="notes"
                options={{
                    title: 'Notes',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'folder-open' : 'folder-open'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'man' : 'man'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="index"
                options={{
                  tabBarItemStyle: { display: "none" },
                }}
            />
        </Tabs>
    );
}
