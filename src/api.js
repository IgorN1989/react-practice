import axios from 'axios';

axios.defaults.baseURL = 'https://654e8969cbc325355742f33a.mockapi.io/api';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizs');
  return response.data;
};

export const createQuiz = async quiz => {
  const response = await axios.post('/quizs', quiz);
  return response.data;
};

export const deleteQuizById = async quizId => {
  const response = await axios.delete(`/quizs/${quizId}`);
  return response.data;
};
