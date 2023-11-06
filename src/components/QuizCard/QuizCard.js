import { Info, InfoWrapper, Container } from './QuizCard.styled';
import { HiTrash } from 'react-icons/hi';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Container $level={level}>
      <h2>{topic}</h2>
      <button onClick={() => onDelete(id)}>
        <HiTrash />
      </button>
      <InfoWrapper>
        <Info>Level: {level}</Info>
        <Info>Time: {time} min</Info>
        <Info>Questions: {questions}</Info>
      </InfoWrapper>
    </Container>
  );
};
