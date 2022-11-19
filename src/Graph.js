import Graph from 'react-graph-vis';
import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import EnergyScatter from './Scatter';
import NodeEnergy from './NodeEnergy';
import { MAX_ENERGY, RC_ENERGY, TR_ENERGY } from './global';
import {
  INITIAL_EDGES,
  INITIAL_NODES,
  makeClusers,
  makeEdges,
  options,
} from './utilitis';
import WsnNode from './domains/WsnNode';

// --------
// --------
// --------
// --------
// --------
const GraphApp = () => {
  // -----------------------------------------------------
  // -----------------------------------------------------

  const [removed, setRemoved] = useState(null);
  const [reset, setReset] = useState(null);
  const [simulation, setSimulation] = useState(null);
  const [currentNode, setCurrentNode] = useState('not selected');
  const [clusterHeads, setClusterHeads] = useState([1, 2]);
  const [updatEnergy, setUpdatEnergy] = useState(false);
  const [wsnNodes, setWsnNodes] = useState(INITIAL_NODES);
  const [wsnEdges, setWsnEdges] = useState(INITIAL_EDGES);
  // -----------------------------------------------------
  // -----------------------------------------------------

  // const [state, setState] = useState(
  const graphParams = {
    counter: 10,
    graph: {
      nodes: [
        ...wsnNodes.map((node) => {
          return {
            id: node.id,
            label: `${node.getId}`,
            color: node.getColor,
            ...node.getPosition,
          };
        }),
      ],

      edges: wsnEdges,
    },

    events: {
      select: ({ nodes, edges }) => {
        setCurrentNode('Selected node: ' + nodes);
      },
      doubleClick: ({ pointer: { canvas } }) => {
        // createNode(canvas.x, canvas.y);
      },
    },
  };
  // );
  const createNode = (x, y) => {
    // const color = randomColor();
    const id = wsnNodes.length + 1;
    // const from = Math.floor(Math.random() * (id - 1)) + 1;

    // new WsnNode(2, MAX_ENERGY, null, null, { x: 6, y: 23 }),

    setWsnNodes([
      ...wsnNodes,
      new WsnNode(id, MAX_ENERGY, null, null, {
        x,
        y,
      }),
    ]);
    // setState(({ graph: { nodes, edges }, counter, ...rest }) => {
    //
    //   const from = Math.floor(Math.random() * (counter - 1)) + 1;
    //   return {
    //     graph: {
    //       nodes: [...nodes, { id, label: `${id}`, color, x, y }],
    //       edges: [...edges, { from, to: id }],
    //     },
    //     counter: id,
    //     ...rest,
    //   };
    // });
  };
  // -----------------------------------------------------
  // -----------------------------------------------------

  const receiveMsg = (msg, node) => {
    if (simulation) {
      node.setEnergy = node.getEnergy - RC_ENERGY * 40 * Math.random();
      if (node.getEnergy < 0) {
        // setWsnNodes(
        wsnNodes.filter((_node) => {
          node.setColor = '#dd0000';
          return node; // _node.getId !== node.getId;
        });
        // );

        // setWsnEdges(
        //   (edge) => (edge.from !== node.getId) & (edge.to !== node.getId)
        // );
      } else {
      }
    }
  };
  const sendMsg = (msg, node) => {
    node.setEnergy = node.getEnergy - TR_ENERGY;
    if (node.getEnergy < 0) {
      setWsnNodes(wsnNodes.filter((_node) => _node.getId !== node.getId));
    }
  };
  // useEffect(() => {
  const chooseClusterHeads = useCallback(() => {
    const items = wsnNodes.map((e) => e.id);
    const ch1 = items[Math.floor(Math.random() * items.length)];
    const newItems = items.filter((item) => item !== ch1);
    const ch2 = newItems[Math.floor(Math.random() * newItems.length)];
    setClusterHeads([ch1, ch2]);
    console.log([ch1, ch2]);
  }, [wsnNodes]);
  // ----------------------------------------
  // ----------------------------------------

  const startSimulation = () => {
    if (!simulation) {
      setSimulation(setInterval(chooseClusterHeads, 4000));
    }
  };
  const stopSimulation = () => {
    clearInterval(simulation);
    setSimulation(null);
  };
  const resetSimulation = () => {
    clearInterval(simulation);
    setSimulation(null);
    setReset(!reset);
    setWsnNodes(INITIAL_NODES);
    setWsnEdges([]);
    setUpdatEnergy(!updatEnergy);
  };
  // ----------------------------------------
  // ----------------------------------------

  // don't add state dependency bc it will disorder t
  // }, []);

  useEffect(() => {
    const clusters = makeClusers(
      wsnNodes.map((e) => e.id),
      clusterHeads
    );
    // update nodes connections
    const edges = makeEdges(clusterHeads, clusters);

    // update nodes energy every ROUND_DURATION
    setWsnEdges(edges);

    // -----------update energy
    // wsnNodes.forEach((node) => receiveMsg('Hello', node));
    const tmpWsn = wsnNodes.map((node) => {
      node.receivePackets('hello');
      return node;
    });
    setWsnNodes(tmpWsn);
    // setWsnNodes(
    //   wsnNodes.filter((node) => {
    //     node.setEnergy = node.getEnergy - 500;
    //     receiveMsg('hello', node, setWsnNodes);
    //     return node.getEnergy > 0;
    //  {

    //   return node;
    // }
    //   })
    // );
    //  setRemoved(2);
    // setWsnNodes(wsnNodes.filter((_node) => _node.getId !== 4));

    setUpdatEnergy(!updatEnergy);
    // -------------
  }, [clusterHeads]);

  // --------
  // --------
  // --------
  // --------

  return (
    <div>
      <main>
        <Box
          item
          xs={12}
          p={2}
          paddingTop={9}
          paddingLeft={9}
          style={{
            display: 'flex',
            columnGap: 40,
            border: '1px solid #000',
          }}
        >
          <ButtonGroup>
            <Button onClick={startSimulation}>start</Button>
            <Button onClick={stopSimulation}>stop</Button>
            <Button onClick={resetSimulation}>reset</Button>
          </ButtonGroup>
          <Box sx={{ fontWeight: 'bold', color: 'blue' }}>{currentNode}</Box>
          <Button
            onClick={() => {
              const x = Math.floor(Math.random() * 800);
              const y = Math.floor(Math.random() * 800);

              createNode(x, y);
            }}
            color='secondary'
            variant='contained'
            style={{ height: 30 }}
            p={4}
          >
            add node
          </Button>
        </Box>

        <Grid container style={{}}>
          <Grid item xs={8} style={{ border: '1px solid #000' }}>
            <Graph
              graph={graphParams.graph}
              options={options}
              events={graphParams.events}
            />
          </Grid>
          <Grid item xs={4}>
            <Box style={{ pt: 12 }}>
              <NodeEnergy wsnNodes={wsnNodes} updatEnergy={updatEnergy} />
              <EnergyScatter
                wsnNodes={wsnNodes}
                updatEnergy={updatEnergy}
                reset={reset}
              />
            </Box>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default GraphApp;
