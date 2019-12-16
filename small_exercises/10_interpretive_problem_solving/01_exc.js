function toggle(index, lights) {
  if (lights[index] === 0) {
    lights[index] = 1;
  } else {
    lights[index] = 0;
  }
}

function lightsOn(switches) {
  const lights = new Array(switches).fill(0);

  for (let round = 1; round <= switches; round += 1) {
    lights.forEach((light, index) => {
      const lightNo = index + 1;
      if (lightNo % round === 0) {
        toggle(index, lights);
      }
    });
  }

  return lights.reduce((array, light, index) => {
    if (light) array.push(index + 1);
    return array;
  }, []);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn());         // []
