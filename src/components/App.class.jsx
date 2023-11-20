import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';
import { QuizList } from './QuizList/QuizList';
// import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { QuizForm } from './QuizForm/QuizForm';
import { Layout } from './Layout/Layout';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { createQuiz, fetchQuizzes, deleteQuizById } from 'api';

export class App extends Component {
  state = {
    quizItems: [],
    loading: false,
    error: false,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  async componentDidMount() {
    const savedFilters = localStorage.getItem(`quiz-filters`);
    if (savedFilters !== null) {
      this.setState({ filters: JSON.parse(savedFilters) });
    }

    try {
      this.setState({ loading: true, error: false });
      const quizzes = await fetchQuizzes();
      toast.success('We found quizzes!');
      this.setState({
        quizItems: quizzes,
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem(`quiz-filters`, JSON.stringify(this.state.filters));
    }
  }

  // componentWillUnmount() {}

  addQuizItem = async newQuiz => {
    try {
      this.setState({ loading: true, error: false });
      const quiz = await createQuiz(newQuiz);
      this.setState(prevState => ({
        quizItems: [...prevState.quizItems, quiz],
      }));
      toast.success('Quiz was added!');
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }

    //   this.setState(prevState => ({
    //   quizItems: [...prevState.quizItems, { ...newQuiz, id: nanoid() }],
    // }));
  };

  deleteQuizItem = async quizId => {
    try {
      this.setState({ loading: true, error: false });
      const deletedQuiz = await deleteQuizById(quizId);
      this.setState(prevState => ({
        quizItems: prevState.quizItems.filter(
          quiz => quiz.id !== deletedQuiz.id
        ),
      }));
      toast.success('Quiz was deleted!');
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
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
    const { filters, loading, error } = this.state;
    const visibleItems = this.getVisibleItems();

    return (
      <Layout>
        <QuizForm onAdd={this.addQuizItem} />
        <SearchBar
          filters={filters}
          onChangeFilter={this.changeFilter}
          onReset={this.resetFilters}
        />

        {loading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
        {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )}
        {visibleItems.length > 0 && (
          <QuizList items={visibleItems} onDelete={this.deleteQuizItem} />
        )}
        <Toaster />
      </Layout>
    );
  }
}
