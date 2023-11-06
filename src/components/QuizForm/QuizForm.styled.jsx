import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  max-width: 500px;
  outline: 3px solid tomato;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;
`;
