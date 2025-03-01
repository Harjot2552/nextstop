import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#0061FF',
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#fff',
                },
            }}
        >
            <Tabs.Screen
                name="buses"
                options={{
                    title: 'Buses',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'bus' : 'bus'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="tickets"
                options={{
                    title: 'Tickets',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'ticket' : 'ticket'} color={color} size={24} />
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
