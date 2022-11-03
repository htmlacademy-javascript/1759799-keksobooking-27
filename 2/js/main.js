// возвращает NaN
function randomInteger(min, max, round){
  if (max < 0 || min < 0 || max <= min){
    return NaN;
  }
  let rand = Math.random() * (max - min + 1) + min;
  return rand.toFixed(round);
}


// просит ввести другие числа
function randomInteger2(min, max, round){
  if (max < 0 || min < 0 || max <= min){
    return alert("попробуйте ввести другие числа");
  }
  let rand = Math.random() * (max - min + 1) + min;
  return rand.toFixed(round);
}

//меняет minmax местами
function randomInteger3(min, max, round){
  if (max < 0 || min < 0 || max <= min){
    let crutchmax = min;
    min = max;
    max = crutchmax;
  }else if (max == min){
    return NaN;
  }
  let rand = Math.random() * (max - min + 1) + min;
  return rand.toFixed(round);
}

{/* методы взяты из учебника https://learn.javascript.ru/ */}
