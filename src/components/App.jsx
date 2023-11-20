import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage';
import QuizzesPage from 'pages/QuizzesPage';
import CreateQuizPage from 'pages/CreateQuizPage';
import NotFoundPage from 'pages/NotFoundPage';
import QuizDetailsPage from 'pages/QuizDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateQuizPage />} />
        <Route path="quizzes" element={<QuizzesPage />} />
        <Route path="quizzes/:quizId" element={<QuizDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
