import { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import Modal from 'react-modal';
import { Info, InfoWrapper, Container } from './QuizCard.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container $level={level}>
      <h2>{topic}</h2>
      <InfoWrapper>
        <Info>Level: {level}</Info>
        <Info>Time: {time} min</Info>
        <Info>Questions: {questions}</Info>
      </InfoWrapper>

      <button onClick={() => onDelete(id)}>
        <HiTrash />
      </button>

      <button onClick={openModal}>Open modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>I`m a modal window {topic}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </Container>
  );
};
