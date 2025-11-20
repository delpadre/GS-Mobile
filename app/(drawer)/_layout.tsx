import { FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#2E8B57',
        drawerInactiveTintColor: '#333',
        drawerStyle: {
          backgroundColor: '#f8f9fa',
        },
      }}>
      
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="about"
        options={{
          title: 'Sobre o App',
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="info-circle" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="ods"
        options={{
          title: 'ODS da ONU',
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="globe" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}