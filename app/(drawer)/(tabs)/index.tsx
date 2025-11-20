import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const [userName] = useState('João Silva');
  
  // Dados das trilhas em destaque
  const featuredTracks = [
    {
      id: 1,
      title: '🤖 Inteligência Artificial',
      description: 'Domine IA e Machine Learning do zero',
      duration: '8h',
      progress: 65,
      category: 'ai',
      color: '#4F46E5',
      icon: 'brain'
    },
    {
      id: 2,
      title: '🌱 Sustentabilidade ESG',
      description: 'Práticas ESG para negócios modernos',
      duration: '6h',
      progress: 30,
      category: 'sustainability',
      color: '#10B981',
      icon: 'leaf'
    },
    {
      id: 3,
      title: '💼 Soft Skills Digitais',
      description: 'Comunicação e liderança na era digital',
      duration: '5h',
      progress: 0,
      category: 'softskills',
      color: '#F59E0B',
      icon: 'users'
    },
  ];

  // Estatísticas do usuário
  const userStats = [
    { 
      icon: 'play-circle', 
      label: 'Minutos Hoje', 
      value: '45min',
      color: '#4F46E5'
    },
    { 
      icon: 'trophy', 
      label: 'Pontuação', 
      value: '850 pts',
      color: '#10B981'
    },
    { 
      icon: 'certificate', 
      label: 'Certificados', 
      value: '3',
      color: '#F59E0B'
    },
    { 
      icon: 'target', 
      label: 'Meta Semanal', 
      value: '75%',
      color: '#EF4444'
    },
  ];

  // Categorias populares
  const popularCategories = [
    { 
      name: 'Tecnologia', 
      courses: 24, 
      icon: '💻',
      color: '#4F46E5',
      id: 'ai'
    },
    { 
      name: 'Sustentabilidade', 
      courses: 18, 
      icon: '🌱',
      color: '#10B981',
      id: 'sustainability'
    },
    { 
      name: 'Carreira', 
      courses: 32, 
      icon: '🚀',
      color: '#F59E0B',
      id: 'softskills'
    },
    { 
      name: 'Negócios', 
      courses: 28, 
      icon: '📊',
      color: '#8B5CF6',
      id: 'business'
    },
  ];

  // Ações rápidas
  const quickActions = [
    {
      title: 'Continuar Estudando',
      subtitle: 'Liderança 4.0 - 25% concluído',
      icon: 'play-circle',
      color: '#4F46E5',
      action: () => router.push('/learning-tracks')
    },
    {
      title: 'Ver Meu Progresso',
      subtitle: '3 cursos em andamento',
      icon: 'bar-chart',
      color: '#10B981',
      action: () => router.push('/progress')
    },
  ];

  const handleTrackPress = (track: any) => {
    router.push({
      pathname: '/learning-tracks',
      params: { category: track.category }
    });
  };

  const handleCategoryPress = (category: any) => {
    router.push({
      pathname: '/learning-tracks',
      params: { category: category.id }
    });
  };

  const handleQuickAction = (action: any) => {
    action.action();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Hero */}
      <View style={styles.heroSection}>
        <View style={styles.heroContent}>
          <View style={styles.heroText}>
            <Text style={styles.heroGreeting}>Olá, {userName}! 👋</Text>
            <Text style={styles.heroSubtitle}>Pronto para aprender algo novo hoje?</Text>
          </View>
          <TouchableOpacity 
            style={styles.avatarContainer}
            onPress={() => router.push('/profile')}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JS</Text>
            </View>
            <View style={styles.onlineIndicator} />
          </TouchableOpacity>
        </View>
        
        {/* Data e Status */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Segunda-feira, 15 Nov</Text>
          <View style={styles.streakContainer}>
            <FontAwesome name="fire" size={16} color="#F59E0B" />
            <Text style={styles.streakText}>7 dias seguidos</Text>
          </View>
        </View>
      </View>

      {/* Estatísticas em Grid */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Seu Progresso</Text>
        <View style={styles.statsGrid}>
          {userStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={[styles.statIconContainer, { backgroundColor: stat.color }]}>
                <FontAwesome name={stat.icon as any} size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Ações Rápidas */}
      <View style={styles.actionsSection}>
        <Text style={styles.sectionTitle}>Continue de Onde Parou</Text>
        <View style={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.actionCard}
              onPress={() => handleQuickAction(action)}
            >
              <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
                <FontAwesome name={action.icon as any} size={24} color="#FFFFFF" />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Trilhas em Destaque */}
      <View style={styles.featuredSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trilhas em Destaque</Text>
          <TouchableOpacity onPress={() => router.push('/learning-tracks')}>
            <Text style={styles.seeAllText}>Ver todas</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.featuredScroll}
        >
          {featuredTracks.map((track) => (
            <TouchableOpacity 
              key={track.id} 
              style={[styles.featuredCard, { borderLeftColor: track.color }]}
              onPress={() => handleTrackPress(track)}
            >
              <View style={styles.trackHeader}>
                <View style={[styles.trackIcon, { backgroundColor: track.color }]}>
                  <FontAwesome name={track.icon as any} size={20} color="#FFFFFF" />
                </View>
                <View style={styles.trackInfo}>
                  <Text style={styles.trackTitle}>{track.title}</Text>
                  <Text style={styles.trackDescription}>{track.description}</Text>
                </View>
              </View>
              
              {track.progress > 0 ? (
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill,
                        { width: `${track.progress}%`, backgroundColor: track.color }
                      ]} 
                    />
                  </View>
                  <Text style={styles.progressText}>{track.progress}% concluído</Text>
                </View>
              ) : (
                <View style={styles.trackMeta}>
                  <View style={styles.duration}>
                    <FontAwesome name="clock-o" size={12} color="#6B7280" />
                    <Text style={styles.durationText}>{track.duration}</Text>
                  </View>
                  <Text style={styles.startText}>Começar →</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Categorias Populares */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Explore por Categoria</Text>
        <View style={styles.categoriesGrid}>
          {popularCategories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(category)}
            >
              <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                <Text style={styles.categoryEmoji}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>{category.courses} cursos</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Banner ODS */}
      <View style={styles.odsBanner}>
        <View style={styles.odsContent}>
          <Text style={styles.odsTitle}>🎯 Transformando o Futuro</Text>
          <Text style={styles.odsSubtitle}>
            Conectado com os Objetivos de Desenvolvimento Sustentável da ONU
          </Text>
          <View style={styles.odsPills}>
            <View style={styles.odsPill}>
              <Text style={styles.odsPillText}>ODS 4 - Educação</Text>
            </View>
            <View style={styles.odsPill}>
              <Text style={styles.odsPillText}>ODS 8 - Trabalho</Text>
            </View>
            <View style={styles.odsPill}>
              <Text style={styles.odsPillText}>ODS 9 - Inovação</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  heroSection: {
    backgroundColor: '#2E8B57',
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  heroText: {
    flex: 1,
  },
  heroGreeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#E8F5E8',
    opacity: 0.9,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#E8F5E8',
    opacity: 0.8,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  streakText: {
    fontSize: 12,
    color: '#FEF3C7',
    fontWeight: '600',
    marginLeft: 4,
  },
  statsSection: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  actionsSection: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  actionsGrid: {
    gap: 12,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  featuredSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: '600',
  },
  featuredScroll: {
    marginHorizontal: -4,
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 4,
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
  },
  trackHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  trackIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  trackDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'right',
  },
  trackMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  startText: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: '600',
  },
  categoriesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'center',
  },
  categoryCount: {
    fontSize: 12,
    color: '#6B7280',
  },
  odsBanner: {
    backgroundColor: '#1F2937',
    margin: 24,
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  odsContent: {
    alignItems: 'center',
  },
  odsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  odsSubtitle: {
    fontSize: 14,
    color: '#D1D5DB',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  odsPills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  odsPill: {
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  odsPillText: {
    fontSize: 12,
    color: '#E5E7EB',
    fontWeight: '500',
  },
});