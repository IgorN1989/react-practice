import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  margin-top: ${p => p.theme.spacing(8)};
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 32px) / 3);
`;
