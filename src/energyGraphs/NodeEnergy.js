import { Container, Typography } from '@mui/material';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function NodeEnergy({ wsnNodes }) {
  const data = wsnNodes.map((node) => {
    return {
      name: `node ${node.getId}`,
      uv: 4000,
      energy: node.getEnergy,
      amt: 2400,
    };
  });

  return (
    <Container style={{ padding: 12 }}>
      <Typography style={{ fontWeight: 'bolder' }}>
        L'energie residuel de chaque noeud
      </Typography>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey='name' scale='point' padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray='3 3' />
        <Bar dataKey='energy' fill='#8884d8' background={{ fill: '#eee' }} />
      </BarChart>
    </Container>
  );
}

export default NodeEnergy;
