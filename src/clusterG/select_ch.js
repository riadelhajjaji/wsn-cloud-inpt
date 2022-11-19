//importation

function zeros(row, column) {
  var returned_list = [];
  let temp_list;
  for (let i = 0; i < row; i++) {
    temp_list = Array.apply(0, { length: column }).map((i) => 0);
    if (row == 1) {
      returned_list.concat(temp_list);
    } else {
      returned_list.push(temp_list);
    }
  }
}

function start(sensors, my_model, round_number) {
  var CH = [];
  var n = my_model.n;

  for (let s in sensors) {
    let sensor = sensors[s];
    if (sensor.E > 0 && sensor.G <= 0) {
      // Election of Cluster Heads
      let temp_rand = Math.random();
      let value =
        my_model.p /
        (1 - my_model.p * (round_number % Number(1 / my_model.p).toFixed(2)));
      if (temp_rand <= value) {
        CH.push(sensor.id);
        sensor.type = 'C';
        sensor.G = Number(1 / my_model.p).toFixed(2) - 1;
      }
    }
    return CH;
  }
}
