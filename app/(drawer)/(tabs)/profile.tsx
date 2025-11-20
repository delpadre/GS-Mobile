import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    area: 'Tecnologia',
    level: 'Intermediário'
  });

  const handleSave = () => {
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    setIsEditing(false);
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Deseja realmente sair da aplicação?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sair', 
          style: 'destructive',
          onPress: () => router.replace('/')
        }
      ]
    );
  };

  const handleAvatarEdit = () => {
    Alert.alert('Foto de Perfil', 'Alterar foto de perfil', [
      { text: 'Tirar Foto', onPress: () => console.log('Tirar foto') },
      { text: 'Escolher da Galeria', onPress: () => console.log('Escolher da galeria') },
      { text: 'Cancelar', style: 'cancel' }
    ]);
  };

  const handleOptionPress = (optionTitle: string) => {
    Alert.alert(optionTitle, `Funcionalidade: ${optionTitle}\n\nEsta funcionalidade será implementada em breve!`);
  };

  const handleStatPress = (stat: string, value: string) => {
    Alert.alert(stat, `Você tem ${value} ${stat.toLowerCase()}`);
  };

  const profileOptions = [
    {
      icon: 'user',
      title: 'Dados Pessoais',
      description: 'Gerencie suas informações',
      onPress: () => setIsEditing(true)
    },
    {
      icon: 'bell',
      title: 'Notificações',
      description: 'Configure alertas e notificações',
      onPress: () => setNotifications(!notifications)
    },
    {
      icon: 'adjust',
      title: 'Modo Escuro',
      description: 'Alternar entre tema claro e escuro',
      onPress: () => {
        setDarkMode(!darkMode);
        Alert.alert('Modo Escuro', darkMode ? 'Modo escuro desativado' : 'Modo escuro ativado');
      }
    },
    {
      icon: 'lock',
      title: 'Privacidade',
      description: 'Controle sua privacidade',
      onPress: () => handleOptionPress('Privacidade')
    },
    {
      icon: 'question',
      title: 'Ajuda & Suporte',
      description: 'Tire suas dúvidas',
      onPress: () => handleOptionPress('Ajuda & Suporte')
    },
    {
      icon: 'info',
      title: 'Sobre o App',
      description: 'Versão e informações',
      onPress: () => handleOptionPress('Sobre o App')
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity style={styles.avatarContainer} onPress={handleAvatarEdit}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.avatar}
          />
          <View style={styles.editAvatarButton}>
            <FontAwesome name="camera" size={16} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        
        {isEditing ? (
          <View style={styles.editForm}>
            <TextInput
              style={styles.input}
              value={userData.name}
              onChangeText={(text) => setUserData({...userData, name: text})}
              placeholder="Nome completo"
            />
            <TextInput
              style={styles.input}
              value={userData.email}
              onChangeText={(text) => setUserData({...userData, email: text})}
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={userData.phone}
              onChangeText={(text) => setUserData({...userData, phone: text})}
              placeholder="Telefone"
              keyboardType="phone-pad"
            />
            
            <View style={styles.editButtons}>
              <TouchableOpacity 
                style={[styles.button, styles.cancelButton]} 
                onPress={() => setIsEditing(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, styles.saveButton]} 
                onPress={handleSave}
              >
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
            <Text style={styles.userDetails}>{userData.area} • {userData.level}</Text>
            
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => setIsEditing(true)}
            >
              <FontAwesome name="pencil" size={16} color="#2E8B57" />
              <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.quickStats}>
        <TouchableOpacity 
          style={styles.stat}
          onPress={() => handleStatPress('Cursos', '12')}
        >
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Cursos</Text>
        </TouchableOpacity>
        <View style={styles.statDivider} />
        <TouchableOpacity 
          style={styles.stat}
          onPress={() => handleStatPress('Progresso', '75%')}
        >
          <Text style={styles.statNumber}>75%</Text>
          <Text style={styles.statLabel}>Progresso</Text>
        </TouchableOpacity>
        <View style={styles.statDivider} />
        <TouchableOpacity 
          style={styles.stat}
          onPress={() => handleStatPress('Certificados', '3')}
        >
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Certificados</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        
        <TouchableOpacity style={styles.optionCard} onPress={() => setNotifications(!notifications)}>
          <View style={styles.optionInfo}>
            <FontAwesome name="bell" size={20} color="#2E8B57" />
            <View style={styles.optionTexts}>
              <Text style={styles.optionTitle}>Notificações</Text>
              <Text style={styles.optionDescription}>Receba alertas de novos cursos</Text>
            </View>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#e0e0e0', true: '#2E8B57' }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard} onPress={() => {
          setDarkMode(!darkMode);
          Alert.alert('Modo Escuro', darkMode ? 'Modo escuro desativado' : 'Modo escuro ativado');
        }}>
          <View style={styles.optionInfo}>
            <FontAwesome name="adjust" size={20} color="#2E8B57" />
            <View style={styles.optionTexts}>
              <Text style={styles.optionTitle}>Modo Escuro</Text>
              <Text style={styles.optionDescription}>Interface em tema escuro</Text>
            </View>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#e0e0e0', true: '#2E8B57' }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mais</Text>
        
        {profileOptions.slice(2).map((option, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.optionCard} 
            onPress={option.onPress}
          >
            <View style={styles.optionInfo}>
              <FontAwesome name={option.icon as any} size={20} color="#2E8B57" />
              <View style={styles.optionTexts}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={20} color="#FF4444" />
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.version}>SkillUpPlus 2030+ v1.0.0</Text>
        <Text style={styles.ods}>Conectado com os ODS 4, 8, 9, 10</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profileHeader: {
    backgroundColor: '#2E8B57',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2E8B57',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 5,
  },
  userDetails: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 15,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#2E8B57',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  editForm: {
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
  },
  saveButton: {
    backgroundColor: '#FFFFFF',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  saveButtonText: {
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  quickStats: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
  },
  section: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionTexts: {
    marginLeft: 12,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  optionDescription: {
    fontSize: 12,
    color: '#666',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: '#FF4444',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  version: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  ods: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
  },
});