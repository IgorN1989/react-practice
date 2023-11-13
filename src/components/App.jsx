import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { QuizForm } from './QuizForm/QuizForm';
import { Layout } from './Layout/Layout';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { createQuiz, fetchQuizzes, deleteQuizById } from 'api';

const getInitialFilters = () => {
  const savedFilters = localStorage.getItem(`quiz-filters`);
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return {
    topic: '',
    level: 'all',
  };
};

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(getInitialFilters);

  useEffect(() => {
    localStorage.setItem(`quiz-filters`, JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true);
        setError(false);
        const quizzes = await fetchQuizzes();
        toast.success('We found quizzes!');
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getQuizzes();
  }, []);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      const quiz = await createQuiz(newQuiz);
      setQuizItems(prevState => [...prevState.quizItems, quiz]);
      toast.success('Quiz was added!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteQuizItem = async quizId => {
    try {
      setLoading(true);
      setError(false);
      const deletedQuiz = await deleteQuizById(quizId);
      setQuizItems(prevState =>
        prevState.filter(quiz => quiz.id !== deletedQuiz.id)
      );
      toast.success('Quiz was deleted!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const changeFilter = (key, value) => {
    setFilters(prevState => ({ ...prevState, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ topic: '', level: 'all' });
  };

  const visibleItems = quizItems.filter(quiz => {
    const topicFilter = filters.topic.toLowerCase();
    const hasTopic = quiz.topic.toLowerCase().includes(topicFilter);

    if (filters.level === 'all') {
      return hasTopic;
    }

    return hasTopic && quiz.level === filters.level;
  });

  return (
    <Layout>
      <QuizForm onAdd={addQuiz} />
      <SearchBar
        filters={filters}
        onChangeFilter={changeFilter}
        onReset={resetFilters}
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
        <QuizList items={visibleItems} onDelete={deleteQuizItem} />
      )}
      <Toaster />
    </Layout>
  );
};
