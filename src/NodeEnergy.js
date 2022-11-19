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
  // const data = [
  //   {
  //     name: 'Node 1',
  //     uv: 4000,
  //     energy: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Node 2',
  //     uv: 3000,
  //     energy: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Node 3',
  //     uv: 2000,
  //     energy: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Node 4',
  //     uv: 2780,
  //     energy: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Node 5',
  //     uv: 1890,
  //     energy: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Node 6',
  //     uv: 2390,
  //     energy: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'Node 7',
  //     uv: 3490,
  //     energy: 4300,
  //     amt: 2100,
  //   },
  // ];
  return (
    <div>
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
    </div>
  );
}

export default NodeEnergy;
