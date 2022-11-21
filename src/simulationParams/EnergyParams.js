import { Container, TextField, Typography } from '@mui/material';

const EnergyParams = () => {
  return (
    <Container style={{ backgroundColor: '#eee', padding: 12 }}>
      <Typography>
        <Typography> n : nombre de bits</Typography>
        <Typography> R : Débit nominal </Typography>
        <Typography>
          {' '}
          Rcode : taux de codage (nbr de bits de code / symbole){' '}
        </Typography>
        <Typography>
          {' '}
          PtxElec : energie pour allimenter certains circuits
        </Typography>
        <Typography> Pamp : energie de l’ampli.</Typography>
      </Typography>
      <TextField label='Rcode' variant='outlined' />
      <TextField label='Pamp' variant='outlined' />
      <TextField label='Tstart' variant='outlined' />
      <TextField label='Pstart' variant='outlined' />
      <TextField label='R' variant='outlined' />
      <TextField label='PtxElec' variant='outlined' />
    </Container>
  );
};

export default EnergyParams;
