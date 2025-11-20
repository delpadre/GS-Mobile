import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

export default function LearningTracksScreen() {
  const params = useLocalSearchParams();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([1, 3]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const categories = [
    { id: 'all', name: '🎯 Todas', icon: 'globe' },
    { id: 'ai', name: '🤖 IA & Tech', icon: 'laptop' },
    { id: 'sustainability', name: '🌱 Sustentabilidade', icon: 'leaf' },
    { id: 'softskills', name: '💼 Soft Skills', icon: 'users' },
    { id: 'business', name: '📊 Negócios', icon: 'bar-chart' },
  ];

  const learningTracks = [
    {
      id: 1,
      title: 'Fundamentos de IA',
      category: 'ai',
      duration: '8 horas',
      level: 'Iniciante',
      students: '2.4K',
      rating: '4.8',
      description: 'Introdução aos conceitos de Inteligência Artificial e Machine Learning',
      image: '🧠'
    },
    {
      id: 2,
      title: 'ESG na Prática',
      category: 'sustainability',
      duration: '6 horas',
      level: 'Intermediário',
      students: '1.8K',
      rating: '4.7',
      description: 'Aplicação de critérios ESG em organizações modernas',
      image: '🌍'
    },
    {
      id: 3,
      title: 'Liderança 4.0',
      category: 'softskills',
      duration: '10 horas',
      level: 'Avançado',
      students: '3.1K',
      rating: '4.9',
      description: 'Habilidades de liderança para o mundo digital e remoto',
      image: '👑'
    },
    {
      id: 4,
      title: 'Análise de Dados',
      category: 'ai',
      duration: '12 horas',
      level: 'Intermediário',
      students: '2.2K',
      rating: '4.6',
      description: 'Fundamentos de análise de dados com Python e Pandas',
      image: '📈'
    },
    {
      id: 5,
      title: 'Gestão Sustentável',
      category: 'sustainability',
      duration: '5 horas',
      level: 'Iniciante',
      students: '1.5K',
      rating: '4.5',
      description: 'Implementação de práticas sustentáveis em empresas',
      image: '♻️'
    },
    {
      id: 6,
      title: 'Comunicação Eficaz',
      category: 'softskills',
      duration: '7 horas',
      level: 'Intermediário',
      students: '2.8K',
      rating: '4.7',
      description: 'Técnicas de comunicação para o ambiente profissional',
      image: '💬'
    },
    {
      id: 7,
      title: 'Gestão de Projetos Ágeis',
      category: 'business',
      duration: '9 horas',
      level: 'Intermediário',
      students: '2.1K',
      rating: '4.8',
      description: 'Metodologias ágeis para gestão de projetos modernos',
      image: '⚡'
    },
    {
      id: 8,
      title: 'Marketing Digital',
      category: 'business',
      duration: '6 horas',
      level: 'Iniciante',
      students: '3.5K',
      rating: '4.6',
      description: 'Estratégias de marketing para o ambiente digital',
      image: '📱'
    },
  ];

  useEffect(() => {
    if (isInitialLoad && params.category) {
      setSelectedCategory(params.category as string);
      setIsInitialLoad(false);
    }
  }, [params, isInitialLoad]);

  const handleStartCourse = (courseId: number, courseTitle: string) => {
    if (enrolledCourses.includes(courseId)) {
      Alert.alert(
        '🎓 Continuar Curso', 
        `Você já está matriculado em "${courseTitle}". Deseja continuar de onde parou?`,
        [
          { text: 'Depois', style: 'cancel' },
          { text: 'Continuar', onPress: () => {
            Alert.alert('🚀 Excelente!', `Continuando sua jornada em: ${courseTitle}`);
          }}
        ]
      );
    } else {
      Alert.alert(
        '✨ Matricular no Curso',
        `Deseja se matricular no curso "${courseTitle}"?`,
        [
          { text: 'Cancelar', style: 'cancel' },
          { 
            text: 'Matricular Agora', 
            onPress: () => {
              setEnrolledCourses([...enrolledCourses, courseId]);
              Alert.alert(
                '🎉 Parabéns!', 
                `Você foi matriculado em "${courseTitle}"!\n\nBoa jornada de aprendizado! 📚`
              );
            }
          }
        ]
      );
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsInitialLoad(false);
  };

  const filteredTracks = learningTracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(search.toLowerCase()) ||
                         track.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || track.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedCategoryName = categories.find(cat => cat.id === selectedCategory)?.name;

  return (
    <View style={styles.container}>
      {/* Header Gradiente */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>
              {selectedCategory === 'all' ? '🎯 Todas as Trilhas' : selectedCategoryName}
            </Text>
            <Text style={styles.headerSubtitle}>
              {filteredTracks.length} curso{filteredTracks.length !== 1 ? 's' : ''} disponível{filteredTracks.length !== 1 ? 's' : ''}
            </Text>
          </View>
          <View style={styles.headerStats}>
            <View style={styles.statPill}>
              <Text style={styles.statNumber}>{learningTracks.length}</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Barra de Pesquisa Estilizada */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar trilhas..."
            placeholderTextColor="#9CA3AF"
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <FontAwesome name="times-circle" size={18} color="#6B7280" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Filtros em Cards */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Filtrar por Categoria</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryCard,
                selectedCategory === category.id && styles.categoryCardActive
              ]}
              onPress={() => handleCategorySelect(category.id)}
            >
              <Text style={styles.categoryIcon}>{category.name.split(' ')[0]}</Text>
              <Text style={[
                styles.categoryName,
                selectedCategory === category.id && styles.categoryNameActive
              ]}>
                {category.name.split(' ').slice(1).join(' ')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Indicador de Filtro Ativo */}
      {selectedCategory !== 'all' && (
        <View style={styles.activeFilter}>
          <View style={styles.filterInfo}>
            <FontAwesome name="filter" size={16} color="#2E8B57" />
            <Text style={styles.activeFilterText}>
              Filtro ativo: {selectedCategoryName}
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.clearFilterButton}
            onPress={() => handleCategorySelect('all')}
          >
            <Text style={styles.clearFilterText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Lista de Trilhas Moderna */}
      <ScrollView style={styles.tracksContainer} showsVerticalScrollIndicator={false}>
        {filteredTracks.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateEmoji}>🔍</Text>
            <Text style={styles.emptyStateTitle}>Nenhuma trilha encontrada</Text>
            <Text style={styles.emptyStateSubtitle}>
              Tente alterar os filtros ou termos de busca
            </Text>
            <TouchableOpacity 
              style={styles.emptyStateButton}
              onPress={() => {
                setSearch('');
                setSelectedCategory('all');
              }}
            >
              <Text style={styles.emptyStateButtonText}>Limpar Filtros</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.tracksGrid}>
            {filteredTracks.map(track => {
              const isEnrolled = enrolledCourses.includes(track.id);
              
              return (
                <View key={track.id} style={styles.trackCard}>
                  {/* Header do Card */}
                  <View style={styles.cardHeader}>
                    <View style={styles.trackImage}>
                      <Text style={styles.trackEmoji}>{track.image}</Text>
                    </View>
                    <View style={styles.trackInfo}>
                      <Text style={styles.trackTitle}>{track.title}</Text>
                      <View style={styles.ratingContainer}>
                        <FontAwesome name="star" size={12} color="#FFD700" />
                        <Text style={styles.ratingText}>{track.rating}</Text>
                        <Text style={styles.studentsText}>({track.students})</Text>
                      </View>
                    </View>
                  </View>

                  {/* Descrição */}
                  <Text style={styles.trackDescription}>{track.description}</Text>

                  {/* Meta Informações */}
                  <View style={styles.metaContainer}>
                    <View style={styles.metaItem}>
                      <FontAwesome name="clock-o" size={12} color="#6B7280" />
                      <Text style={styles.metaText}>{track.duration}</Text>
                    </View>
                    <View style={[
                      styles.levelBadge,
                      track.level === 'Iniciante' && styles.levelBeginner,
                      track.level === 'Intermediário' && styles.levelIntermediate,
                      track.level === 'Avançado' && styles.levelAdvanced
                    ]}>
                      <Text style={styles.levelText}>{track.level}</Text>
                    </View>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryBadgeText}>
                        {categories.find(cat => cat.id === track.category)?.name.split(' ')[1]}
                      </Text>
                    </View>
                  </View>

                  {/* Botão de Ação */}
                  <TouchableOpacity 
                    style={[
                      styles.actionButton,
                      isEnrolled && styles.continueButton
                    ]}
                    onPress={() => handleStartCourse(track.id, track.title)}
                  >
                    <FontAwesome 
                      name={isEnrolled ? "play-circle" : "rocket"} 
                      size={16} 
                      color="#FFFFFF" 
                    />
                    <Text style={styles.actionButtonText}>
                      {isEnrolled ? 'Continuar' : 'Começar Agora'}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#2E8B57',
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E8F5E8',
    opacity: 0.9,
  },
  headerStats: {
    alignItems: 'flex-end',
  },
  statPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 10,
    color: '#E8F5E8',
    opacity: 0.8,
  },
  searchSection: {
    paddingHorizontal: 20,
    marginTop: -20,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    height: 56,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  categoriesSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  categoriesScroll: {
    paddingRight: 20,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryCardActive: {
    backgroundColor: '#2E8B57',
    borderColor: '#2E8B57',
    shadowColor: '#2E8B57',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
  },
  categoryNameActive: {
    color: '#FFFFFF',
  },
  activeFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2E8B57',
  },
  filterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeFilterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E8B57',
    marginLeft: 8,
  },
  clearFilterButton: {
    backgroundColor: '#2E8B57',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  clearFilterText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  tracksContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tracksGrid: {
    gap: 16,
    paddingBottom: 20,
  },
  trackCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  trackEmoji: {
    fontSize: 24,
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
    lineHeight: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginLeft: 4,
    marginRight: 8,
  },
  studentsText: {
    fontSize: 12,
    color: '#6B7280',
  },
  trackDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  levelBeginner: {
    backgroundColor: '#EFF6FF',
  },
  levelIntermediate: {
    backgroundColor: '#FEF3C7',
  },
  levelAdvanced: {
    backgroundColor: '#FCE7F3',
  },
  levelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
  },
  categoryBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E8B57',
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#2E8B57',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    shadowColor: '#4CAF50',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 40,
  },
  emptyStateEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  emptyStateButton: {
    backgroundColor: '#2E8B57',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  emptyStateButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});