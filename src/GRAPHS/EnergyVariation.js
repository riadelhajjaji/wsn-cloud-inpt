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
import { MAX_ENERGY, ROUND_DURATION } from '../global';
import { randomColor } from '../utilitis';

const EnergyVariation = ({ wsnNodes, updatEnergy, removed, reset }) => {
  //   const [energies, setEnergies] = useState([
  //     ...wsnNodes.map((n) => {
  //       return [MAX_ENERGY];
  //     }),
  //   ]);
  const [energies, setEnergies] = useState([]);
  //   useEffect(() => {
  //     if (removed) {
  //       setEnergies([
  //         energies.slice(0, removed),
  //         energies.slice(removed + 1, energies.length - 1),
  //       ]);
  //     }
  //     const tmpEnergies = wsnNodes.map((node) => {
  //       return [...energies[node.getId - 1], node.getEnergy];
  //     });

  //     setEnergies(tmpEnergies);
  //   }, [updatEnergy]);
  //   useEffect(() => {
  //     setEnergies([
  //       ...wsnNodes.map((n) => {
  //         return [MAX_ENERGY];
  //       }),
  //     ]);
  //     // -------------
  //   }, [reset]);

  useEffect(() => {
    setEnergies(
      wsnNodes.map((n) => {
        if (reset) return [];
        else return n.energies;
      })
    );
  }, [wsnNodes]);
  //
  const data = energies.map((nodeE) => {
    return nodeE.map((Ev, index) => {
      return { x: index * ROUND_DURATION, y: Ev };
    });
  });
  return (
    <Container>
      <Typography style={{ fontWeight: 'bold' }}>
        Variation d'energie de chaque noeud
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
        {data.map((nodeData, index) => (
          <Scatter
            key={index}
            name={index + 1}
            data={nodeData}
            fill={randomColor()}
            line
            shape='none'
          />
        ))}
      </ScatterChart>
    </Container>
  );
};
export default EnergyVariation;
