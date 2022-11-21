import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Label } from 'recharts';

const EnergyParams = ({ simulationParams, setSimulationParams }) => {
  const [localValues, setLocalValues] = useState(simulationParams);

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setLocalValues({
      ...localValues,
      [name]: value,
    });
    console.log(simulationParams);
  };
  const handleSubmitValues = () => {
    setSimulationParams(localValues);
  };
  return (
    <Container style={{ backgroundColor: '#eee', padding: 12 }}>
      <Box sx={{ display: 'flex', p: 5, gap: 2 }}>
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          {' '}
          n : nombre de bits
        </Typography>
        |
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          {' '}
          R : Débit nominal{' '}
        </Typography>
        |
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Rcode : taux de codage (nbr de bits de code / symbole){' '}
        </Typography>
        |
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          PtxElec : energie pour allimenter certains circuits
        </Typography>
        |
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          {' '}
          Pamp : energie de l’amplication .
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 'bold' }}>Clustering</Typography>
      <Box sx={{ display: 'flex', p: 4, gap: 3 }}>
        <Box sx={{ width: 120 }}>
          <FormControl fullWidth>
            <InputLabel>clustering type</InputLabel>
            <Select
              name='clusteringType'
              value={localValues.clusteringType}
              onChange={(e) => handleChangeValue(e)}
            >
              <MenuItem value={0}>Formule 1</MenuItem>
              <MenuItem value={1}>Formule 2</MenuItem>
              <MenuItem value={2}>Formule 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          sx={{ width: 120 }}
          onChange={(e) => handleChangeValue(e)}
          value={localValues.p}
          label='p'
          name='p'
          variant='outlined'
        />
      </Box>
      <Typography sx={{ fontWeight: 'bold' }}>Energies</Typography>

      <Grid container rowGap={2} p={3}>
        <Grid xs={12} item>
          <FormControl fullWidth sx={{ width: 130 }}>
            <InputLabel>Energy type</InputLabel>
            <Select
              name='energyType'
              value={localValues.energyType}
              onChange={(e) => handleChangeValue(e)}
            >
              <MenuItem value={0}>Formule 1</MenuItem>
              <MenuItem value={1}>Formule 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid lg={3} xs={6}>
          <TextField
            onChange={(e) => handleChangeValue(e)}
            value={localValues.Rcode}
            label='Rcode'
            name='Rcode'
            variant='outlined'
          />
        </Grid>

        <Grid lg={3} xs={6}>
          <TextField
            onChange={(e) => handleChangeValue(e)}
            value={localValues.Pamp}
            label='Pamp'
            name='Pamp'
            variant='outlined'
          />
        </Grid>
        <Grid lg={3} xs={6}>
          <TextField
            onChange={(e) => handleChangeValue(e)}
            value={localValues.Tstart}
            label='Tstart'
            name='Tstart'
            variant='outlined'
          />
        </Grid>
        <Grid lg={3} xs={6}>
          <TextField
            onChange={(e) => handleChangeValue(e)}
            value={localValues.Pstart}
            label='Pstart'
            name='Pstart'
            variant='outlined'
          />
        </Grid>
        <Grid lg={3} xs={6}>
          <TextField
            onChange={(e) => handleChangeValue(e)}
            value={localValues.R}
            label='R'
            name='R'
            variant='outlined'
          />
        </Grid>
        <Grid lg={3} xs={6}>
          <TextField
            onChange={(e) => handleChangeValue(e)}
            value={localValues.PtxElec}
            label='PtxElec'
            name='PtxElec'
            variant='outlined'
          />
        </Grid>
        <Grid xs={10} sx={{ p: 3 }}>
          <Button variant='contained' onClick={handleSubmitValues}>
            appliquer
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EnergyParams;
