import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { ROUND_DURATION } from '../global';

const TotalEnergyGraph = ({ wsnNodes }) => {
  const [energies, setEnergies] = useState([]);
  const [totalEnergyData, setTotalEnergyData] = useState([]);

  useEffect(() => {
    const matriceOfEnergies = wsnNodes.map((node) => node.energies);

    const pastEnergies = matriceOfEnergies.reduce((r, a) => {
      a.forEach((b, i) => {
        r[i] = (r[i] || 0) + b;
      });
      return r;
    }, []);

    const currentTotalEnergies = wsnNodes.reduce(
      (node1, node2) => node1.energy + node2.energy,
      0
    );
    setEnergies([...pastEnergies, currentTotalEnergies]);
    setTotalEnergyData(
      energies.map((Ev, index) => {
        return { x: index * ROUND_DURATION, y: Ev };
      })
    );
    console.log(energies);
  }, [wsnNodes]);

  return (
    <Container>
      <Typography style={{ fontWeight: 'bold' }}>
        Variation d'energie total tous les noeuds
      </Typography>
      <ScatterChart
        width={500}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type='number' dataKey='x' name='stature' unit='s' />
        <YAxis type='number' dataKey='y' name='weight' unit='w' />
        <ZAxis type='number' range={[100]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />

        <Scatter
          name='Total Energy'
          data={totalEnergyData}
          fill='red'
          line
          shape='none'
        />
      </ScatterChart>
    </Container>
  );
};
export default TotalEnergyGraph;
