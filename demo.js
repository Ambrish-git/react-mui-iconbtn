import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { styled } from '@mui/material/styles';
const BootstrapButton = styled(IconButton)({
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
    boxShadow: 'none',
  },
});
export default function IconButtonColors() {
  return (
    <Stack direction="row" spacing={1}>
      <BootstrapButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </BootstrapButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>
  );
}
