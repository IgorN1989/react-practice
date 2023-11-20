import { StyledLink } from '../Link/Link.styled';
import { Toaster } from 'react-hot-toast';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <ul style={{ display: 'flex', gap: '60px' }}>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/create">Create quiz</StyledLink>
            </li>
            <li>
              <StyledLink to="/quizzes">Quiz list</StyledLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
      <Toaster position="top-right" />
    </Container>
  );
};
