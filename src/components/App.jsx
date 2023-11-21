import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const QuizzesPage = lazy(() => import('../pages/QuizzesPage'));
const CreateQuizPage = lazy(() => import('../pages/CreateQuizPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const QuizDetailsPage = lazy(() => import('../pages/QuizDetailsPage'));

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
