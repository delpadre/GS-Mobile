# FIAP - Faculdade de Informação e Administração Paulista
**Global Solution 2024 - Desenvolvimento Mobile**

---
## Dados do Estudante
- **Nome:** Rafael Jorge Del Padre
- **RM:** 552765
- **Curso:** Sistemas de Informação
- **Disciplina:** Desenvolvimento Mobile
- **Professor:** [Nome do Professor]

---
## Índice
1. Introdução Teórica
2. Caso de Uso - SkillUpPlus 2030+
3. Estrutura de Navegação Híbrida
4. Telas do Aplicativo
5. Componentes Utilizados
6. Estrutura de Diretórios
7. Códigos-Fonte Principais
8. Justificativas de Design
9. Conclusão

---

## 1. Introdução Teórica

O avanço das tecnologias digitais — especialmente inteligência artificial, automação e análise de dados — está redefinindo o conceito de trabalho e as competências necessárias para o profissional do futuro. De acordo com a OIT e ONU, milhões de empregos sofrerão transformações até 2030, exigindo requalificação contínua (reskilling) e aprendizado adaptativo.

Nesse contexto, o uso de aplicativos móveis emerge como ferramenta poderosa para democratizar o acesso à educação, possibilitando o desenvolvimento de habilidades digitais em qualquer lugar. O React Native, framework multiplataforma, permite criar aplicativos modernos e responsivos, facilitando a entrega de experiências de aprendizado personalizadas e acessíveis.

## 2. Caso de Uso - SkillUpPlus 2030+

### 2.1 Descrição do Aplicativo
O SkillUpPlus 2030+ é uma plataforma móvel desenvolvida para apoiar trabalhadores e estudantes na requalificação profissional frente às transformações do mercado. Inspirado pelos Objetivos de Desenvolvimento Sustentável da ONU, o aplicativo conecta usuários a trilhas de aprendizado curtas, autoexplicativas e personalizadas.

### 2.2 Objetivos Principais
- Realizar autoavaliação de competências
- Acompanhar trilhas de aprendizado em áreas emergentes (IA, sustentabilidade, soft skills)
- Monitorar progresso pessoal e gerar recomendações
- Facilitar inclusão digital por meio de micro cursos gamificados

### 2.3 Conexão com ODS da ONU
- **ODS 4** - Educação de Qualidade: Democratiza acesso à capacitação tecnológica
- **ODS 8** - Trabalho Decente e Crescimento Econômico: Fomenta empregabilidade
- **ODS 9** - Indústria, Inovação e Infraestrutura: Incentiva tecnologias acessíveis
- **ODS 10** - Redução das Desigualdades: Inclui públicos vulneráveis

## 3. Estrutura de Navegação Híbrida

O aplicativo utiliza uma combinação estratégica de três padrões de navegação:

### 3.1 Stack Navigation
- **Função:** Fluxo sequencial e hierárquico entre telas
- **Implementação:** Navegação entre Login → Home → Detalhes
- **Benefício:** Mantém histórico de navegação e permite voltar

### 3.2 Drawer Navigation
- **Função:** Menu lateral para acesso rápido a seções principais
- **Implementação:** Acesso a About e ODS da ONU
- **Benefício:** Navegação global sem ocupar espaço visual

### 3.3 Tab Navigation
- **Função:** Abas inferiores para funcionalidades relacionadas
- **Implementação:** Navegação entre Home, Trilhas, Progresso e Perfil
- **Benefício:** Acesso rápido às funcionalidades principais

## 4. Demonstração das Telas

### 4.1 Tela de Carregamento
![Tela de Carregamento](media/image4.png)

### 4.2 Tela de Login
![Tela de Login](media/image18.png)
*Formulário de autenticação com validação de campos*

### 4.3 Tela Inicial (Home)
![Tela Inicial](media/image17.png)
![Tela Inicial - Continuação](media/image10.png)
*Dashboard com estatísticas, ações rápidas e trilhas em destaque*

### 4.4 Tela de Trilhas
![Tela de Trilhas](media/image11.png)
![Tela de Trilhas - Filtros](media/image15.png)
*Catálogo de cursos com sistema de busca e filtros por categoria*

### 4.5 Tela de Progresso
![Tela de Progresso](media/image8.png)
![Tela de Progresso - Detalhes](media/image9.png)
*Métricas de aprendizado e acompanhamento de evolução*

### 4.6 Tela de Perfil
![Tela de Perfil](media/image12.png)
![Tela de Perfil - Edição](media/image14.png)
*Gestão de dados pessoais com seletor (Picker) de área de interesse*

### 4.7 Sistema de Alertas
![Exemplos de Alertas](media/image13.png)
![Alertas Interativos](media/image16.png)
![Confirmações](media/image5.png)
![Notificações](media/image7.png)
![Feedback](media/image19.png)
*Sistema de feedback e confirmações para ações do usuário*

## 5. Componentes Utilizados

| Componente | Aplicação no App | Exemplo |
|------------|------------------|---------|
| View | Estrutura das telas | Containers de layout |
| ScrollView | Listas de cursos e artigos | Tela de Trilhas |
| TextInput | Formulários de login e busca | Campo de pesquisa |
| Text | Rótulos e descrições | Todos os textos |
| Button/TouchableOpacity | Ações principais | Botões de ação |
| Image | Logotipo e avatares | Foto de perfil |
| StyleSheet | Organização de estilos | Todos os componentes |
| Alert | Mensagens de sistema | Confirmações |
| Picker | Seleção de áreas de interesse | Perfil do usuário |

## 6. Estrutura de Diretórios

![Estrutura de Diretórios](media/image3.png)
