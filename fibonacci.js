// non recursive implementation
const fibs = (size) => {
  let sequence = [];
  let i = 0;

  while (size != 0) {
    if (sequence.length === 0) {
      sequence.push(i);
      i++;
    } else if (sequence.length === 1) {
      sequence.push(i);
    } else {
      i = i + sequence.at(-2);
      sequence.push(i);
    }
    size--;
  }
  return sequence;
};

/*
recursive implementation:
pseudocode:
if (n is less than or equal to 1)
  return n
else
  fib = fib(n - 1) + fib(n - 2)
*/
const fibsRec = (size) => {
  if (size <= 1) return size;
  return fibsRec(size - 1) + fibsRec(size - 2);
};

for (let i = 0; i < 8; i++) {
  console.log(fibsRec(i));
}
