import { useState } from 'react';
import toast from 'react-hot-toast';
import { QuizForm } from 'components/QuizForm/QuizForm';
import { createQuiz } from 'api';

export default function CreateQuizPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz(newQuiz);
      toast.success('Quiz was added!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <QuizForm onAdd={addQuiz} />
      {loading && <div>ADDING QUIZ...</div>}
      {error && <div>OOPS! AN ERROR!</div>}
    </div>
  );
}
