import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const style = {
  position: 'absolute',
  top: '66%',
  bottom: '1%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  border: '1px solid #fff',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  overflow: 'auto',
  height:600
};

export const ButtonLink = styled(Button)`
  color: #ffe81f;
  display: grid;

  :hover {
    color: #ffe;
  }
  border: 1px solid #ffe81f;
  margin: 12px;
`;
