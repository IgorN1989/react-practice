import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  max-width: 500px;
  /* outline: 3px solid tomato; */
  margin-bottom: ${p => p.theme.spacing(8)};
`;

export const Group = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  padding-bottom: 12px;
`;

export const ErrMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -4px;
  color: ${p => p.theme.colors.error};
  font-size: 14px;
`;
