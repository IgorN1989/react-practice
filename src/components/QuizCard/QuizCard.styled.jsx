import styled from 'styled-components';

const getBorderColor = ({ theme, $level }) => {
  switch ($level) {
    case 'beginner':
      return 'green';
    case 'intermediate':
      return 'blue';
    case 'advanced':
      return theme.colors.orange;
    default:
      return null;
  }
};

export const Container = styled.div`
  border: 3px solid ${getBorderColor};
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)};
`;

export const Info = styled.p`
  margin: 0;
`;
