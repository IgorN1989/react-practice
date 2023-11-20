import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  &.active {
    font-weight: 700;
    color: tomato;
  }
`;
