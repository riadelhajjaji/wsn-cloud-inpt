import Graph from 'react-graph-vis';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { MAX_ENERGY } from './global';
import { addWsnNodes, makeClusers, makeEdges, options } from './utilitis';
import WsnNode from './domains/WsnNode';
import { select_ch } from './clusterG/select_ch';
import NodeEnergy from './GRAPHS/NodeEnergy';
import EnergyVariation from './GRAPHS/EnergyVariation';
import TotalEnergyGraph from './GRAPHS/TotalEnrgyGraph';
import EnergyParams from './simulationParams/EnergyParams';

// --------
// --------
// --------
// --------
// --------
const GraphApp = () => {
  // -----------------------------------------------------
  // -----------------------------------------------------
  const [simulationParams, setSimulationParams] = useState({
    p: 0.23,
    Rcode: 1,
    R: 1,
    Pamp: 4,
    Tstart: 1,
    Pstart: 1,
    PtxElec: 2,
    nbNodes: 20,
    Nt: 1,
    Pt: 1,
    Pr: 1,
    Tst: 1,
    Pout: 1,
    Nr: 1,
    Ron: 1,
    Rst: 1,
    energyType: 0,
    clusteringType: 0,
  });
  const [removed, setRemoved] = useState(null);
  const [reset, setReset] = useState(false);
  const [simulation, setSimulation] = useState(null);
  const [currentNode, setCurrentNode] = useState('not selected');

  const [updatEnergy, setUpdatEnergy] = useState(false);
  const [wsnNodes, setWsnNodes] = useState(addWsnNodes(50));
  const [clusterHeads, setClusterHeads] = useState([
    addWsnNodes(20)[0],
    addWsnNodes(20)[1],
  ]);
  const [wsnEdges, setWsnEdges] = useState([]); // [[[[[[[[----------------------]]]]]]]]
  const [round, setRound] = useState(0);
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
            label: `${node.id}`,
            color: node.color,
            ...node.position,
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
    const id = wsnNodes.length + 1;

    setWsnNodes([
      ...wsnNodes,
      new WsnNode(id, MAX_ENERGY, null, null, {
        x,
        y,
      }),
    ]);
  };

  const chooseClusterHeads = useCallback(() => {
    setClusterHeads(select_ch(wsnNodes, simulationParams.p, round));
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
    setReset(true);
    setWsnNodes((wsn) => addWsnNodes(20));
    setWsnEdges([]);
    setUpdatEnergy(!updatEnergy);
  };
  // ----------------------------------------
  // ----------------------------------------

  // don't add state dependency bc it will disorder t
  // }, []);

  useEffect(() => {
    // const clusters = makeClusers(wsnNodes, clusterHeads);
    // update nodes connections
    const edges = makeEdges(wsnNodes, clusterHeads);

    // update nodes energy every ROUND_DURATION
    setWsnEdges(edges);

    clusterHeads.forEach((ch) => {
      wsnNodes.map((node) => {
        ch.broadcast(simulationParams, 'broadcast', node);
      });
    });
    const tmpWsn = wsnNodes.map((node) => {
      node.sendPackets(simulationParams, 'hello');

      return node;
    });
    setWsnNodes(tmpWsn.filter((node) => node.energy > 0));

    setRound((round) => round + 1);
  }, [clusterHeads]);

  // --------
  // --------
  // --------
  // --------
  console.log(wsnNodes);
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
            alignItems: 'center',
          }}
        >
          <ButtonGroup>
            <Button onClick={startSimulation}>start</Button>
            <Button onClick={stopSimulation}>stop</Button>
            <Button onClick={resetSimulation}>reset</Button>
          </ButtonGroup>

          <Box
            sx={{
              display: 'flex',
              p: 1,
              alignItems: 'center',
            }}
          >
            <TextField
              name='add node'
              variant='outlined'
              type='number'
              sx={{ width: 100 }}
            />{' '}
            <Button
              onClick={() => {
                const x = Math.floor(Math.random() * 800);
                const y = Math.floor(Math.random() * 800);

                createNode(x, y);
              }}
              color='primary'
              variant='contained'

              // padding={4}
            >
              +
            </Button>
          </Box>
          <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>
            {' '}
            Round : {round}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>
            {' '}
            Cluster Heads : {clusterHeads.length}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>
            {' '}
            number of nodes : {wsnNodes.length}
          </Typography>
        </Box>

        <Grid container style={{}}>
          <Grid item xs={8} style={{ border: '1px solid #000', height: 800 }}>
            <Graph
              graph={graphParams.graph}
              options={options}
              events={graphParams.events}
            />
            <Box style={{ padding: 12, marginTop: 20 }}>
              <EnergyParams
                simulationParams={simulationParams}
                setSimulationParams={setSimulationParams}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ pt: 12 }}>
              <NodeEnergy wsnNodes={wsnNodes} updatEnergy={updatEnergy} />
              <EnergyVariation
                wsnNodes={wsnNodes}
                // updatEnergy={updatEnergy}
                reset={reset}
              />

              <TotalEnergyGraph
                wsnNodes={wsnNodes}
                //  updatEnergy={updatEnergy}
                // reset={reset}
              />
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </main>
    </div>
  );
};

export default GraphApp;
