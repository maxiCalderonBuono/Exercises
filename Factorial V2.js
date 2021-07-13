
// Otra forma de resolver el factorial ----------------------------------------------

const factor = (num) => {
  if (num <0) return ;
  if (num === 0) return 1;
  if (num > 0) {
    return num * factor (num -1);
  }
}

console.log(factor(4));