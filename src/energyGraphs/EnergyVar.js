// var pointCount = 31;
// var i, r;

// var x = [];
// var y = [];
// var z = [];
// var c = [];

// for (i = 0; i < pointCount; i++) {
//   r = 10 * Math.cos(i / 10);
//   x.push(r * Math.cos(i));
//   y.push(r * Math.sin(i));
//   z.push(i);
//   c.push(i);
// }

// Plotly.newPlot('myDiv', [
//   {
//     type: 'scatter3d',
//     mode: 'lines+markers',
//     x: x,
//     y: y,
//     z: z,
//     line: {
//       width: 6,
//       color: c,
//       colorscale: 'Viridis',
//     },
//     marker: {
//       size: 3.5,
//       color: c,
//       colorscale: 'Greens',
//       cmin: -20,
//       cmax: 50,
//     },
//   },
// ]);

// function EnergyVar() {
//   return (
//     <>
//       <head>
//         <script src='https://cdn.plot.ly/plotly-2.16.2.min.js'></script>
//       </head>
//       <div id='myDiv' class='myDiv'></div>
//     </>
//   );
// }

// export default EnergyVar;
