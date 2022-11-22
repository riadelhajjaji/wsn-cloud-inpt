export function select_ch(sensors, p, round_number) {
  sensors.forEach((node) => {
    node.color = '#00ff00';
    node.type = 'n';
  });
  var CH = [];
  sensors.forEach((sensor) => {
    // let sensor = sensors[s];
    // if (sensor.enegy > 0 && sensor.G <= 0) {
    //
    // Election of Cluster Heads
    let temp_rand = Math.random();

    let value1 = round_number % Math.round(1 / p);
    let value = p / (1 - p * value1);
    if (temp_rand <= value) {
      CH.push(sensor);
      sensor.type = 'c';
      sensor.color = '#f00';
      sensor.G = Number(1 / p).toFixed(2) - 1;
    }
    // }
  });
  return CH;
}

//global
var n,
  p,
  energy_max = 5;

function select_cluster_formule1(sensors, p, round_number) {
  console.log(sensors.length);
  var CH = [];
  sensors.forEach((sensor) => {
    let temp_rand = Math.random();
    let value = p / (1 - p * (round_number % Math.round(1 / p)));

    if (temp_rand <= value) {
      CH.push(sensor.id);
      sensor.type = 'C';
      sensor.G = Math.round(1 / p) - 1;
    }
    return CH;
  });
}

function select_cluster_formule2(sensors, p, round_number) {
  console.log(sensors.length);
  var CH = [];
  sensors.forEach((sensor) => {
    let temp_rand = Math.random();
    let value1 = p / (1 - p * (round_number % Math.round(1 / p)));
    let value = value1 * (sensor.energy / energy_max);
    if (temp_rand <= value) {
      CH.push(sensor.id);
      sensor.type = 'C';
      sensor.G = Math.round(1 / p) - 1;
    }
    return CH;
  });
}

function select_cluster_formule3(sensors, round_number) {
  var CH = [];
  sensors.forEach((sensor) => {
    if (sensor.energy > 0 && sensor.G <= 0) {
      let temp_rand = Math.random();
      let value1 = p / (1 - p * (round_number % Math.round(1 / p)));
      let quotient = Math.floor(sensor.R / (1 / p));
      let value2 =
        sensor.energy / energy_max +
        quotient * (1 - sensor.energy / energy_max);
      let value = value1 * value2;

      if (temp_rand <= value) {
        CH.push(sensor.id);
        sensor.type = 'C';
        sensor.G = Math.round(1 / p) - 1;
      }
    }
    return CH;
  });
}
