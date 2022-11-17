// возвращает NaN
function random(min, max, round = 3){
  if (max < 0 || min < 0 || max <= min){
    return NaN;
  }
  const rand = Math.random() * (max - min) + min;
  return +rand.toFixed(round);
}
random(1, 3, 3);


// просит ввести другие числа
function random2(min, max, round = 3){
  if (max < 0 || min < 0 || max <= min){
    return('попробуйте ввести другие числа');
  }
  const rand = Math.random() * (max - min) + min;
  return +rand.toFixed(round);
}
random2(1, 3, 3);

//меняет minmax местами
function random3(min, max, round = 3){
  if (max < 0 || min < 0 || max <= min){
    const crutchMax = min;
    min = max;
    max = crutchMax;
  }else if (max === min){
    return NaN;
  }
  const rand = Math.random() * (max - min) + min;
  return +rand.toFixed(round);
}
random3(1, 3, 3);

{/* методы взяты из учебника https://learn.javascript.ru/ */}
