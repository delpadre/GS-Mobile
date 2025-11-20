import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function ProgressScreen() {
  const router = useRouter();

  const userStats = {
    completedCourses: 3,
    totalHours: 12,
    currentStreak: 7,
    certificates: 2,
  };

  const recentActivities = [
    {
      id: 1,
      course: 'Fundamentos de IA',
      action: 'Aula concluída',
      time: '2 horas atrás',
      points: 50
    },
    {
      id: 2,
      course: 'Liderança 4.0',
      action: 'Quiz finalizado',
      time: '1 dia atrás',
      points: 30
    },
    {
      id: 3,
      course: 'ESG na Prática',
      action: 'Curso iniciado',
      time: '2 dias atrás',
      points: 10
    },
  ];

  const skillsProgress = [
    { skill: 'Inteligência Artificial', progress: 75 },
    { skill: 'Liderança', progress: 60 },
    { skill: 'Sustentabilidade', progress: 25 },
    { skill: 'Análise de Dados', progress: 10 },
  ];

  const handleStatPress = (stat: string, value: number) => {
    Alert.alert(stat, `Você tem ${value} ${stat.toLowerCase()}`);
  };

  const handleActivityPress = (activity: any) => {
    Alert.alert('Atividade', `${activity.action} em ${activity.course}`);
  };

  const handleSkillPress = (skill: string, progress: number) => {
    Alert.alert(
      skill, 
      `Seu progresso: ${progress}%\n\nContinue estudando para melhorar esta habilidade!`
    );
  };

  const handleGoalPress = (goal: string, completed: boolean) => {
    Alert.alert(
      'Meta da Semana',
      `${goal} - ${completed ? '✅ Concluída' : '⏳ Em andamento'}`,
      completed ? [] : [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Ver Cursos', onPress: () => router.push('/learning-tracks') }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Progresso</Text>
        <Text style={styles.subtitle}>Acompanhe sua jornada de aprendizado</Text>
      </View>

      <View style={styles.statsContainer}>
        <TouchableOpacity 
          style={styles.statCard}
          onPress={() => handleStatPress('Cursos Concluídos', userStats.completedCourses)}
        >
          <FontAwesome name="check" size={24} color="#2E8B57" />
          <Text style={styles.statNumber}>{userStats.completedCourses}</Text>
          <Text style={styles.statLabel}>Cursos Concluídos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.statCard}
          onPress={() => handleStatPress('Horas de Estudo', userStats.totalHours)}
        >
          <FontAwesome name="clock-o" size={24} color="#2E8B57" />
          <Text style={styles.statNumber}>{userStats.totalHours}h</Text>
          <Text style={styles.statLabel}>Horas de Estudo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.statCard}
          onPress={() => handleStatPress('Dias de Sequência', userStats.currentStreak)}
        >
          <FontAwesome name="star" size={24} color="#2E8B57" />
          <Text style={styles.statNumber}>{userStats.currentStreak}</Text>
          <Text style={styles.statLabel}>Dias Sequência</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.statCard}
          onPress={() => handleStatPress('Certificados', userStats.certificates)}
        >
          <FontAwesome name="file-text" size={24} color="#2E8B57" />
          <Text style={styles.statNumber}>{userStats.certificates}</Text>
          <Text style={styles.statLabel}>Certificados</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progresso por Habilidade</Text>
        {skillsProgress.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.skillItem}
            onPress={() => handleSkillPress(item.skill, item.progress)}
          >
            <View style={styles.skillHeader}>
              <Text style={styles.skillName}>{item.skill}</Text>
              <Text style={styles.skillPercent}>{item.progress}%</Text>
            </View>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill,
                  { width: `${item.progress}%` }
                ]} 
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Atividades Recentes</Text>
        {recentActivities.map(activity => (
          <TouchableOpacity 
            key={activity.id} 
            style={styles.activityCard}
            onPress={() => handleActivityPress(activity)}
          >
            <View style={styles.activityHeader}>
              <Text style={styles.activityCourse}>{activity.course}</Text>
              <Text style={styles.activityPoints}>+{activity.points} pts</Text>
            </View>
            <Text style={styles.activityAction}>{activity.action}</Text>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Metas da Semana</Text>
        <View style={styles.goalsCard}>
          <TouchableOpacity 
            style={styles.goalItem}
            onPress={() => handleGoalPress('Completar 2 cursos', false)}
          >
            <FontAwesome name="book" size={20} color="#2E8B57" />
            <Text style={styles.goalText}>Completar 2 cursos</Text>
            <View style={[styles.goalStatus, styles.goalIncomplete]} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.goalItem}
            onPress={() => handleGoalPress('Estudar 5 horas', true)}
          >
            <FontAwesome name="clock-o" size={20} color="#2E8B57" />
            <Text style={styles.goalText}>Estudar 5 horas</Text>
            <View style={[styles.goalStatus, styles.goalComplete]} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.goalItem}
            onPress={() => handleGoalPress('Ganhar 100 pontos', false)}
          >
            <FontAwesome name="trophy" size={20} color="#2E8B57" />
            <Text style={styles.goalText}>Ganhar 100 pontos</Text>
            <View style={[styles.goalStatus, styles.goalIncomplete]} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2E8B57',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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
  skillItem: {
    marginBottom: 15,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  skillPercent: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2E8B57',
    borderRadius: 4,
  },
  activityCard: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  activityCourse: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  activityPoints: {
    fontSize: 12,
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  activityAction: {
    fontSize: 12,
    color: '#666',
    marginBottom: 3,
  },
  activityTime: {
    fontSize: 11,
    color: '#999',
  },
  goalsCard: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  goalText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  goalStatus: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  goalComplete: {
    backgroundColor: '#4CAF50',
  },
  goalIncomplete: {
    backgroundColor: '#e0e0e0',
  },
});