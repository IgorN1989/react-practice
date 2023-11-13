import styled from 'styled-components';

const getBackgroundColor = ({ theme, $level }) => {
  switch ($level) {
    case 'beginner':
      return theme.colors.beginner;
    case 'intermediate':
      return theme.colors.intermediate;
    case 'advanced':
      return theme.colors.advanced;
    default:
      return null;
  }
};

export const Container = styled.div`
  border: 3px solid ${getBackgroundColor};
  border-radius: 4px;
  background-color: ${getBackgroundColor};
  /* color: rgb(0, 128, 0, 0.3);
  color: rgb(0, 0, 255, 0.3);
  color: rgb(255, 165, 0, 0.3); */
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)};
`;

export const Info = styled.p`
  margin: 0;
`;
