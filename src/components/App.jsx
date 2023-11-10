import { Component } from 'react';
import { nanoid } from 'nanoid';
import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { QuizForm } from './QuizForm/QuizForm';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  componentDidMount() {
    const savedFilters = localStorage.getItem(`quiz-filters`);
    if (savedFilters !== null) {
      this.setState({ filters: JSON.parse(savedFilters) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem(`quiz-filters`, JSON.stringify(this.state.filters));
    }
  }

  // componentWillUnmount() {}

  addQuizItem = newQuiz => {
    console.log(newQuiz);
    this.setState(prevState => ({
      quizItems: [...prevState.quizItems, { ...newQuiz, id: nanoid() }],
    }));
  };

  deleteQuizItem = quizId => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
    }));
  };

  changeFilter = (key, value) => {
    this.setState(prevValue => ({
      filters: {
        ...prevValue.filters,
        [key]: value,
      },
    }));
  };

  resetFilters = () => {
    this.setState({ filters: { topic: '', level: 'all' } });
  };

  getVisibleItems = () => {
    const { quizItems, filters } = this.state;

    return quizItems.filter(quiz => {
      const topicFilter = filters.topic.toLowerCase();
      const hasTopic = quiz.topic.toLowerCase().includes(topicFilter);

      if (filters.level === 'all') {
        return hasTopic;
      }

      return hasTopic && quiz.level === filters.level;
    });
  };

  render() {
    const { filters } = this.state;
    const visibleItems = this.getVisibleItems();

    return (
      <Layout>
        <QuizForm onAdd={this.addQuizItem} />
        <SearchBar
          filters={filters}
          onChangeFilter={this.changeFilter}
          onReset={this.resetFilters}
        />
        <QuizList items={visibleItems} onDelete={this.deleteQuizItem} />
      </Layout>
    );
  }
}
